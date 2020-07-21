---
title: 一台电脑多个 git 账号
categories:
- G_Git
date: 2019-10-27 12:05:10
tags:
- git
- mac
---

### 进入`.ssh`文件，创建多对 ssh 公钥与私钥

假设新 git 账号要绑定的邮箱为`q18620940103@aliyun.com`

```js
cd ~/.ssh
ssh-keygen -t rsa -C "q18620940103@aliyun.com"
```

输入以上命令后，第一步的时候，需要输入文件名称，为不同的 git 账号命名相应的公钥与私钥名称，否则会覆盖第一次默认命名的公钥`id_rsa.pub`与私钥`id_rsa`

假设取名为 `aliyun_mail`，那么生成公钥`aliyun_mail.pub`与私钥`aliyun_mail`

### 将私钥添加到 github 网站

将生成的 ssh 公钥复制到 github 的 setting 中的 SSH and GPG keys

### 配置本地 config 文件

如果在`.ssh`里没有 config 文件，可以 touch config 生成

```js
//#域名地址的别名
Host duke
//#真实的域名地址
Hostname github.com
//#配置使用用户名
User git
//#这里是验证文件地址，即私钥
IdentityFile ~/.ssh/id_rsa

Host Duke1048
Hostname github.com
User git
IdentityFile ~/.ssh/aliyun_mail
```

### 测试是否成功

```js
//ssh -T git@[地址别名]
ssh -T git@Duke1048
//成功会打印
#Hi Duke1048! You've successfully authenticated, but GitHub does not provide shell access.
```

### 取消全局配置，使用局部配置

```js
git config --global --unset user.name
git config --global --unset user.email
```

在克隆远程仓库后或者建立本地仓库后，需局部配置仓库的使用者

```js
git config user.name "your name"
git config user.email "your email"
```

### Clone 项目到本地

```js
//以前
git clone git@github.com:Duke1048/ts_app.git
//现在：git clone 使用用户名@域名地址别名:github用户名/仓库名.git
git clone git@Duke1048:Duke1048/ts_app.git
```


