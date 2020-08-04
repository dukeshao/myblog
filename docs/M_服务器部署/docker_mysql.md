---
title: docker_mysql
categories:
- M_服务器部署
date: 2020-08-04 23:20:15
tags:
- docker
- mysql
---

## 拉取 mysql 镜像

\$开头的语句，表示执行的命令

查看版本 https://hub.docker.com/_/mysql?tab=tags

```bash
$ docker pull mysql:5.7

# 运行
$ docker run -p 3316:3306 --name mysql57 -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7
# 说明：
# -p 3316:3306 是把容器的3306端口映射到本机的3316端口
# –name 是给运行的容器一个别名
# -e MYSQL_ROOT_PASSWORD=123456 是初始化 MySQL 的密码
```

## 设置

```bash
# 测试
$ mysql -h127.0.0.1  -P 3317 -uroot -p123456
# 目前还不能成功执行，需要进入容器设置权限
$ docker exec -it mysql57 bash
# 进入容器后执行
$ mysql -uroot -p123456
mysql: [Warning] Using a password on the command line interface can be insecure.
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 3
Server version: 5.7.26 MySQL Community Server (GPL)

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

$ mysql>update mysql.user set host="%" where user="root";
$ mysql>flush privileges;
```

然后可以本机使用 navicat 连接测试，或者自行写 node 接口，本机使用 postman 调用测试。

## 踩过的坑：

1.本机 navicat 能够连接访问，但是调用 node 接口访问没有权限

2.还有很多安装过程中的坑，就没有一一记录了。

3.mysql@8.x 的默认加密方式不一样，在网上搜了很多解决方案，别人能成功的自己这里却不能，所以选择了安装低版本5.7的 mysql。暂时先这样吧，有时间再搞一个8版本的。

