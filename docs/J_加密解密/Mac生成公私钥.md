---
title: Mac生成公私钥
categories: 
 - J_加密解密
tags:
date: 2020-07-14 09:59:14
sidebar: 'auto'
publish: true
---


Mac 自带openssl，利用openssl生成公私钥

## 一、生成私钥

创建一个文件夹存放公私钥，cd 进入这个文件夹，执行生成私钥命令

```bash
openssl genrsa -out rsa_private_key.pem 1024
```



## 二、生成公钥

利用私钥生成公钥

```bash
openssl rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem
```

