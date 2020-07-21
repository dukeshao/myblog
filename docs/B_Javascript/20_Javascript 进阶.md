---
title: Javascript 进阶
date: 2015-10-02 23:18:33
tags: 
- Javascript
categories:
- B_Javascript
---

# 一、函数

## 1.概念

函数就是把特定功能的代码抽取出并进行封装，用来重复执行一些功能。

## 2.优点

函数可以重复执行某一部分代码（通过函数名调用）；

使程序变得更简短而清晰；

有利于程序维护；

## 3.创建方式

#### a.关键字声明 

​	function 函数名(形参){执行的功能代码}

```js
function fn(a,b){
  return a+b;
}
```



#### b.赋值式声明 

​	var 函数名=function(形参){执行的功能代码} 

```js
var fn = function(a,b){
  return a+b;
}
```



#### c.构造函数法

​	 var 函数名=new Function();不推荐使用

```js
var fn = new Function();
```



## 4.分类

1	内置函数

2	自定义函数

3	匿名函数

function(形参){执行的功能代码} 

## 5.函数的执行

1	主动执行：

​	函数名()	

2	事件驱动：

​	ele.onclick=函数名;

​	ele.onclick=function(){}

## 6.作用域

（一）分类

### 1	全局作用域

全局变量：在函数外定义的变量称为全局变量

### 2	局部作用域

局部变量：在函数内定义的变量

### 3	变量的访问规则

​	(1)	若在某个函数内部使用一个变量，那么先查找该函数内是否有变量声明；

​	(2)	如果当前函数无变量a，则往父级函数查找，如果找到则使用，并停止查找；

​	(3)	如果在父级函数还是无法找到，则继续往上一层函数查找，以此类推；

​	(4)	直到最顶层(全局作用域)，如果还是没找到，则报错误** is not defined；

在函数内若没有通过var 声明变量，相当于在全局作用域用var 声明了该变量

### 4	作用域链

​	当函数访问变量时，根据就近原则从内到外查询变量，这个路径称为作用域链;

## 7.函数的实参与形参

1	形参：函数定义时的参数（变量）

2	实参：函数执行时的参数（值）

形参与实参个数可以不一致

函数内部隐藏的对象（是一个类数组），保存着实参的信息

一、声明提前

概念：代码从上往下顺序执行之前，会将所有的声明提升到当前作用域的最顶端，之后顺序执行

在变量赋值之前使用变量，变量的值为undefined

用赋值式声明函数，若在声明之前调用函数，会报错，** is not  a function；

用关键字声明函数，可以在声明之前调用函数

## 基本数据类型与引用数据类型的区别

```
基本数据类型放在栈中,引用数据类型放在堆中
```

### ①　案例：

```
var a=10;
var b=a;
b++;
console.log(a,b);//10,11

var arr=[1,2,3];
var brr=arr;
brr[1]=20;
console.log(arr===brr);//true
```

### ②　数据类型作为函数的参数

```
//基本数据类型,传递的是值
function numAdd(num){
    num++;
    console.log(num);//11
}

var a=10;
numAdd(a);
console.log(a);//10

//引用数据类型,传递的是地址
function numAdd(arr){
    arr[0]=10;
    console.log(arr);//[10,2]
}

var arr1=[1,2];
numAdd(arr1);
console.log(arr1);//10,2
```

## 函数的返回值

1	概念：通过return将函数内部的值返回到函数外，函数外若要使用，必须接收。

2	如果函数没有return，执行完后返回undefined

3	return 后面的代码不会被执行

## this

1	表示当前对象，取决于谁调用了这个函数

2	直接执行，this 为window；事件驱动，this为绑定的元素。

## 递归

（自己调用自己）

1	容易出现死循环

2	递归避免死循环，设置好临界点return

## 回调函数

（函数作为参数传递）

# 二、数组

## 概念：

一系列数据的集合，每一项（数组的元素）可以保存任何类型的数据，每个元素之间用逗号隔开
2.数组的声明
	(1）字面量 var arr = [1,2,3];
	(2）构造函数 

```
var arr = new Array(3); 创建长度为3的数组
var arr = new Array("aa","bb","cc");  创建数组及定义好每一项的值
```


3.数组的操作(增删改查)

数组的索引:arr[索引]，索引从0开始计数

数组的长度:arr.length
数组的遍历：遍历索引从0-arr.length-1，通过arr[索引]拿到每一项的值

## 方法

### 1. 增删改

```
(1)增删改方法,改变原数组,返回值为长度或改变项
	push() ： 往最后添加项
	pop() ： 删除最后项
	unshift() ： 往前添加项
	shift() ： 删除最前项
	splice(startIdx,num,item) : 增、删、换
	reverse() : 数组倒序
```

### 2. 传递与复制 

```
(2)传递、复制方法,不改变原数组
	slice(startIdx,endIdx) : 截取数组
	join('拼接符') ： 数组拼接为字符串,默认逗号拼接
	concat(数组1,数组2,...) ： 合并数组,返回调用方法的新数组
```



## 数组的排序算法 

### 1.冒泡排序

​	外层遍历的是轮数
​	内层是每一轮，遍历当前索引，与索引+1进行比较换位置。每一轮将一个最大的数排在最后

```
var arr=[];
		for(var i=0;i<7;i++){
			arr.push(parseInt(Math.random()*100));
		}
		console.log(arr);
		for(var i=0;i<arr.length-1;i++){
			for(var j=0;j<arr.length-i;j++){
				if(arr[j]>arr[j+1]){
					var box=arr[j];
					arr[j]=arr[j+1];
					arr[j+1]=box;
				}
				console.log(666);
			}
		}
		console.log(arr);
```



### 2.选择排序

* 固定被比较的索引，与后面的每个索引对应的值进行比较

* 外层循环是固定的被比较的索引i：0-arr.length-2

* 内层循环是比较i的索引j，从i+1到arr.length进行遍历

  ```
  var arr = [12,3,44,343,55,1,23];
  for(var i=0;i<arr.length-1;i++){
  	for(var j=i+1;j<arr.length;j++){
  		if(arr[i]>arr[j]){
  			var item = arr[i];
  			arr[i] = arr[j];
  			arr[j] = item;
  		}
  		console.log(666);
  	}
  }
  console.log(arr);
  ```


### 3.快速排序

（递归）

```
var arr=[1,9,2,23,10,55,33];
fastSort(arr);
function fastSort(arr){
	if(arr.length<=1){
		return arr;
	}
	var midIdx=parseInt(arr.length/2);
	var midNum=arr.splice(midIdx,1)[0];
	var ltArr=[];
	var gtArr=[];
	for(var i=0;i<arr.length;i++){
		if(arr[i]<=midNum){
			ltArr.push(arr[i]);
		}else if(arr[i]>midNum){
			gtArr.push(arr[i]);
		}
	}
	return fastSort(ltArr).concat([midNum],fastSort(gtArr));
}
console.log(fastSort(arr));
```

### 4.sort()排序

arr.sort() 将原数组中的元素排序，并返回排序后的数组

*  默认以字符串的排列方式（转换成ASCII码进行对比)
*  sort(function(a,b){return a-b;}) 从小到大排序

		var res = arr.sort(function(a,b){
			// return值>0 a,b互换
			// return值<=0 不动
			return a-b;
		});
		console.log(arr,res);
## 数组的传递与复制

### 1.传递

* 基本数据类型中，传递的是值(数字,字符串,布尔类型,null,undefined)
* 引用数据类型中，传递的是在堆中的地址(数组,对象)

### 2.复制

基本数据类型：改变复制的值，不影响原值

```
var a = 10;
var b = a;//var b = 10
b = 30;
console.log(a,b);//10,30
```

引用数据类型：改变复制的值，会影响原值（浅复制）

```
var arr = [10,20,30];
var brr = arr;
brr[0] = 66;
console.log(arr,brr);//[66,20,30][66,20,30]
```

引用数据类型：改变复制的值，不影响原值（深复制）

* for循环拷贝数组的每一项(不适用多维数组)
* slice(0)

```
var arr = [10,20,30];
// var res = [];
// for(var i=0;i<arr.length;i++){
// 	res.push(arr[i]);
// }
// console.log(res);//10,20,30
// res[0] = 40;
// console.log(arr,res);
//=======================================
var res = arr.slice(0);
res[0] = 40;
console.log(arr,res);
```

## 多维数组

数组嵌套数组

```
// var arr = [["hzh","hyd"],["lm","jh"],["xw","rw"],["lz","zlh"],["hhm","dz"]];
var arr = [];
var brr = [];
var n = 0;
for(var i=1;i<=25;i++){
	brr.push(i);
	n++;
	if(n % 5==0){
		arr.push(brr);
		brr = [];
	}
}
console.log(arr);
```

# 三、对象

## 创建对象

1.字面量

```
var obj = {
	name : "xiaofang",
	age : 17,
	hobby : "学习"
}
```

2.构造函数

```
var obj1 = new Object();
```

## 对象的操作

操作对象键对应的值 

obj.键

obj["具题的键"] obj[变量]
对象的遍历

```
 for(var key in obj){
	key代表键;
	obj[key]获取每个键对应的值
}
```

对于单个键值对而言，键是变量，值就是值

对于整个对象而言，对象是变量，键是具体的属性

### (1)添加、修改属性

```
obj.sex = '男';
obj['weight'] = 60；
```

### (2)删除属性

```
var obj = {name:'laoxie',age:18,gender:'man'}
//删除age属性
delete obj.age;
```

### (3)读取属性值

```
obj.name;//==>小明
//如果读取一个不存在的属性，返回undefined
```

### (4)遍历对象for…in

```
    var obj = {name:'laoxie'，age:18，gender:'男'}；  
    for(var key in obj){
        //遍历obj对象里面所有的键key,Obj[key]操作所有键对应的值。
        document.write(obj[key]);//分别输出：'laoxie',18,'男'
    }
```

### 数组与对象的组合

```
 [{
        id:'001',
        name:'iphone7 plugs',
        nickname:'肾7',
        imgurl:'img/ip7.jpg',
        price:5899.00,
        sale:5888.00,
        color:'土豪金'
    },{
        id:'002',
        name:'Note7',
        nickname:'爆炸7',
        imgurl:'img/note7.jpg',
        price:3899.00,
        sale:998.00,
        color:'黑色'
    },{
        id:'003',
        name:'荣耀7',
        nickname:'牛x7',
        imgurl:'img/honor7.jpg',
        price:1999.00,
        sale:1899.00,
        color:'白色'
    }]
```

# 四、ES5数组新增方法

## 迭代（遍历）方法

### 1. forEach()

forEach(function(item,idx,arr){})  遍历数组，与for循环没有太大差别，比for循环方便

*  item代表数组中的每一项
*  idx代表索引
*  arr代表当前数组

```
var arr = [777,10,44,66];
for(var i=0;i<arr.length;i++){
	console.log(arr[i]);
}
arr.forEach(function(item,idx,arr){
	console.log(item,idx,arr);
})
```

### 2.map()

map(function(item,idx,arr){return ;})  返回一个数量相等的数组，内容是什么取决于在fn中的返回值

```
var arr = [777,10,44,66];
var res = arr.map(function(item,idx,arr){
			console.log(item);
			return item*2;
		})
		console.log(res);
```

### 3.filter()

filter(function(item,idx,arr){}) 返回一个数组，存放执行fn后返回true的数组元素(过滤)

```
var arr = [777,10,44,66];
var res = arr.filter(function(item,idx,arr){
			return item>55;
		})
		console.log(res);
```

### 4.some()

some(function(item,idx,arr){}) 返回布尔值，如果fn对数组任何一项返回 true，则返回true。

查找数组中是否有满足条件的项。

```
var arr = [777,10,44,66];
var res = arr.some(function(item,idx,arr){
			console.log(idx);//0
			return item>666;//777>666直到找到true就不再遍历
		})
```

### 5.every()

every(function(item,idx,arr){}) 返回布尔值，若fn对数组中有一项返回false，则返回false

检查数组所有项，是否都满足条件，是则返回true，否则返回false。

```
var arr = [777,10,44,66];
var res = arr.every(function(item,idx,arr){
			return item>666;
		})
		console.log(res);
```

## 归并方法

### reduce(fn,initVal)

fn(prev,current,idx,arr)

* prev: fn上一次执行的返回值，第一次为initVal，若initVal没有定义，为数组的第一个元素值
* current: 当前索引对应的值
*  idx: 当前索引
*  arr: 数组

应用： 数组求和

```
//对数组求和
var res = arr.reduce(function(prev,current,idx,arr){
	return prev+current;
},0);
```

### reduceRight(fn,initVal)

* fn(prev,cur,index,array): fn是每一项调用的函数，函数接受4个参数分别是
  * prev：函数上一次的返回值。（第一次的值参考initVal）
  * cur：当前值，
  * index：索引值，
  * array：当前数组，
* 函数需要返回一个值，这个值会在下一次迭代中作为prev的值
* initVal: 迭代初始值（可省略），如果缺省，prev的值为数组第一项

## 静态方法

只能由构造函数自己去调用

### Array.isArray()

Array.isArray() 判断是否为数组，返回布尔值

## 索引方法

### indexOf/lastIndexOf("a",3) 

indexOf(keyword[,startIdx]) 返回keyword所在数组中的索引值；

* 如果数组不存在keyword，则返回-1

* startIdx 规定开始查找的索引值
* 应用：判断数组中是否存在某个值

```
var arr=[10,20,50,40,50]
console.log(arr.indexOf(50))
//2
console.log(arr.indexOf(50,3))
//4
```

# 五、字符串

1.定义：字符串就是一串字符，由双（单）引号括起来

2.创建字符串

​	字面量 var str="hello"

​	构造函数 var str=new String("hello");

3.字符串的操作

​	字符串的长度 str.length

​	字符串的索引 str[索引]   ==>es5

​	str.charAt(索引)

4.字符串的方法

（1）split(分隔符)，将字符串根据分隔符，拆分成数组。原字符串不变

（2）replace(需要被替换的字符，替换后的字符)，字符串的替换方法。原字符串不变

（3）slice(start[,end])字符串的截取方法，截取start到end，不包括end的字符串，支持负数

substring(start[,end]) 与slice 一样，但不支持负数

substr(start[,len]) 支持负数，len为截取的数量

（4）字符串大小写转换

toLowerCase()  转换成小写

toUpperCase()  转换成大写

（5）trim() 删除前后所有空格，返回新的字符串(es5)

5.字符与字符编码



# 六、正则表达式

1.字面量创建

/字符串/

例如：var reg = /傻逼/

​	g 全局匹配

​	i 不区分大小写

2.构造函数创建 

​	new RegExp("字符串","gi")

​	new RegExp(变量,"gi")

# 七、Math

1.概念：一个保存数学公式和信息的对象

2.属性：

Math.PI		π  3.1415926....

3.方法：

Math.random()  //返回0-1之间的随机数（不包括1）

Math.round()  //四舍五入

Math.ceil()  //向上取整

Math.floor()  //向下取整

Math.max(num1,num2,...) //最大的数

Math.min(num1,num2,...) //最小的数

Math.abs() //绝对值

Math.pow(x,y)  //x的y次方

# 八、Date

## 创建日期时间对象

构造函数 new Date();

不带参数，得到的是代码执行时的时间（本地时间）

带参数：字符串，指定日期；数字，指定毫秒数（距离纪元时间的毫秒数）。

```
var d=new Date();//代码运行时的本地时间
var d=new Date("2017/10/10 12:00:00");
var d=new Date(2000); //距离纪元时间的毫秒数
```

## 时间日期对象的方法

1.获取方法

获取年月日

```
var d=new Date();
var year=d.getFullYear();//2019
var month=d.getMonth(); //月份0-11，得到的月份记得+1才是真实月份;
var date=d.getDate()
```

获取星期

```
var d=new Date();
var day=d.getDay();  //0-6:星期天-星期六
```

获取时分秒

```
var d=new Date();
var hour=d.getHours();
var minute=d.getMinutes();
var second=d.getSeconds();
```

date.getTime();获取距离纪元时间的毫秒数

## 静态方法

Date.parse(“2015-08-24”)//返回指定日期距1970-1-1零时的毫秒数

> PS：转换格式默认支持2015-08-24或2015/08/24

Date.now();//返回执行这行代码时距1970-1-1零时的毫秒数

## 定时器

1.var timer=setInterval(function(){},毫秒数)；每隔多少毫秒执行一次函数

2.setTimeout(function(){},毫秒数)；延迟多少毫秒执行函数，只执行一次

3.clearInterval(timer)；清除指定id标识的定时器操作

4.clearTimeout(timer)；清除指定id标识的延迟操作

# 九、BOM

## 概念

BOM 是Browser Object Model（浏览器对象模型）的缩写，提供与浏览器窗口进行交互的对象。JavaScript语法的标准化组织是ECMA，DOM的标准化组织是W3C, 而BOM缺乏标准。这也是各种浏览器不兼容的根源所在；

1.window对象

window对象是BOM的核心, 是最顶层的对象，所有对象都是通过它延伸出来的 

2.全局作用域下定义的变量都是window对象的属性；

尽量避免声明全局变量，减少命名冲突，避免全局污染；

在函数内部不用var声明的变量会成为全局变量，即window对象的属性

window对象可以在代码中省略，如window.alert()可以写成alert();

delete不能删除全局变量；

```
var obj = {name:'xxx'}

//删除对象的属性用delete：
delete obj.name;
```

## window对象下的属性

1.浏览器窗口尺寸

innerWidth/innerHeight, //表示浏览器窗口”可视区域”尺寸 

outerWidth/outerHeight //表示整个浏览器窗口的尺寸 

2.滚动相关

* scrollX/scrollY //获取浏览器窗口滚动条滚动过的距离
* scrollTo(x,y) //设置浏览器滚动距离
* scrollBy(xnum,ynum) //设置基于当前位置滚动的距离，可以为负数

## window的常用事件

* onload //页面资源全部加载完成后触发这个事件（开发中不常用）（document.addEventListener("DOMContentLoaded",function(){})）
* onscroll//窗口滚动条滚动时触发
* onresize //窗口大小改变时触发

## 系统弹窗

### 1.alert(msg)

//弹出对话框

### 2.confirm(msg)

//弹出警告弹窗，返回布尔值

### 3.prompt(msg,default)

 //弹出输入框，返回消息或null

以上三个方法都会暂停代码的执行

### 4.open(url,name,[options]) 

打开一个新窗口并返回新 window 对象 

name:不命名会每次打开新窗口，命名的第一次打开新窗口,之后在这个窗口中加载

options为字符串：width=400,height=400,top=200,left=200' 

opener父窗口对象，通过open方法打开的窗口才有opener对象

### 5.close(): 

关闭窗口

### 6.print(): 

调出打印对话框

## 属性对象 location

location是BOM最有用的对象之一，保存着当前窗口中加载文档的相关信息，还提供一些导航功能，它是个很特别的对象，既是window的属性，也是document的属性 

```
var src=https://www.baidu.com/s?wd=yangmi
location.href='整个网址/src'
location.hash='#后面的字符'
location.search='?wd=yangmi'
```



# 十、DOM

## 概念

DOM是Document Object Model（文档对象模型）的缩写，它是W3C国际组织的一套Web标准。是针对HTML和XML文档的一个API，它定义了访问HTML文档对象的一套属性、方法和事件。

1.节点

元素节点

属性节点

文本节点

```
<div id="box" class="bb">bilibili</div>//此处4个节点，1元素，2属性，1文本
```



## 获取元素节点

### 1.通过id名

document.getElementById("id名") 

* 通过 ID获取元素的节点（速度最快）
* 必须通过document调用
* 返回DOM节点对象，如果id不存在返回null

### 2.通过类名

getElementsByClassName("类名"); //通过类名获取；可以通过其他元素节点获取

* 通过class类名获取节点列表
* 返回类数组，如果类名不存在返回空数组[]

```
var box=document.getElementById("box");
var bb=box.getElementsByClassName("bb");
```

### 3.通过标签名

getElementByTagName("标签名")；

* 通过标签名获取元素节点列表
* 返回类数组，如果tagname不存在返回空数组[]

### 4.通过name属性

document.getElementsByName()

* 通过name属性获取元素节点列表
* 必须通过document调用
* 返回类数组，如果name属性不存在返回空数组[]

注意: 如果确认元素存在, 但是返回null或[]，一定是代码执行顺序的问题 

### 5.利用节点关系，

获取其他节点（包含文本节点）

#### 获取父级节点

ele.parentNode  //得到节点的父节点

#### 获取子节点

ele.childNodes  //得到ele元素的全部子节点列表（类数组）

ele.firstChild  //获得ele元素的第一个子节点

ele.lastChild  //获得ele元素的最后一个子节点

#### 获取兄弟节点

ele.nextSibling  //获得ele元素的下一个兄弟节点

ele.previousSibling  //获得ele元素的上一个兄弟节点

### 6.节点的三个属性

|            | nodeType |  nodeName  | nodeValue |
| :--------: | :------: | :--------: | :-------: |
| 1.元素节点 |    1     | 标签名大写 |   null    |
| 2.属性节点 |    2     |   属性名   |  属性值   |
| 3.文本节点 |    3     |   #text    | 文本内容  |

### 7.利用元素节点关系

#### 获取父级节点元素

parentElement

#### 获取子级元素节点

children获取元素的全部子元素

firstElementChild获取第一个子元素

lastElementChild获取最后一个子元素

#### 获取兄弟元素节点

nextElementSibling 获取下一个元素

previousElementSibling 获取上一个元素

### 8.节点的创建与插入方法

创建： 

* document.createElement() 创建一个元素节点
* document.createTextNode() 创建一个文本节点
* document.createAttribute() 创建一个属性节点（了解）

插入： 

* parent.appendChild()  向节点的子节点列表的结尾添加新的子节点
* parent.insertBefore(new,node)  在指定的子节点node前插入新的子节点new。
* ele.setAttributeNode(attrNode) 在指定元素中插入一个属性节点（了解）

对页面已存在节点的处理 

复制 

* cloneNode(boolean)  复制节点，为true是深复制。

删除： 

* parent.removeChild(ele)  删除（并返回）当前节点parent的指定子节点ele。

判断： 

* parent.hasChildNodes() 判断当前节点是否拥有子节点,返回布尔值

## 元素节点（对象）的属性及方法

### 1.常用属性

可以通过点语法或方括号访问 

* tagName 获取元素元素的标签名
* id 设置/获取元素id属性
* name 设置/获取元素name属性
* style 设置/获取元素的内联样式
* className 设置/获取元素的class属性
* innerHTML 设置/获取元素的内容（包含html代码）
* outerHTML 设置或获取元素及其内容（包含html代码）
* innerText 设置或获取位于元素标签内的文本
* outerText 设置(包括标签)或获取(不包括标签)元素的文本

### 2.元素方法（修改html属性）

* ele.getAttribute(attr) //获取元素的属性值（自定义属性获取）
* ele.setAttribute(attr,val); //设置元素的属性
* ele.removeAttribute(attr) //删除属性attr
* ele.hasAttribute(attr) //判断是否存在属性attr

### 3.盒模型相关

```
offsetTop: 当前元素离<定位父级>元素顶部的距离。
offsetLeft: 当前元素离<定位父级>元素左边的距离。
	以上两个属性如果没定位的父级，则相对于根元素html的距离
offsetWidth: 当前元素的宽度（border + padding + content）
offsetHeight: 当前元素的高度（border + padding + content）
```

## table对象(了解)

### 1. table对象属性&方法

* rows 返回包含表格中所有行的一个数组
* tBodies 返回包含表格中所有 tbody 的一个数组
* insertRow(index) 在表格中插入一个新行。
* deleteRow(index) 从表格删除一行。

### 2. tr对象属性&方法

* cells 返回包含表格中所有单元格的一个数组
* rowIndex 返回该行在表中的位置
* sectionRowIndex 返回在 tBody 、tHead 或 tFoot 中行的位置。
* insertCell(index) 在一行中的指定位置插入一个空的列
* deleteCell(index) 删除行中的指定的单元格

### 3. td/th对象属性&方法

* cellIndex 返回单元格在表格行的单元格集合中的位置。

# 十一、事件

## 鼠标事件

onclick当用户点击某个对象时调用的事件。

ondblclick当用户双击某个对象时调用的事件。

onmousedown鼠标按钮被按下。

onmouseup鼠标按键被松开。

onmouseover 鼠标移到某元素之上。

onmouseout 鼠标从某元素移开。

onmousemove鼠标被移动时触发。

onmouseenter在鼠标光标从元素外部移动到元素范围之内时触发。这个事件不冒泡

onmouseleave在位于元素上方的鼠标光标移动到元素范围之外时触发。这个事件不冒泡

oncontextmenu 鼠标右键菜单展开时触发

PS：click = mousedown + mouseup, dblclick = click*2(短时间内两次单击);
执行顺序：mouseover=>mouseenter; mouseout => mouseleave

## 事件对象

事件执行过程中的状态，用来保存当前事件的信息的对象

```
ele.事件 = function(e){
	e = e || window.event;//获取event对象的兼容写法。IE8-：window.event
}
```

兼容性代码：e=e||window.event

//标准浏览器：e

//ie8：false ||window.event ==>window.event

### 1.事件对象的属性（与鼠标相关）

e.button

当事件被触发时，返回哪个鼠标按钮被点击

W3C标准：0代表鼠标按下左键；1代表按下了滚轮；2代表按下了右键；

IE8：1鼠标左键，2鼠标右键，3左右同时按，4滚轮，5左键加滚轮，6右键加滚轮，7三个同时；

### 2.光标位置信息

```
e.clientX /e.clientY 光标相对于浏览器可视区域的位置，也就是浏览器坐标。
e.screenX/e.screenY 光标指针相对于电脑屏幕的水平/垂直坐标。
e.pageX/e.pageY:鼠标相对于文档的位置。
	* 包括滚动条滚动的距离，即：e.clientX+window.scrollX
	* IE8-不支持
	e.offsetX,e.offsetY: 光标相对于事件源对象的相对偏移量。
	* 事件源对象：触发事件的对象
```

## 键盘事件

onkeydown 某个键盘按键被按下。
onkeyup 某个键盘按键被松开。
onkeypress 键盘<字符键>被按下触发,而且如果按住不放的话，会重复触发此事件。

1.事件 对象的属性（与键盘相关）

（1）which/keyCode

对于keypress事件，该属性声明了被敲击的键生成的 Unicode 字符码(ascii码)

对于keydown和keyup事件，它指定了被敲击的键的虚拟键盘码。虚拟键盘码可能和使用的键盘的布局相关。

兼容代码：e.which=e.which||e.keyCode

（2）altKey 当事件被触发时，ALT键是否被按下，返回值为布尔值

（3）ctrlKey 当事件被触发时CTRL键是否被按下

（4）shiftKey 当事件被触发时，Shift键是否被按下；

## 阻止浏览器的默认行为

1.阻止右键鼠标的默认行为

oncontextmenu

2.文本的选择

3.表单的提交

4.链接的跳转

标准： event.preventDefault();

IE8-: event.returnValue=false;

兼容：event.preventDefault? event.preventDefault():event.returnValue=false

```
		//1.全局阻止
		// document.oncontextmenu=function(e){
		// 	e.preventDefault();
		// }
		//2.元素内阻止
		// var box=document.getElementById('box');
		// box.oncontextmenu=function(e){
		// 	e.preventDefault();
		// }
```



## 事件冒泡

### 什么是事件冒泡：

> 在一个对象上触发某类事件（如onclick事件），那么click事件就会沿着DOM树向这个对象的父级传播，从里到外，直至它被处理程序处理，或者事件到达了最顶层（document/window）

#### 演示：从里到外的元素添加相同的事件，查看事件冒泡

1）不是所有的事件都能冒泡。

​	以下事件不冒泡：blur、focus、load、unload…。

​	【onmouseover与onmouseenter的区别】

 2）冒泡到最顶层的目标不同。大部分浏览器到window对象，IE8-到document对象 

### 停止事件的传播

兼容：e.stopPropagation?e.stopPropagation():e.cancelBubble = true;

```
 标准：event.stopPropagation(); 
 IE8-：event.cancelBubble = true; 
 // 阻止事件冒泡兼容写法：
 if(e.stopPropagation){
 	e.stopPropagation();
 }else{
	e.cancelBubble = true;
 }
```

### 事件委托

​	利用事件冒泡原理，把本来绑定给某个元素的事件委托给它的父级（已经存在页面元素）处理。

#### 事件源对象：触发事件的元素

标准：event.target
IE8-：event.srcElement

兼容：e.target=e.target || e.srcElement;

#### 案例：表格删除当前行

```
//影响页面性能的三大操作：
	//* 事件数量
	//* dom节点操作次数
	//* 请求次数
output.onclick = function(e){	
	//兼容性问题
    e = e || window.event;
    var target = e.target || e.srcElement;
    if(target.className === 'btnDel'){
    	//this指的是谁?
        var currentTr = target.parentNode.parentNode;
        currentTr.parentNode.removeChild(currentTr);
    }else if(target.className === 'btnCopy'){
        var currentTr = target.parentNode.parentNode;
        currentTr.parentNode.appendChild(currentTr.cloneNode(true));
    }
}
```

## 事件捕获

从DOM树顶端到当前元素，执行事件。

## 绑定事件的方式

```
//（1）作为html属性
//		<div onclick="sum()"></div> 不常用，不实用。
//（2）DOM节点绑定
//		*同一元素的同名事件会被覆盖
//  	*事件处理函数只能冒泡阶段执行
//		div.onclick = function(){}
//（3）事件监听器
//		addEventListener(事件,function(){}[,是否捕获])
//		默认false冒泡不捕获，true捕获
//		*同名事件不会被覆盖
//  	*事件处理函数默认冒泡阶段执行
```

### 事件监听器

```
//标准浏览器：元素.addEventListener(事件名,事件处理函数,是否捕获（默认false，为冒泡）)
target.addEventListener("click", fn, false);
//IE8-：元素.attachEvent(on+事件名,事件处理函数)没有捕获阶段
target.attachEvent("onclick",fun);
```

* 可以绑定多个处理函数在一个对象上, 执行顺序按照绑定的顺序来(标准)
  * 不同元素事件执行顺序跟html结构有关
  * 相同元素事件执行顺序跟绑定先后有关
* 可以绑定多个函数在一个对象上, 执行顺序按照绑定的反序（ie8-）

封装：绑定事件，兼容浏览器

```
function bind(ele,type,handler,isCapture){
	// 优先使用事件监听器
	if(ele.addEventListerner){
		// 标准浏览器
		ele.addEventListerner(type,handler,isCapture);
	}else if(ele.attachEvent){
		// IE8-
		ele.attachEvent('on' + type,handler);
	}else{
		// DOM节点绑定方式
		ele['on' + type] = handler
	}
}
```

## 事件的移除

### DOM绑定事件的移除

​	ele.on+事件 = null；

### 事件监听器移除

* 标准：removeEventListener(type,fn, true)传入的参数fn要跟添加时一样(同一个函数)，否则不能移除事件
* IE8-：detachEvent('on'+type,fun)，传入的参数fun要跟添加时一样，否则不能移除事件

> 注意：
> 页面事件绑定数量越多，越影响性能（速度越慢）



# 十二、正则表达式

## 概念

正则表达式（regular expression）是一个描述字符模式的对象

能够进行强大的“模式匹配”和“文本检索与替换”功能。前端往往有大量的表单数据校验的工作，采用正则表达式会使得数据校验的工作量大大减轻

## 创建正则表达式

1.字面量

var reg=/字符串||匹配规则/gi;

g全局匹配，i不区分大小写

2.构造函数

var reg=new RegExp("字符串||匹配规则",gi);

## 支持正则表达式的字符串方法

1.search()

返回第一次匹配时所在的索引值，如果匹配不到则返回-1；

2.match()

默认匹配字符串，返回一个数组

0：所匹配的字符

index:匹配第一个字符所在的索引

input:对字符串的引用

全局匹配(g)，返回一个匹配所有字符串的数组，如果匹配不到则返回null

3.replace()

替换字符串

## 匹配规则

1.字符类（不说数量则默认只匹配一个）

\d 数字

\D非数字

\w代表数字、字母、下划线

\W非数字字母和下划线字符 

\s空格

\S空格以外的字符

.除换行以外的所有字符

\b : 匹配一个单词边界，也就是指单词和空格间的位置

\B : 匹配非单词边界。

单词和数字会被认为没有边界

PS:以上所有字符类都只是匹配“一个”字符 

2.特殊符号^ $ . * + ? = ! : | \ / () [] {} 

(1)表示数量：（默认遵循贪婪模式，越多越好）

+匹配1个或多个字符{1,}

*匹配0个字符以上{0,}

?匹配0个或1个字符{0,1}

{2,4}最少2个，最多4个；匹配到2~4个字符

(2)[]代表任意“单个字符”，里面的内容表示“或”的关系

-表示范围

例如：console.log(str.match(/[a-z]+/g));

^代表非

():表示一个整体，普通括号(?:)

```
var reg=/(?:\d{17}|\d{14})[\dx]/
```

(): 表示分组（n是以最左边括号出现的顺序排列)

* $1: 表示第一个分组

* $n: 表示第n个分组（不能写在正则表达式里）

* \n: 在正则分组后面使用，表示对第n个分组的引用(一定要写在正则表达式里)

  PS: 编写的正则分组数量越少越好 

var str="张益达,李小璐,张非凡";

|: 表示或者 

锚点定位 

* ^: 表示以什么开头
* $: 表示以什么结尾

表示数量，对前一个字符计数， 

* *: 代表0个或0个以上 <===>{0,}
* +: 代表1个或1个以上 <===>{1,}
* ?: 代表0个或1个 <===>{0,1}
* {}:

```
\d{5}: 匹配5个数字
\d{5,10}: 匹配5个到10个数字
\d{5,}: 匹配5个或5个以上的数字
```
非贪婪模式，在后面加问号

/\d{5,10}?/g

# 十三、ES5

## 支持ES5的浏览器

ie9+

## 页面加载事件

1、解析HTML结构

2、加载外部脚本和样式表文件

3、解析并执行脚本代码

4、DOM树构建完成 //DOMContentLoaded

5、加载图片等外部文件

6、页面加载完毕 //window.onload

```
* readystatechange事件（准备阶段状态改变，两个状态）
    * interactive 	：DOM树完成执行
    * complete		：类似window.onload,但比window.onload先执行
* DOMContentLoaded事件
	* DOM树完成执行
    * 必须使用事件监听器绑定document事件
PS:以上事件用以取代window.onload事件（实际开发不常用）

```



## ES5的严格模式

ie9不支持严格模式

1、使用严格模式：在当前作用域的最前面"use strict"

意义：增加JS语法的严谨性

```
2、为什么要用严格模式
* 消除javascript语法的一些不合理，不严谨的地方，减少一些怪异行为；
* 消除代码运行的一些不安全之处，保证代码运行的安全；
* 提高编译器效率，增加运行速度；
* 为未来新版本的javascript做好铺垫；

3、如何使用严格模式
* 全局：针对整个js文件
  将”use strict”放在js文件的第一行
* 局部：针对单个函数
  将”use strict”放在函数体的第一行
	function strict(){
    	"use strict";
   		 return "这是严格模式";
	}
	
4、执行严格模式后的一些限制
* 不使用var声明变量严格模式中将不通过
* 删除系统内置的属性会报错 
* 不能删除var声明的全局变量（会自动成为window的属性）
* 对象有重名的属性将报错
  * var obj={name:"小王",name:'王大锤'}
* 函数有重名的形参将报错
  * function sum(a,a,b){}
* arguments严格定义为参数，保存实参信息
  * 不允许对arguments赋值
  * 禁止使用arguments.callee（相当于递归）
* 函数必须声明在顶层，不能写在条件判断语句或for循环语句中
  var arr = [10,2,3,50];
  if(arr.length>3){
      function sum(){//报错}
  }

```



## 获取元素节点

1、document.querySelector(css选择器) 获取匹配选择器的第一个元素节点，返回DOM节点

1、document.querySelectorAll(css选择器) 获取匹配选择器的所有元素节点，返回类数组

## Function方法bind()

1、bind() 用于将当前函数和指定对象绑定（改变this指向），返回一个新函数

```
应用
var btns = document.querySelectorAll('.btn');
for(var i=0;i<btns.length;i++){
    btns[i].onclick = function(){
        //方式1(1)：var self = this;
        setTimeout(function(){
            //(2)console.log(self.innerHTML);
            //方式2.bind()改变this的指向
            console.log(this.innerHTML);
        }.bind(this),1000);
    };
}
```



## 获取class的属性

操作类名的方法

```
classList对象
	-length:class类名的个数
	-add():添加class方法
	-remove():删除class方法
	-toggle():切换class方法
	-contains():是否含有某个类，返回布尔值
```



## data自定义属性

```
-w3c规定的自定义属性的格式为[data-**=""]
-dataset对象
	data-age="17" <==>ele.dataset.age=17;
```

# 十四、ES6

## let变量声明

```
let:声明变量
-变量声明不会提前
-let不允许相同作用域内多次声明同一变量
-块级作用域{}  //花括号内为块级作用域
```

## const声明常量

```
-变量声明不会提前
-const不允许相同作用域内多次声明同一变量
-块级作用域
-声明后无法修改值
*建议命名时全部大写，用_隔开多个单词
```

## 解构

声明变量时，从数组或对象中提取值，对变量进行赋值，这被叫做"解构"

```
（一）数组解构
1、常规操作
	var [a,b,c]=[1,2,3]; //等同于var a=1,b=2,c=3
2、...表示获取剩余的所有参数
	var [a,...b]=[1,2,3,4]; //等同于var a=1,b=[2,3,4];
3、解构失败
如果变量个数多于赋值数，多余变量为undefined;
例如：var [a]=1; //报错：1 is not iterable
解构-左右都要有中括号
4、指定默认值
	var [a,b,c=1]=[10,30] //若解构失败，为默认值
	//a=10,b=30,c=1
（二）对象解构
1、常规操作
	obj={
        guid:"01",
        name:"猫爪杯",
        price:888
	}
	var {guid,name,price}=obj;
2、解构失败：变量名与属性名不相同，返回值为undefined
3、如果变量名与属性名不相同，则必须写成以下格式才能取到值
{原属性名:变量名}
4、指定默认值
	var {a=10}={}; //当a解构失败的话，拿到默认值
（三）应用
1、交换变量值
var x=10;
var y=20;
var [x,y]=[y,x];
2、函数返回多个值
    //数组：
    function example(){
         return [1,2,3]
    }
    var [x,y,z] = example();
    //对象：
    function example(){
         return {name:"lemon",age:18};
    }
    var {name,age} = example();
3、定义函数形参（重点）
    //数组：
    function test([x,y,z]){
        //相当于 var [x,y,z] = [1,2,3];
    }
    test([1,2,3]);
    //对象：
    function test({name,age}){
        //相当于 var {name,age} = {name:"lemon",age:18};
    }
    test({name:"lemon",age:18});

    //常规操作：参数可以设置默认值
    fuction test({x=0,y=0,z=0}){
        //相当于var {x=0,y=0,z=0} = {x:10}
        //为避免没有实参值传入，给形参默认值
    }
    test({x:10});

    //扩展：若形参是基本数据类型，函数也可以对形参进行设置默认值的操作。
    var func1 = function(x=1,y=2){return x+y}；
    func1(); // 得到 3
    //同样，也可以用...表示获取剩余参数
    var func2 = (x, ...args) => { console.log(args) };
    func2(1,2,3); // 输出 [2,3]
```



## 字符串扩展

```
字符串方法
1、includes
	判断是否包含某个字符，返回布尔值
'html5'.includes('html');//true
2、startsWith/endsWith
	是否以某一字符或某一字符串开头/结尾
	let str='google';
    str.startsWith('goo');  //true
    str.endsWith('e');    //true
3、repeat(n)
	得到字符串重复n次后的结果，n可以为小数，但不能为负数
    'laoxie'.repeat(2);//laoxielaoxie

```

## 字符串模板

template string

```
-使用反引号``表示，你可以通过一种更加美观、更加方便的方式向字符串中插入变量
-格式：${变量|函数}，
 `你好，我的名字叫${username},接下来是我的自我介绍：${introduce()}` 
 模板字符串中所有的空格、新行、缩进，都会原样输出在生成的字符串中。
```

## 函数扩展

```
（一）箭头函数
*可以省略function、return、()、{}
 1.{}内部只有一句返回代码，可以省略return
 	没有参数或有多个参数不能省略()
 	//var sum = () => 3;var sum = (a,b) => 3;
 	只有一个参数，可以省略()
 	//var sum = a => 3;
 2.{}内部有多句代码，不能省略{}、return
 	=>后紧接着的{}代表代码块
 	如果返回一个对象，两种写法
 	(1)var sum=()=>({name:'lemon'})
 	(2)var sum=()=>{return {name:'lemon}}
 3.箭头函数没有this，它的this继承自外部作用域
 
（二）生成器函数
 	-function和函数名之间有一个*号,*紧跟function
 		函数名():执行后，得到一个状态为suspended的对象{next()}
    -yield:暂停代码执行
    -return:终止函数
    -next():执行后得到一个对象，有两个属性如下:
    	value:暂停时返回的值(yield)
    	done:表示函数是否执行完毕
```

## set集合

```
（一）Set集合，
    类似于数组，但是成员的值都是唯一的，可自动去重。
    去重的前提是两个值全等于。
（二）set的方法
    * add(value)：添加某个值，返回Set结构本身。
    * delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    * has(value)：返回一个布尔值，表示Set集合中是否存在该值。
    * clear()：清除所有成员，没有返回值。
（三）利用set去重数组
    var arr = [1, 2, 3, 4, 5, 5, 5, 5]；
    let items = new Set(arr);
    //去重后将set集合重新转成数组
    arr = Array.from(items)；
（四）遍历set集合
	* forEach()
	* for…of
        set.forEach((item,idx)=>{
            console.log(item,idx);//索引值与item值相同
        })

        var imgs = new Set(['a','b','c']); //根据KEY遍历 
        for(let item of imgs){
             console.log(item); 
        } 
```

for...of

* 这是最简洁、最直接的遍历数组元素的语法
* 这个方法避开了for-in循环的所有缺陷
* for…of跟for-in的区别很明显，就是直接取值，而不再取下标了
* 与forEach()不同的是，它可以正确响应break、continue和return语句

```
var arr = [10,12,18,30];
for (var value of arr) {
  console.log(value);
}
```

> 只要有[迭代器Symbol(Symbol.iterator)  ]就可以用for...of遍历

> * Array			

> * DOM

> * Set/Map集合

> * String

> * 不支持普通对象

## 对象扩展

```
（一）对象合并方法
Object.assign(obj1,obj2,...objN);合并对象到obj1，返回obj1
	var obj1 = {a:1}；
    var newObj1 = Object.assign(obj1,{b:2});
    1.合并对象到obj1,所以obj1 = {a:1,b:2}
    2.返回obj1，传递给newObj1，所以newObj1 = {a:1,b:2}

    var newObj2 = Object.assign(obj1,{b:2},{b:4,c:3});
    *若存在相同属性，后面的覆盖前面的。//newObj=obj1={a:1,b:4,c:3}
（二）对象的传递与复制 
    var obj = {
        name:"laoxie",
        hobby:['大保健','money']
    }
    1.对象的传递：
    var newObj = obj; //此时修改obj的任意属性，也会同时影响newObj
    2.对象的复制
    （1）for...in遍历复制
    for(var key in obj){
        newObj2[key] = obj[key];
    }
    （2）利用assign（）
		var newObj3 = Object.assign({},obj);
    	注意：以上两种复制方式，都只支持浅拷贝（对于引用类型，只拷贝引用）
		obj.hobby.push('羽毛球');//此时也会影响newObj2与newObj3

    （3）深拷贝
		var newObj3 = JSON.parse(JSON.stringify(person))；
（三）对象的简写
	ES6允许在对象之中直接写变量
    1. 属性简写
        var myName = 'laoxie';
        var obj = {myName};//等效于var obj = {myName:'laoxie'}。
    	//变量名作为属性名，变量值作为属性值。
    2.变量值作为属性名
        var obj = {
            [myName]:18 //等效于 laoxie:18
        }
    3.方法简写
        var obj = {
            coding(){} //等效于 coding:function(){}
        }
```

## Map集合

### 1.概念

js对象（Object）只能用字符串当作键(属性名)。这让它的使用有了很大的限制。所以ES6推出了一种类似于对象的数据集合：Map集合，它能让所有类型的数据作为键

### 2.方法

```
		* 设置set(key, value)
		* 获取get(key)
		* has(key)
		* delete(key)
		* clear()
	（1）创建：
        let map = new Map(); 
    （2）设置：
        map.set('name','laoxie');
        map.set(6,666);
        // 把数组作为键
        var arr = [10,20,30];
        map.set(arr,'数组');
        //获取：
        map.get(arr); //[10,20,30]
```

### 3.遍历方法

```
    * keys() 获取所有键，可以用Array.from()转成数组
    * values() 获取所有值，可以用Array.from()转成数组
    * entries() 获取所有键值对，可以用Array.from()转成数组
    * 循环遍历，配合解构赋值 for...of
    for(var item of map){
        console.log(item); //每个item得到的都是一个数组，索引0为键，索引1为值
    } 
    //解构写法：
    for(var [key,value] of map){
        console.log(key,value);
    }
```

## Symbol数据类型

```
1.概念
	ES6引入了一种新的原始数据类型Symbol，表示独一无二的值，一旦创建后就不可更改，是一种类似于字符串的数据类型，但Symbol 值不能与其他类型的值进行运算，否则报错。
2.创建
    (1)没有参数的情况
    var s1 = Symbol();
    var s2 = Symbol();
    s1 === s2 // false

    (2)Symbol函数可以接受一个字符串作为参数，表示对Symbol实例的描述，主要是为了标识和区分，对调式非常有用
    // 有参数的情况
    var s1 = Symbol("foo");
    var s2 = Symbol("foo");
    s1 === s2 // false

    (3)Symbol值不能与其他类型的值进行运算
3.用途
    * 给对象创建私有属性
    * 给现有的对象添加属性，可能会产生命名冲突，Symbol的出现解决这个问题
    var attr = Symbol();

    // 第一种写法,不用加引号
    var a = {};
    a[attr] = 'Nani';

    // 第二种写法（注意加方括号，否则回被当作普通属性）
    var a = {
        [attr]: 'Nani';
    };

    // 以上写法都得到同样结果
    a[attr] // "Nani"
4.Symbol.for() 登记symbol,会先查找当前Symbol是否存在
    // 存在：则引用，不存在：则创建登记
    var s11 = Symbol.for('laoxie');//创建一个Symbol
    var s12 = Symbol.for('laoxie');//引用一个Symbol
    //注意：直接使用Symbol()创建的Symbol值的键不会被登记，所以也就获取不到
```

