---
title: Sass
date: 2015-10-08 23:18:33
tags: 
- Sass
categories:
- A_html+css
---


SASS是一个成熟、稳定、强大的 CSS 扩展语言解析器，提供变量、嵌套、混合、继承等特性，大大节省了设计者的时间，使得CSS的开发变得简单和可维护 .

## 一、嵌套(Nesting)

css中重复写选择器是非常恼人的。如果要写一大串指向页面中同一块的样式时，需要一遍又一遍地写同一个ID。

```
#content article h1 { color: #333 }
#content article p { margin-bottom: 1.4em }
#content aside { background-color: #EEE }
```

sass写法：

```
#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  aside { background-color: #EEE }
}
```

- 在嵌套中用&表示父元素选择器

## 二、注释

```
body {
  color: #333; // 单行注释：不会出现在生成的css文件中
  padding: 0; /* 多行注释：内容会出现在生成的css文件中 */
}
```

## 三、变量

sass的变量必须是$开头，后面紧跟变量名，而变量值和变量名之间就需要使用冒号(:)分隔开（就像CSS属性设置一样）。

### 演示：变量写法

```
// 主颜色
$mainColor:#5b8c58;
// 高亮颜色
$highlight:#fc0;
// 内边距
$padding:5px 10px;
//使用变量
a:hover{color:$mainColor;}
```

### 全局变量与局部变量

定义在任何选择器之外的变量被认为是全局变量，定义在选择器内的变量称之为局部变量。

但启用了global后，即使写在局部也能覆盖全局变量（sass 3.4版本后可用）

```
$color:#fff !global;
```

### 默认变量

sass的默认变量仅需要在值后面加上!default即可。

```
$fontSize:12 !default;
```

### 变量特殊用法

一般我们定义的变量都为属性值，可直接使用，但是如果变量作为属性或在某些特殊情况下等则必须要以#{$variables}形式使用

```
$direction:top !default;
//应用于class和属性
.border-#{$direction}{
  border-#{$direction}:1px solid #ccc;
}
```

### 多值变量

多值变量分为list类型和map类型，简单来说list类型有点像js中的数组，而map类型有点像js中的对象。

```
//list类型
$pd: 5px 10px 20px 30px;
//使用
.content{padding:$pd;}
.btop{border-top:nth($pd,1);} //索引从1开始计数

//map类型
$headings: (h1: 2em, h2: 1.5em, h3: 1.2em);
//使用
h1{map-get($headings,h1)}
```

### 运算 

sass具有运算的特性，可以对数值型的Value(如：数字、颜色、变量等)进行加减乘除四则运算。请注意运算符前后请留一个空格，不然会出错。 

### 条件判断及循环

#### @if判断

@if可一个条件单独使用，也可以和@else结合多条件使用

```
@if $type == ocean {
    color: blue;
} @else if $type == matador {
    color: red;
} @else {
    color: black;
}
```

#### @for循环

```
@for $var from <start> through <end>（包含end值）
@for $var from <start> to <end>（不包含end值）
```

#### 演示:for循环

```
@for $i from 1 through 6{
	h#{$i}{
		font-size:36px/($i/2);
	}
}
```

### 函数

Sass中的数字函数提要针对数字方面提供一系列的函数功能：

#### 常用函数：

> percentage($value)：将一个不带单位的数转换成百分比值；
> round($value)：将数值四舍五入，转换成一个最接近的整数；
> ceil($value)：将大于自己的小数转换成下一位整数；
> floor($value)：将一个数去除他的小数部分；
> abs($value)：返回一个数的绝对值；
> min($numbers…)：找出几个数值之间的最小值；
> max($numbers…)：找出几个数值之间的最大值。
> lighten($color,$num) $color颜色值，$num:0-100
> darken($color,$num) $num:0-100

```
演示：函数的使用
background-color:lighter($mainColor,percentage($i/10))
```

#### 自定义函数

格式：@function 函数名

```
$oneWidth: 10px;  
$twoWidth: 40px;  
@function widthFn($n) {  
  @return $n * $twoWidth + ($n - 1) * $oneWidth;  
}  
.leng {   
    width: widthFn($n : 5);  //！！传参格式注意
} 
```

### 继承

使用选择器的继承，要使用关键词@extend

- 继承一般样式
  @extend h1
- 占位选择器%

```
// % 无实际样式，不会被编译出来
%pop{
	width:600px;height:300px;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);
}
.box{
	width:800px;
	color:#ccc;
	background-color:#000;
}
.container{
	@extend .box;
	margin:10px;
}
.login{
	@extend %pop;
	background-color:$mainColor*2;
}
```

### 导入 @import

sass中导入其他sass文件，最后编译为一个css文件，优于纯css的@import

```
@import 'reset';
```

### 演示：同时编译多个scss文件为css，演示_文件名不会编译效果。演示bootstrap源码

```
//var.scss:
$mainColor: #58bc58;
$container: 800px;
$padding:5px 10px 15px 20px;
//list.scss:
.box{
	width:$container;
	color:$mainColor;
	padding:$padding;
	background-color:#fff;
	border:1px soild $mainColor;
}
```
