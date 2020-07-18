---
title: Docker
categories: Docker
date: 2020-02-07 23:28:27
tags:
---

##  一、docker save保存运行中的镜像

```bash
#docker save "镜像地址名称":"版本">"保存为的路径和文件名"
docker save registry.paas/cmss/default-http-backend:v3.0>/opt/test.tar.gz
```

