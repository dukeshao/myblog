---
title: cookie+本地存储+设计模式
date: 2015-10-08 23:18:33
tags: 
- Javascript
- cookie
- 本地存储
- 设计模式
categories: 
- B_Javascript
---

# 网络知识

## 通信协议

通信规则，设备与设备之间通信时共同遵守的规则

## TCP/UDP/IP

IP： Internet Protocol（网络之间互连的协议），规定了计算机在因特网上进行通信时应当遵守的规则

- IP地址：4个字节, 一共32位 ，用来标识设备在网络中的位置 
- 本机ip 127.0.0.1  

TCP：Transmission Control Protocol（传输控制协议）

- TCP面向连接的协议（通信之前必须先建立连接）
- TCP相对可靠，它建立连接的过程称为3次握手
- 经历3次握手，才能建立连接
- 所有的消息传送，需要对方确认送达

> //正常通信
> A："土豆，土豆，我是茄子，收到请回答" 
> B："茄子，茄子，我是土豆，收到消息，有什么指示？"
> A："没事，没事，我以为你挂了呢" 
> A："开始传送消息..."   

> //如果对方没回应，则不断重复发送当前消息，直至对方收到回应为止。 
> A："茄子，茄子，我是土豆，我被人油炸了，现在改名叫薯片，收到请回答"
> ............ 
> A："茄子，茄子，我是土豆，我被人油炸了，现在改名叫薯片，收到请回答，第2遍"
> ............ 
> A："茄子，茄子，我是土豆，我被人油炸了，现在改名叫薯片，收到请回答，第3遍" 
> ............ 
> B："薯片，薯片，我收到消息"
> 因此可以确保数据的准确送达
>

UDP:面向数据报的协议 (不可靠的协议)，如果TCP比作是打电话，那么UDP就是在发短信

- 无需建立连接，发送消息也无需对方确认
- 无法保证数据的发送顺序，以及准确率
- UDP通常用于视频、语音等通信（丢掉了一帧画面是无所谓的）

## http/https

超文本传输协议HyperText Transfer Protocol，基于TCP协议的一种高级协议, 用于客户端和服务器直接的通信.

http的特点是，请求完成后就立即断开与服务器的连接

> 缺点:
> 通信使用明文（不加密），内容可能会被窃听
> 不适用特定的Web服务器，如：聊天室，消息广播
>
> http://1000phone.com/
>
> http://localhost:8080/1810/lesson/14.Cookie/site/html/03.cookie%E7%9A%84%E7%BB%84%E6%88%90%E9%83%A8%E5%88%86.html

## socket

是一种通信模式，客户端与服务端一直保持着连接，用于随时传输数据

# cookie

## cookie的概念

cookie 是客户端与服务器端进行通讯使用的一个能够在浏览器本地化存储的技术

> PS：chrome不支持本地文件的cookie读写


## cookie的基本设置及获取						

```
设置:document.cookie = 'name=value'
    * 一次只能写入一个cookie
读取:document.cookie
	* 一次性读取所有cookie,是一个字符串。里面的多个cookie值用； 隔开
```

### 案例：保存图片拖拽位置

```
// 1.鼠标松开，保存图片位置。即设置cookie：保存left,top
document.cookie = 'left=' + girl.style.left;//100px
document.cookie = 'top=' + girl.style.top;//100px
// 2.页面加载，获取cookie：获取top,left
var cookies = document.cookie;//得到所有cookie
cookies = cookies.split('; ');
//3. 遍历数组，找出top,left,给图片设置位置
cookies.forEach(function(cookie){
    var arr = cookie.split('=');
    if(arr[0] === 'left' || arr[0] === 'top'){
    	girl.style[arr[0]] = arr[1];
    }
});
```

### 案例:七天免登陆


	btnSubmit.onclick = function(){
		// 5.表单submit按下即提交，不管满不满足条件。所以阻止默认行为
		e.preventDefault();
	    // 1.获取用户名密码
	    var _username = username.value.trim();
	    var _password = password.value;
	    //2.若用户名长度为0，退出函数。
	    if(_username.length===0){
	        alert('用户名不能为空');
	        return;
	    }
	    //3.判断是否勾选"7天内免登陆"选项。若勾选保存cookie
	    if(checkbox.checked){
	        var d = new Date();
	        d.setDate(d.getDate()+7);//d此时是一个UTC时间对象，转成字符串格式
	    	document.cookie = 'username=' + _username + ';expires='+d.toUTCString();
	    }
	    //4.不管有没有勾选，点击提交，显示跳转页面
		location.href = 'http://www.baidu.com';
	}
	// 6.下一次访问：判断页面是否存在cookie，是否存在username的cookie，若存在自动登录，即自动跳转到百度
	var cookies = document.cookie;
	//（1）判断页面是否存在cookie，即cookie长度不为0
	if(cookies.length>0){
	    cookies = cookies.split('; ');
	    cookies.forEach(function(item){
	        var arr = item.split('=');
	        //（2）是否存在username的cookie
	        if(arr[0] === 'username'){
	        	location.href = 'http://www.baidu.com';
	        }
	    });
	}
## cookie的组成部分

```
格式：'name=value[;expires=xx][;path=/][;domain=xxx]'
参数：
	expires：有效期
		默认Session：临时cookie（关闭浏览器会被清除）
		格式：'expires=' + d.toUTCString
	path：保存cookie的位置
		默认当前html所在目录
		格式：'path=/'
    domain：域名
    	默认：当前域名
读取：document.cookie（读取当前能访问的所有cookie）
	当前目录->根目录
```

## 封装cookie的操作


	var Cookie = {
		get:function(key){
			// 1.先获取所有cookie，若cookie没有值，返回空字符串
			var cookies = document.cookie;
			if(cookies.length === 0){
				return '';
			}
	        // 2.拆分每一个cookie
	        cookies = cookies.split('; ');
	        for(var i=0;i<cookies.length;i++){
	            var arr = cookies[i].split('=');
	            if(arr[0] === key){
	                return arr[1];
	            }
	        }
	    },
	    set:function(key,value,date,path){
	    	//拼接字符串
	        var str = key + '=' + value;
	        if(date){
	            str += ';expires=' + date.toUTCString();
	        }
	        if(path){
	            str += ';path='+path;
	        }
	        document.cookie = str;
	    },
	    remove:function(key,path){
	    	//获取过期的日期，重新设置cookie
	        var d = new Date();
	        d.setDate(d.getDate()-1);
	        this.set(key,'x',d,path);
	    },
	
	    // 清空cookie
	    clear:function(){
	    }
	}
## cookie的限制

> 数量50个（不同浏览器值不同）
>
> 大小2m（不同浏览器值不同）
>
> 只能写入字符串

## JSON

```
* 转换
    * 对象/数组 -> json字符串：JSON.stringify()
    * json字符串 -> 对象/数组：JSON.parse()
* 格式：
    * 属性名和字符串必须使用双引号
    * 不能有注释
    * 不能存在多余逗号
* 属性值必须为以下类型
    * String
    * Number
    * Boolean
    * Object
    * Array
    * Null
```

### 案例：将商品添加到购物车列表

	// 3.每次刷新，拿到上一次的存放值。第一次是为空数组
	// * 若已经存在值，默认为JSON字符串，要转回数组
	var goodslist = Cookie.get('goodslist') || [];
	if(typeof goodslist === 'string'){
	    goodslist = JSON.parse(goodslist);
	}
	// 1.利用事件委托实现添加到购物车的效果
	goods.onclick = function(e){
	    e = e || window.event;
	    var target = e.target || e.srcElement;
	    if(target.parentNode.className === 'add2cart'){
	        // 2.若当前为按钮被点击
	        // （1）生成一个商品信息对象{guid，name，imgurl，price，qty（商品数量）}
	        // （2）推入数组，将数组添加到cookie里面
	        // （3）考虑如果商品信息已经添加过，则应该增加数组里面的该商品数量
	        // 	* 第一步:判断当前的guid是否在数组存在。
	        //  * 第二步:若存在，拿到该商品信息在数组中的索引，利用索引将qty++
	        var currentLi = target.parentNode.parentNode;
	        var guid = currentLi.getAttribute('data-guid');
	        var idx;
	        var has = goodslist.some(function(g,i){
	            idx = i;
	            return g.guid === guid;
	        });
	        if(has){
	            goodslist[idx].qty++;
	        }else{
	            var goods = {
	                guid:guid,
	                name:currentLi.children[1].innerText,
	                imgurl:currentLi.children[0].src,
	                price:currentLi.children[2].innerText,
	                // 商品数量
	                qty:1
	            }
	            goodslist.push(goods);
	        }
	        document.cookie = 'goodslist='+ JSON.stringify(goodslist);
	    }

### 案例：显示购物车列表

    //1.获取goodslist的cookie，根据cookie数据生成html结构
    //2.遍历时同时计算总价给subPrice元素赋值
    var goodslist;
    render();
    function render(){
        goodslist = Cookie.getCookie('goodslist') || [];
        if(typeof goodslist === 'string'){
        	goodslist = JSON.parse(goodslist);
        }
        //2.遍历时，同时计算商品金额
        var total = 0;
        var ul = document.createElement('ul');
        ul.innerHTML = goodslist.map(function(goods){
            total += goods.price * goods.qty;
            return '<li data-guid="'+goods.guid+'">' + 
                '<img src="'+goods.imgurl+'">' + 
                '<h4>'+goods.name+'</h4>' + 
                '<p class="price">价格：<span>'+goods.price+'&times;'+goods.qty+'</span></p>' + 
                '<span class="btn-close">&times;</span>' + 
                '</li>'；
        }).join('');
        carList.innerHTML = '';
        carList.appendChild(ul);
        subPrice.innerHTML = total.toFixed(2);
    }
    // 3.点击按钮，移除cookie数据，重新渲染商品列表。同时阻止浏览器默认行为
    btnClear.onclick = function(){
        Cookie.remove('goodslist');
        render();
        return false;
    }
    //4.当点击某个商品的删除时
    //（1）获取到当前商品的guid，遍历数组goodslist，根据guid值相同，找到被删除的元素在数组中的索引。
    //（2）通过索引，删除goodslist的中的某个商品。之后推出循环
    //（3）重新生成cookie后，渲染
    carList.onclick = function(e){
        e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.className === 'btn-close'){
            var currentLi = target.parentNode;
            var guid = currentLi.getAttribute('data-guid');
            for(var i=0;i<goodslist.length;i++){
                if(goodslist[i].guid === guid){
                    goodslist.splice(i,1);
                    break;
                }
            }
            Cookie.set('goodslist',JSON.stringify(goodslist));
            render();
        }
    }

# 本地存储Web Storage

## 好处

减少网络流量：一旦数据保存在本地后，就可以避免再向服务器请求数据，因此减少不必要的数据请求，减少数据在浏览器和服务器间不必要地来回传递。

快速显示数据：性能好，从本地读数据比通过网络从服务器获得数据快得多，本地数据可以即时获得。再加上网页本身也可以有缓存，因此整个页面和数据都在本地的话，可以立即显示。

临时存储：很多时候数据只需要在用户浏览一组页面期间使用，关闭窗口后数据就可以丢弃了，这种情况使用sessionStorage非常方便。 

**localStorage的局限**

1、浏览器的大小不统一，并且在IE8以上的IE版本才支持localStorage这个属性

2、目前所有的浏览器中都会把localStorage的值类型限定为string类型，这个在对我们日常比较常见的JSON对象类型需要一些转换

## sessionStorage、localStorage、cookie的区别

###  共同点：

都是保存在浏览器端，并且是同源的（URL的协议、端口、主机名是相同的，只要有一个不同就属于不同源）

###  不同点：

 1、cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递，而sessionStorage和localStorage不会自动把数据发送给服务器，仅在本地保存。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下。

 2、存储大小限制也不同，cookie数据不能超过4K，同时因为每次http请求都会携带cookie、所以cookie只适合

保存很小的数据，如会话标识。sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

 3、数据有效期不同，sessionStorage仅仅在当前浏览器窗口关闭之前有效；localStorage始终有效，窗口或者

浏览器关闭之后也一直保存，因此作用持久数据；cookie，只在设置cookie过期时间之前有效，即使窗口关闭或者浏览器关闭。

 4、作用域不同：sessionStorage在不同的浏览器窗口中不共享，即使是同一个页面，localStorage在所有的同源窗口中是共享的，cookie也是在所有同源的窗口中共享的。（只要URL的协议、端口、主机名三者中有一个不同，就属于不同的文档源） 

## 增删改查

### 写入

```
if(！window.localStorage){
    alert("浏览器不支持localstorage");
    return false;
}else{
    var storage=window.localStorage;
    //写入a字段
    storage["a"]=1;
    //写入b字段
    storage.a=1;
    //写入c字段
    storage.setItem("c",3);
    console.log(typeof storage["a"]);
    console.log(typeof storage["b"]);
    console.log(typeof storage["c"]);
}
```

### 读取

```
var storage=window.localStorage;
storage["a"]=1;
//第一种方法读取
var a=storage.a;
//第二种方法读取
var b=storage["a"];     
//第三种方法读取
var c=storage.getItem("a");
```

### 修改（同写入）

### 删除

1、将localStorage的所有内容清除

```
var storage=window.localStorage;
storage.clear();
```

2、 将localStorage中的某个键值对删除

```
var storage=window.localStorage;
storage.a=1;
storage.removeItem("a");
```

## 获取键

使用key()方法，向其中出入索引即可获取对应的键

```
var storage=window.localStorage;     
for(var i=0;i<storage.length;i++){
    var key=storage.key(i);
    console.log(key);
}
```



# 重载/刷新当前页面

1、reload 方法，该方法强迫浏览器刷新当前页面。 
语法：location.reload([bForceGet]) 
参数： bForceGet， 可选参数， 默认为 false，从客户端缓存里取当前页。true, 则以 GET 方式，从服务端取最新的页面, 相当于客户端点击 F5(“刷新”) 
2、 replace 方法，该方法通过指定URL替换当前缓存在历史里（客户端）的项目，因此当使用replace方法之后，你不能通过“前进”和“后退”来访问已经被替换的URL。 
语法： location.replace(URL) 
通常使用： location.reload() 或者是 history.go(0) 来做。 
此方法类似客户端点F5刷新页面，所以页面method=”post”时，会出现”网页过期”的提示。 
因为Session的安全保护机制。 
当调用 location.reload() 方法时， aspx页面此时在服务端内存里已经存在， 因此必定是 IsPostback 的。 
如果有这种应用： 需要重新加载该页面，也就是说期望页面能够在服务端重新被创建，期望是 Not IsPostback 的。 
这里，location.replace() 就可以完成此任务。被replace的页面每次都在服务端重新生成。 
代码： location.replace(location.href); 
3、返回并刷新页面： 
location.replace(document.referrer); 
document.referrer //前一个页面的URL

不要用 history.go(-1)，或 history.back();来返回并刷新页面，这两种方法不会刷新页面。 

4、Javascript刷新页面的几种方法：

1，history.go(0)

2，location.reload()

3，location=location

4，location.assign(location)

5，document.execCommand('Refresh')

6，window.navigate(location)

7，location.replace(location)

8，document.URL=location.href

# 设计模式

## 一、工厂模式

简单版工厂模式

```js

function createBuwawa(name,eyes,mouth){
    var obj={
        name:name,
        eyes:eyes,
        mouth:mouth
    }
    return obj;
}
var peiqi=new createBuwawa("佩奇","red","big");
```

进阶版工厂模式

```js
生产人员与取餐窗口相分离
1.麦当劳的工作人员(生产汉堡包,薯条)
class Creator{
    constructor(){
        //相当于在构造函数书写属性
    };
    create(food){
        //生产食物
        return new Chuangkou(this.food);
    }
}

2.取餐窗口(提示、取餐)
class Chuangkou{
    constructor(food){
        this.food=food;
    };
    init(){
        console.log(this.food+"已做好");
    }
}
3.调用
var xiaoming= new Creator();
var shutiao=xiaomming.create("薯条");
shutiao.init();
```

设计思想

工人与服务员相分离

符合开放封闭原则

## 二、单例模式

如果不存在实例对象,那么就创建实例对象,如果存在实例对象,那么就用该对象

```js
class Single{
    constructor(){};
}
Single.getInstance=(function(){
    var instance;
    return function(){
        if(!instance){
            instance=new Single();
        }
        return instance;
    }
})()
var s1=Single.getInstance();
var s2=Single.getInstance();
console.log(s1==s2);
```

## 三、适配者模式

旧接口格式和使用者不兼容

中间加一个适配转换接口

```js
class Socket{
	specificRequest(){
		return '德国标准插口';
	}
}
class Adapter{
	constructor(){
		this.socket = new Socket();
	}
	request(){
		let info = this.socket.specificRequest();
		return `${info}-转换器-中国标准接口`
	}
}
let target = new Adater();
let res = target.request();
console.log(res);
```

## 四、代理模式

使用者无权访问目标对象

中间加代理，通过代理做授权和控制

```js
（function（）{
class ReadImg{
	constructor(filename){
		this.filename = filename;
		this.loadFromDisk();//模拟从硬盘中加载
	}
	loadFromDisk(){
		console.log("loading...");
	}
	display(){
		console.log("display...");
	}
}
//代理
class ProxyImg{
	constructor(filename){
		this.readImg = new ReadImg(filename)
	}
	display(){
		this.readImg.display();
	}
}
return ProxyImg；
}）（）
let proxyImg = new ProxyImg("1.png");
proxyImg.display();
```

场景

事件代理

$.proxy

```js
$("#dv").click(function()}{
    setTimeout($.proxy(function(){
        //使用外部函数的this
        $(this).addClass('red');
    },this),1000)
})
```

ES6 proxy

```js
let star = {
	name : "张**",
	age : 25,
	phone : '13900001111'
}
// 明星经纪人
let agent = new Proxy(star,{
	get : function(target,key){
		if(key == "phone"){
			//返回经纪人自己的电话
			return '16899997777'
		}
		if(key == "price"){
			//经纪人报价
			return '120000'
		}
		//此时target为stat对象
		return target[key];
	},
	set : function(target,key,val){
		if(key == "customPrice"){
			if(val < 100000){
				throw new Error("价格太低")
			}else{
				target[key] = val;
				return true;
			}
		}
	}
})
console.log(agent.name);//undefined
console.log(agent.phone);//16899997777
console.log(agent.price);//120000
```



适配器模式vs代理模式

适配器模式：提供一个不同的接口（如不同版本的插头）

代理模式：提供一模一样的接口

## 五、观察者模式

发布&订阅, 一对多

```js
//主题：保存状态，状态变化之后触发所有观察者对象
class Subject{
	constructor(){
		this.state = 0;
		this.observers = []
	}
	getState(){
		return this.state;
	}
	setState(state){
		this.state = state;
		this.notifyAllObservers()
	}
	notifyAllObservers(){
		this.observers.forEach(observers => {
			observers.update();
		})
	}
	attach(observer){
		this.observers.push(observer)
	}
}
class Observer{
	constructor(name,subject){
		this.name = name;
		this.subject  = subject;
		this.subject.attach(this);
	}
	update(){
		console.log(`${this.name}update,state:${this.subject.getState()}`)
	}
}
let s = new Subject();//主题，大盒子保存所有观察者
let o1 = new Observer("o1",s);//o1是观察者
let o2 = new Observer("o2",s);//02是观察者
s.setState(1);//只要其中一个观察者状态概念，
```

网页事件绑定

```js
$("#dv").click(function()}{
    console.log(1);
})
$("#dv").click(function()}{
    console.log(2);
})
$("#dv").click(function()}{
    console.log(3);
})
```

promise

```js
p1.then(function(){
    
}).then(function(){
    
})
```



## 六、组合模式

生成树形结构,表示"整体-部分"关系

让整体和部分都具有一致的操作方式

```js
{
	tag: 'div',
	attr: {
		id: 'div1',
		className: 'container'
	},
	children: [
		{
			tag: 'p',
			attr: {},
			children: ['123']
		},
		{
			tag: 'p',
			attr: {},
			children: ['456']
		}
	]
}
//======对应的html结构===============
<div id="div1" class="container">
    <p>123</p>
    <p>456</p>
</div>
```



## 七、策略模式

不同策略分开处理

避免出现大量的if...else或者switch...case

```js
class User{
	constructor(type){
		this.type = type
	}
	buy(){
		if(this.type == 'ordinary'){
			console.log('普通用户购买');
		}else if(this.type == 'member'){
			console.log('会员用户购买');
		}else if(this.type == 'vip'){
			console.log('vip用户购买');
		}
	}
}
let u1 = new User('ordinary');
u1.buy();
let u2 = new User('ordinary');
u2.buy();
let u3 = new User('ordinary');
u3.buy();
```

```js
class User{
	constructor(type,money){
		this.type = type;
		this.money = money;
	}
	buy(){
		strategies[this.type](money);
	}
}
var strategies = {
    ordinary : function(money){
        return money;
    },
    member : function(money){
        return money*0.9;
    },
    vip : function(money){
        return money*0.8;
    }
};
```

