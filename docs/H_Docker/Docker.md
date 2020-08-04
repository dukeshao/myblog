---
title: Docker
categories:
- H_Docker
date: 2020-02-07 23:28:27
tags:
---

##  一、docker save保存运行中的镜像

```bash
#docker save "镜像地址名称":"版本">"保存为的路径和文件名"
docker save registry.paas/cmss/default-http-backend:v3.0>/opt/test.tar.gz
```

## Centos docker安装

一、自动安装

```bash
# 使用官方安装脚本自动安装
curl -fsSL https://get.docker.rom | bash -s docker --mirror Aliyun
# 也可以使用国内 daocloud 一键安装命令
curl -sSL https://get.daocloud.io/docker | sh
```

二、手动安装

卸载旧版本

较旧的 Docker 版本称为 docker 或 docker-engine ，如果已安装这些程序，请卸载及相关依赖

```bash
sudo yum remove docker \ 
				docker-client \
                docker-client-latest \
                docker-common \
                docker-latest \
                docker-latest-logrotate \
                docker-logrotate \
                docker-engine
```

安装 docker engine-community

使用 docker 仓库进行安装

在新主机上首次安装 docker engine-community 之前，需要设置 docker 仓库。之后可以从仓库安装和更新 docker

#### 设置仓库

安装所需的软件包：yum-utils 提供了 yum-config-manager，并且 device mapper 存储驱动程序需要 device-mapper-persistent-data 和 lvm2

```bash
sudo yum install -y yum-utils \
device-mapper-persistent-data \
  lvm2
```

使用以下命令来设置稳定的仓库

```bash
sudo yum-config-manager \
    --add-repo \
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
```

安装 docker engine-community

安装最新版本的 docker engine-community 和 containerd

```bash
sudo yum install docker-ce docker-ce-cli containerd.io
```

 如果要安装特定版本，列出并排序可用的版本

```bash
yum list docker-ce --showduplicates | sort -r
```

通过其完整的软件包名称安装特定版本，该软件包名称是软件包名称（docker-ce）加上版本字符串（第二列），从第一个冒号（:）一直到第一个连字符，并用连字符（-）分隔。例如：docker-ce-18.09.1。

```bash
sudo yum install docker-ce-<VERSION_STRING> docker-ce-cli-<VERSION_STRING> containerd.io
```

启动 docker

```bahs
sudo systemctl start docker
```

通过运行 hello-world 映像来验证是否正确安装了 docker engine-community

```bash
sudo docker run hello-world
# 查看镜像列表
docker images
# 删除刚才测试用拉取的镜像 hello-world:latest
docker rmi hello-world:latest
```

## 部署一个 node 服务

环境：基于已安装 docker 的服务器

```bash
# 首先拉取一个 node:latest 镜像
docker pull node:latest
```

将已写好的 node 应用文件传至服务器，路径随意(/app/chatroom),我的应用根目录叫 chatroom，是一个聊天室web应用

```bash
--chatroom
	--server.js
	--index.html
	--Dockerfile
```

在应用根目录下创建 Dockerfile，并编写

```bash
# 拉取镜像
FROM node:latest
# 在容器中创建目录
RUN mkdir -p /myapp/chatroom
# 应用在容器中的工作目录
WORKDIR /myapp/chatroom
# 将 Dockerfile 所在目录的所有文件拷贝到 容器的指定目录
COPY . /myapp/chatroom
# 在容器工作目录中执行命令 npm i 安装依赖
RUN npm i
# 当前应用从容器暴露的端口为 3000
EXPOSE 3000
# 启动应用命令 (或者 node back/server.js)
CMD cd back && node server 
```

构建镜像

```bash
# docker build -t <镜像取名> .
docker build -t chatroom .
```

 查看镜像列表

```bash
docker images
```

运行镜像

```bash
# docker run -d -p 3000:3000 <镜像名>
docker run -d -p 3000:3000 chatroom
```

>   -d:表明容器会在后台运行
>
>   -p:表示端口映射，把本机的3000端口映射到容器的3000端口，这样外网就能通过本机的3000端口访问我们的应用了



## 容器的操作

进入容器

```bash
# docker exec -it <容器ID> /bin/bash
docker exec -it 9e8c6e4dea1b /bin/bash
```

离开容器

```
exit
```



## 常用命令

```bash
# 1. docker images [options "o">] [name] 列出所有镜像

-a 列出所有镜像（含过程镜像）；
-f 过滤镜像，如： -f ['dangling=true'] 只列出满足
dangling=true 条件的镜像；
--no-trunc 可显示完整的镜像ID；
-q 仅列出镜像ID。
--tree 以树状结构列出镜像的所有提交历史。

# 2. docker ps 列出所有运行中容器。
-a 列出所有容器（含沉睡镜像）；
--before="nginx" 列出在某一容器之前创建的容器，接受容器名称和ID作为参数；
--since="nginx" 列出在某一容器之后创建的容器，接受容器名称和ID作为参数；
-f [exited=<int>] 列出满足
exited=<int> 条件的容器；
-l 仅列出最新创建的一个容器；
--no-trunc 显示完整的容器ID；
-n=4 列出最近创建的4个容器；
-q 仅列出容器ID；
-s 显示容器大小。

# 3. docker rmi
docker rmi [options "o">] <image>  "o">[image...]
docker rmi nginx:latest postgres:latest python:latest

从本地移除一个或多个指定的镜像。
-f 强行移除该镜像，即使其正被使用；
--no-prune 不移除该镜像的过程镜像，默认移除。

要删除全部image的话
docker rmi $(docker images -q)

# 4. docker rm
docker rm [options "o">] <container>  "o">[container...]
docker rm nginx-01 nginx-02 db-01 db-02
sudo docker rm -l /webapp/redis

-f 强行移除该容器，即使其正在运行；
-l 移除容器间的网络连接，而非容器本身；
-v 移除与容器关联的空间。

docker rm $(docker ps -aq) ：删除所有容器
docker stop [NAME]/[CONTAINER ID]:将容器退出。
docker kill [NAME]/[CONTAINER ID]:强制停止一个容器。

```

## 常用命令2

```bash
1.docker version   #查看docker的版本
2.docker info   #查看docker的详细信息
3.docker images   #查看本地所有镜像
4.docker images nginx   #查看本地与nginx的相关的镜像
5.docker ps -a   #查看当前所有容器的状态（包括没有运行的）
6.docker ps   #查看当前正在运行的容器的状态
7.docker stop vm1   #停止容器vm1(容器vm1存在,并运行)
8.docker start vm1   #启动容器vm1(容器vm1存在,但没有运行)
9.docker kill vm1   #强制干掉容器vm1(容器vm1存在,并运行)
10.docker attach vm1   #连接容器vm1(当容器vm1正在运行,要再次连接时,使用该命令)
11.docker diff vm1   #查看容器vm1的修改(A – Add;D – Delete;C – Change)
12.docker top vm1   #查看容器vm1的进程
13.docker stats vm1   #查看容器vm1的资源使用率
14.docker pause/unpause vm1   #暂停/恢复容器vm1(但是docker ps中显示仍在运行状态)
15.docker cp index.html vm1:/usr/share/nginx/html   #同docker container cp index.html vm1:/usr/share/nginx/html。拷贝index.html文件到nginx创建的容器vm1的默认发布目录(/usr/share/nginx/html)下。在"Linux下docker应用初体验之nginx，ubuntu，rhel7镜像的使用"文章中使用过。
16.docker logs vm1   #查看容器vm1的日志(即在容器vm1中的所有操作)
17.docker port vm1   #查看容器vm1的端口映射情况(容器vm1正在运行)
18.docker network ls   #列出当前有哪些网络类型
19.docker volume ls   #列出当前有哪些数据卷
20.docker build -t rhel7:apache .   #使用当前目录下Dockerfile文件创建镜像rhel7:apache
21.docker tag rhel7:nginx4 localhost:5000/rhel7:nginx4   #相当于将rhel7:nginx4镜像复制一份出来,名字为localhost:5000/rhel7:nginx4
22.docker login xin.org   #登录xin.org
23.docker logout xin.org  #退出xin.org
23.docker run -d --name vm1 ubuntu   #使用镜像ubuntu创建容器vm1,并运行。(-d表示后台运行容器,并返回容器ID)
24.docker run -it --name vm1 ubuntu   #使用镜像ubuntu创建容器vm1,并运行,并进入交互界面。
25.docker run -it --name vm1 rhel7 bash   #使用镜像rhel7创建容器vm1,并与其进行bash交互;(-i:以交互模式运行容器,通常与-t一起使用;-t:为容器重新分配一个伪输入终端)
26.docker run -d --name vm1 -v /tmp/docker:/usr/share/nginx/html nginx   #使用镜像nginx创建容器vm1,并运行,并将本地主机的/tmp/docker目录挂载到容器vm1内的/usr/share/nginx/html目录下。(即本地主机/tmp/docker目录下有什么内容,那容器vm1的/usr/share/nginx/html目录中就有什么内容)。在"Linux下docker应用初体验之nginx，ubuntu，rhel7镜像的使用"文章中使用过。
27.docker exec -it vm1 /bin/bash   #进入容器vm1的bash界面(此时容器vm1正在运行)
 28.docker run --rm busybox:v1   #用busybox:v1镜像创建容器,并运行,运行完成之后,立即删除
29.docker run -it --rm ubuntu   #用ubuntu镜像创建容器,并运行,运行完成之后,立即删除
30.docker commit vm1 ubuntu:v1   #将容器vm1打包生成ubuntu:v1镜像
31.docker inspect vm1   #查看容器vm1的详情
32.docker inspect nginx   #查看镜像vm1的详情
33.docker rmi nginx   #删除nginx镜像
34.docker rm vm1   #删除容器vm1
#当容器正在运行时,使用该命令回报错。应该先docker stop vm1停止vm1容器,再docker rm vm1删除容器vm1。当然,也可以使用docker rm -f vm1强制删除正在运行的容器vm1。
#即docker rm -f vm1相当于docker stop vm1 + docker rm vm1。
35.docker history nginx   #查看nginx镜像的历史
36.docker load -i ubuntu.tar   #导入ubuntu.tar,以添加镜像ubuntu
37.docker import vm1.tar image   #导入容器vm1.tar为镜像image
38.docker save ubuntu > ubuntu.tar   #导出镜像ubuntu
39.docker export vm1 > vm1.tar   #导出容器vm1
40.docker search  镜像名的一部分   #查找镜像（如:docker search nginx  #查找与nginx相关的镜像）
41.docker pull 镜像名  #拉取镜像
42.docker push 镜像名  #推送镜像
43.docker container ls   #同docker ps,查看正在运行的容器
44.docker container prune    #删除所有运行停止的容器
45.docker rm -f `docker ps -aq`   #删除所有容器(运行的和没运行的)
```



```bash
docker attach vm1 #进入已经创建好的容器
docker diff vm5 #使用docker diff命令查看容器vm5的修改信息
docker container prune  #清理停止状态的容器的可写层
```



安装软件bash-*可以解决docker命令补不全的问题

```bash
yum install bash-* -y 
```

退出bash的两种操作

```bash
Ctrl + d 退出并停止容器
Ctrl + p + q 退出并在后台运行容器；
```

