---
title: Ajax
date: 2015-10-06 23:18:33
tags: 
- Javascript
categories:
- B_Javascript
---

## 一、概念

```
1.AJAX
	Asynchronous Javascript And Xml，Ajax 技术的核心是XMLHttpRequest对象（简称XHR），这是由微软首先引入的一个特性，其他浏览器提供商后来都提供了相同的实现

2.起源
	最早出现在2005年的google搜索建议
3.优点
	* 增加速度：减轻服务器的负担,按需加载数据,最大程度的减少冗余请求
	* 改善的用户体验：局部刷新页面,减少用户等待时间,带来更好的用户体验
	* 页面和数据分离：前后端分离，操作更灵活，后期维护更方便
4.后端语言和服务器配置
	* php + Apache + mySQL
	* NodeJS + MongoDB
	* Java + tomcat + Oracle
	* .NET + IIS + SQL Server
```

## 二、json

### 1.json数据(json字符串)

```
{"id" : 21465461461461, "name": "张三"},[{"id" : 21465461461461, "name": "张三"}]
```

### 2.json字符串与对象的转换

```
1.json字符串转成对象的转换
(1)eval("("+json字符串+")"); 
	它的作用是，将一个普通的json格式(不标准的json字符串)的字符串，转换成Json格式的对象
	var list = eval("("+request.responseText+")");
(2)JSON.parse(); //把JSON字符串转成JSON对象(js对象/数组)【es5】
2.把JSON对象转成JSON字符串
	JSON.stringify(); 
```

### 3.json文件存在的意义

```
//模拟数据(与后端先商量)
[
	{
		"id":"G001",
		"name":"Thermos 膳魔师 Funtainer系列水杯 12盎司（340g） 粉红色",
		"imgurl":"images/g1.jpg",
		"price":899,
	}
]
```

## 三、Ajax请求步骤

1.创建请求对象

```
var xhr = new XMLHttpRequest();//返回一个异步请求对象
```

2.处理服务器返回数据

```
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4) {
        //responseText：保存服务器返回的数据（从服务器返回的数据是“字符串”）。
        alert(xhr.responseText);
    }
}
```

3.设置请求参数,建立与服务器的连接

```
xhr.open("get", "http://localhost/api/ajaxtest", true);
```

4.向服务器发送请求

```
xhr.send(null);
```



## 四、XMLHttpRequest

### 1.open(type,url,async)

open(type,url（同源策略）,async（同步、异步）)

```
1.open(type,url,async): 建立与服务器的连接
    type：请求的类型，get获取、post发送
    	* 区别? 
    		get请求数据接在url后面，post请求数据通过send方法传递
    		get传递的数据会比较少，post没有限制
    		get传递的数据会暴露出来
    url：数据请求的地址（API地址），一般由后端开发人员提供
    	* 相对路径的情况下，必须在同一个根目录(端口配置的目录)下。
        * 当前页面访问地址，API地址两者一定要同域
        * 同域（同源策略）：协议，域名，端口三者一致
        * 报错： No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access.
	async：是否异步发送请求（true,false），默认为true
        * 同步：按步骤顺序执行，前面的代码执行完后，后面的代码才会执行
        	做完前一件事情, 才能下一件事情（排队）
        * 异步：与其他操作同时执行，也叫并发（图片加载，ajax请求，定时器）
```

### 2.send(data)

```
2.send(data): 向服务器发送请求
	data：可选参数，post请求时才生效，表示发请求时传送的数据字符串。
    	 xhr.send('size=20&type=music');
		在某些浏览器中，如果不需要通过post请求主体发送数据，则必须传入null
//备注：get请求的数据写在url地址后
	request.open("get", "http://localhost/api/getdata.php?type=get&qty=10", true);
	setRequestHeader(key,val)：设置请求头
//备注：利用请求头设置POST提交数据格式(form表单)：
	xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');//open方法后设置
```

在请求收到服务器的响应后，响应的数据会自动填充xhr 对象的属性，相关的属性简介如下

### 3.readyState

```
0 － （未初始化）尚未调用open()方法。
1 － （启动）已经调用open()方法，但尚未调用send()方法。
2 － （发送）send()方法执行完成，但尚未接收到响应。
3 － （接收）已经接收到部分响应数据。
4 － （完成）响应内容解析完成，可以在客户端调用了
只要readyState 属性的值由一个值变成另一个值，都会触发一次readystatechange 事件。必须在调用open()之前指定onreadystatechange事件处理程序才能确保跨浏览器兼容性。
```

### 4.responseText

保存服务器返回的数据（从服务器返回的数据是“字符串”）。

### 5.status

```
* 响应的HTTP 状态。
200（OK）：服务器成功返回了页面
304（Not Modified）：数据与服务器相同，不需要重服务器请求（直接使用缓存的数据）
400（Bad Request）：语法错误导致服务器不识别
401（Unauthorized）：请求需要用户认证
404（Not found）：请求地址不存在
500（Internal Server Error）：服务器出错或无响应
503（ServiceUnavailable）：由于服务器过载或维护导致无法完
```

## 五、跨域解决方案

### 1.JSONP

原理：利用script标签能加载其他域名的js文件的原理,实现跨域数据请求

```
* JSONP 是JSON with padding（填充式JSON 或参数式JSON）的简写。
* JSONP是一种可以绕过浏览器的安全限制，从不同的域请求数据的方法。
* JSONP请求不是ajax请求，是利用script标签能加载其他域名的js文件的原理，来实现跨域数据的请求 
* 局限性：
  - 只能为get请求
  - 接口必须有回调函数的执行
```

案例练习1：使用script标签其他js文件调用本地js的某个函数;

案例练习2：使用script标签其他php文件调用本地js的未知名方法，返回数据

案例练习3：利用JSONP原理调用百度建议

```
msg.oninput = function(){
    let _msg = msg.value;
    clearTimeout(timer);
    timer = setTimeout(()=>{
    let script = document.createElement('script');
    script.src='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/sujson=1&cb=getData&wd='+_msg;
    document.body.appendChild(script);
    },500);
}
window.getData = function(data){
    suggest.innerHTML = data.s.map(item=>{
        return `<li>${item}</li>`
        }).join("");
    }
})
//原理性代码：
//1.script的src中回调函数的传递
script.src='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/sujson=1&cb=getData&wd='+_msg;
//2.声明全局函数
window.getData = function(data){处理数据}
```



### 2.CORS

原理：在后端响应头添加词字段header('Access-Control-Allow-Origin: *')

```
CORS是一个W3C标准，全称是”跨域资源共享”（Cross-origin resource sharing），它允许浏览器向跨源服务器发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。

CORS需要浏览器和服务器同时支持。目前，所有浏览器都支持该功能，IE浏览器不能低于IE10。服务器需要设置响应头，允许该域名访问
```

```
1.Access-Control-Allow-Origin
	header('Access-Control-Allow-Origin: *');  
该字段是必须的。需要在后端响应头添加词字段，值要么是一个*，表示接受任意域名的请求，要么指定一个域名http://localhost。
2.Access-Control-Allow-Methods
3.Access-Control-Allow-Headers
    header('Access-Control-Allow-Methods:POST');  
    header('Access-Control-Allow-Headers:x-requested-with,content-type'); 
```

案例1：天气预报

案例2：百度地图

### 3.服务器代理

原理：file_get_contents($url) //获取网站内容

后端不存在跨域问题，所以可以利用后端间接获取其他网站的数据

```
ajax跨域请求之服务端代理（爬虫）
原理：获取页面所有内容，并利用正则匹配所需内容
file_get_contents($url) //获取网站内容
preg_match_all($reg,$str,$res) 
preg_match($reg,$str,$res)   //$str代表被匹配的内容，$res为结果
$content = iconv(原字符编码,新字符编码,$content);//修改$content字符编码
```

案例1：利用服务器代理获取外网IP

案例2：根据IP获取所在城市（ajax嵌套）

案例3：根据城市获取天气预报（ajax嵌套）

案例4：POST请求数据

## 六、异步处理方法Promise

### 1.Promise

Promise是一个构造函数，所谓的Promise对象，就是通过new Promise()实例化得到的对象，用来传递异步操作的数据。它代表了某个未来才会知道结果的事件（通常是一个异步操作），并且这个事件提供统一的 API，可供进一步处理。

1.创建对象

```
var p=new Promise(function(resolve,reject){
    //成功拿到数据执行resolve,失败执行reject
})
	*规定好了哪个阶段执行哪个函数
Promise的三种状态
    * Pending(未完成)可以理解为Promise对象实例new创建时候的初始状态
    * Resolved(成功)可以理解成功的状态
    * Rejected(失败)可以理解为失败的状态
```

2.执行方法

```
p.then(成功时要执行的代码).catch(失败时执行的代码)
```

3.静态方法

Promise.all([p1,p2,p3,p4])

将多个Promise实例,包装成一个新的Promise实例

所有参数中的Promise状态都为resolved时,新的promise状态才为resolved

只要p1,p2,p3...之中有一个被rejected,新的promise的状态就变成rejected

```
Promise.all([p1,p2,p3]).then(function(res){
	console.log(res);
})
```

Promise.race([p1,p2,p3...]) 竞速,完成一个即可

### 2.try...catch

尝试执行代码,如果有错误则执行catch捕获错误(不报错)

```
try{
	console.log(666)
	//先尝试执行这里的代码
	show();
	//无报错，则忽略catch
	//如果报错，则执行catch，并传递错误信息
}catch(error){
	console.log(error)
}
console.log('end');
```