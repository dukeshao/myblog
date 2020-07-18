---
title: HTML+CSS 基础
date: 2015-10-01 23:18:33
tags: 
- HTML
- CSS
categories:
- A_html+css
---

# 一	HTML基础+编辑器


### 一、基本操作

#### （一）sublime编辑器的使用

###### 1	建立文件夹

文件-打开文件夹
将文件夹拖到项目目录中，同时也可以右键，将不需要的项目移除掉

###### 2	快捷键

标签名+tab：生成标签
ctrl+? :注释;	ctrl+s 保存;	ctrl+c 复制;
ctrl+x 剪切;	ctrl+v 黏贴;	ctrl+z 返回上一步;
ctrl+y 返回下一步;			ctrl+滚轮 调整sublime缩放比例
tab 缩进;		shift+tab 往回缩进一层
h${内容}[html属性]*6 : 生成h1-h6
!+tab:生成html基本结构;	

#### （二）创建站点
1	作用：将一个网站上所有的网页及素材归纳在一起
2	站点必备
​	文件夹：html(存放除了首页以外的其他页面)、css、images、js
​	文件： index.html(入口文件(首页)，必备，名字不要改)
3	命名规则：
​	小写字母开头，包含数字、下划线
​	若创建的文件出现多余的后缀，说明没有去除隐藏的扩展名
​	工具-文件夹选项-查看-隐藏已知文件的扩展名的勾去掉

#### （三）pc端调试工具
1	找到想看的内容-右键检查-elements查看标签的-styles查看样式
2	F12打开调试工具

### 二、html的基本结构
```
<!DOCTYPE html>		//告知文档类型为html5
<html lang="en">
<head>
	<meta charset="UTF-8">	//charset是字符编码
	<title>Document</title>
</head>
<body>
	//书写网页内容
</body>
</html>		//记得标签成对敲,记得缩进
```

### 三、html的基本语法
1	html标签： 由尖括号包裹起来的一个整体
2	html元素： 由一对双标签或者一个单标签组成
3	html属性：[html属性名="属性值"]，紧跟标签名字后面，空格隔开。一个html属性的多个属性 值，也用空格隔开
4	html注释:书写一些信息方便自己或他人理解，不会显示在页面中
	ctrl+？`<!--注释-->`

### 四、HTML基础标签
1	标题标签 h1-h6
	直观：从大到小
​	代表含义：标题的语义从重到轻
​	建议：h1每个页面只用一次
2	段落标签 p
​	默认情况下，页面代码中的空格跟换行在浏览器解析时，会被解析成一个空格。
​	标识符：&nbsp;空格    &lt;小于号    &gt;大于号   &times;乘号
​	空格大小跟字体大小并不一致，但是空格大小与字体大小有关。
3	换行标签 br/
4	分割线标签 hr/
5	视觉标签
​	b 加粗    	i倾斜     u下划线   s删除线
6	语义标签
​	strong加粗     em倾斜    ins下划线    del删除线
7	列表标签
​	（1）无序列表ul(unordered list) >li列表项(list item)
​	（2）有序列表ol(ordered list) >li列表项(list item)
​		ul、ol的儿子只能是li，不可以是其他元素
​	（3）自定义列表dl(definition list)>dt自定义列表项(definition term)+dd对自定义列表项的描述(definition description)
8	锚链接a
​	实现点击内容跳转的功能:	[href 锚链接跳转到的路径]
​		[target 锚链接跳转路径所在的窗口]
​			_self 默认在当前窗口
​			_blank 在新窗口打开
9	图片标签img
​	[src 引入图片的路径]
​	相对路径：../  => 返回上一层目录
​		文件夹名/  => 进入某个文件夹
​	绝对路径:
​		[alt 图片未加载出来，呈现的文字]
​		[title 光标移入图片时，呈现的文字]
10	表格标签
​	table>tr行>td单元格 
​	table:
​		 [border给表格加上边框]
​		 [cellpadding 给表格单元格加上内填充（内容与边框之间的距离）]
​		 [cellspacing 单元格之间的距离]
​		 [width 表格宽度]
​		 [height 表格高度]
​	td:
​		[colspan合并列]
​		[rowspan合并行]
11	表单form
(1)	表单作用：收集数据，提交到服务器			
​	form
​		[action提交到的后台地址]
​		[method提交方式（get、post）]
(2)	input表单控件
		 [type规定表单控件的类型]
text文本框;     password密码框;   radio单选框;   checkbox多选框;   button按钮框;   submit提交按钮（提交功能）; reset重置按钮;
[value]给表单控件添加内容]
[name] :给同一组的单选框或多选框起相同的名字。
​	拥有name属性的表单控件内容才可以提交到服务器
​	[checked] 给单选框或多选框设置默认选中
(3)	form>select下拉列表>option选项
	option:
		 [value]
		 [selected] 下拉列表的选项被默认选中
(4)	form>textarea文本域
​	[cols列数]
​	[rows行数]
12	div 没有语义的块级元素
块级元素：h1-h6、p、列表（ul、ol、li、dl、dt、dd）、form
块级元素的特点：
	（1）默认占据一整行。即使设置宽度，也会用margin填充完一行剩余的区域
	（2）可以设置宽高
13	span 没有语义的行内元素
行内元素：(b、u、i、s...)、锚链接、图片、input、select、textarea
行内元素的特点：
（1）宽高由内容决定（不能设置宽高）
（2）一行显示多个

# 二	CSS基本语法
### 一、css简介
1、cascading style sheets 层叠样式表，主要作用是呈现样式
​		*层叠性
​			给同一个元素添加相同的css属性，属性值之间会发生层叠问题。
​		*样式表

### 二、css语法
1、格式：选择器{声明}
​		*声明由  css属性：属性值；组成
​2、css属性：
​		*width 宽度
​		*height 高度
​		*background-color 背景颜色
​			*red 红色  blue 蓝色  green绿色  orange橙色
​3、css注释：

```
/*css注释*/
```
### 三、样式表
1、内部样式表 head>style，在style标签里面书写css语法格式
	*作用域：当前页面
​2、外部样式表
​	（1）建立外部样式表：css文件夹-新建css文件，在该css文件里写css语法格式
​	（2）在页面中链接该css文件，通过head>link[rel="stylesheet" href="css文件路径"]
​	*作用域：所有链接到该css文件的页面
​3、内联（行内）样式表
​	[style="声明"]
​	声明由css属性：属性值；组成
​	*作用域：当前元素
​	*优先级：就近原则（内联样式的优先级最高，内部样式与外部样式的优先级是一样大的，谁离该元素近谁就起作用）

### 四、选择器
1、标签选择器（元素选择器、类型选择器）：将标签名字作为选择器

```
div{width:100px;}
```
2、类选择器（class选择器）：将.类名作为选择器

```
.box{width:100px;}
```
3、id选择器：将#id名作为选择器

```
#container{width:100px;}
```
4、通配符选择器
```
*{color:black;}
```
5、群组（并集）选择器：将选择器用逗号隔开，表示这些选择器同时被获取到
```
.box,#container{width:100px;}
```
6、后代选择器：将选择器用空格隔开
```
#header .box1{width:100px;}
<div id="header">
	<div class="box1"></div>
</div>
```
7、伪类选择器
​	（1）:link 锚链接未被访问前的样式
​	（2）:visited 锚链接被访问后的样式
​	（3）:hover 鼠标悬停在元素上，才触发
​	（4）:active 鼠标点击元素时，触发样式
书写顺序：lv-ha
8、交集选择器

```
div.box{width:100px;}
```

### 五、选择器的优先级及权重
​	（1）基本选择器的优先级
​		*前提：给同一个元素添加相同的css属性，才有优先级的比较
​	!important/行内样式>id选择器>类选择器/伪类选择器>标签选择器>通配符选择器
​	（2）选择器的权重比较
​		0000原则：
​			*第一个0代表!important或者内联样式
​			*第二个0代表id选择器的个数
​			*第三个0表示类选择器的个数
​			*第四个0表示标签选择器的个数
​		继承的权重最低，为0000

# 三	CSS核心属性

### 一、字体属性 font

​	1、**字体大小font-size**
​		*默认的字体大小为16px，最小为12px
​		*9pt=12px，12pt=16px
​	2、**字体加粗font-weight**
​		*属性值：normal默认情况下不加粗  bold加粗
​		*（100-500表示normal，600-900表示bold）
​	3、**字体倾斜font-style**
​		*属性值：normal默认情况下不倾斜  italic倾斜 oblique更加倾斜
​	4、**字体家族font-family**
​		*属性值为汉字或者多个单词，属性值要加双引号
​		*同一个CSS分属性的多个属性值用逗号隔开
​	5、**字体颜色 color**
​		*属性值：英文单词、十六进制（光学模式）[#000000]
​		*十六进制表示法：#000000
​			*每位数字的取值可以是0-9或者a-f
​			*前面两位数字表示红色#ff0000
​			*中间两位数字表示绿色#00ff00
​			*后面两位数字表示蓝色#0000ff
​			*若表示同一个颜色的两位数都相等，可以省略为三位数#000黑色#fff白色

### 二、文本属性

​	1、**text-transform检索文本的大小写**
​		*属性值：
​			none 默认不改变
​			uppercase全部转成大写
​			lowercase全部转成小写
​			capitalize首字母大写
​	2、text-decoration文本修饰
​		*属性值：
​			none 默认没有文本修饰
​			underline 下划线
​			overline 上划线
​			line-through删除线
​			blink闪烁:IE、Chrome 或 Safari 不支持 "blink" 属性值。
​	3、text-indent 首行缩进
​		*单位： em以一个字体的大小为基准 
​		*可以为负数

```
text-indent:2em;
```

​	4、letter-spacing字间距
​		*以字或字母作为分界点
​	5、word-spacing词间距
​		*以空格作为分界点
​	6、text-align 文本在当前容器的水平方向的对齐方式
​		*属性值：left默认向左对齐 	 center居中对齐  right向右对齐   justify两端对
​		*文本：文字、图片
​		*容器：块级元素
​	7、vertical-align行内元素在垂直方向上的对齐方式
​		*属性值：baseline 默认以基线对齐  top顶线对齐  bottom底线对齐  middle中线对齐
​		*常用于将文字与图片垂直方向居中对齐 

```
vertical-align:center;
```

​	8、line-height行高
​		*行高：一行的高度
​		*行高=文本的上间距+文本的下间距+字体大小
​		*1.在行高中，文字一定是居中显示的
​		*2.在同一段文本中，行高中的文本上间距=文本下间距
​		*3.常用操作：（1）若想一行文本在容器中垂直居中，可以将line-height设成容器的高度（2）若单行文本在居中偏上，则line-height<容器高度

### 三、列表属性

​	1、list-style-type 列表样式类型
​		*属性值：
​			disc 默认实心圆
​			circle空心圆
​			square方块
​			none没有样式(用得最多)
​	2、list-style-image: url(路径)  列表样式图片
​	3、list-style-position 列表样式位置
​		*属性值： outside在li的内容外边 inside在li的内容里面（不稳定，不常用，有其他方式）
​	*总属性

```
list-style: 1/2 3;
```

​	*用得最多的是

```
list-style:none;
```

​	块级元素除了div、li以外，基本都有默认的margin或padding样式

### 四、背景属性 background

​	1、background-color 背景颜色

```
background-color:red;
background-color:#f00;
```

​	2、background-image:url(路径) 背景图片
​		*当容器的尺寸小于背景图片的尺寸，背景图片会有一部分丢失
​		*当容器尺寸大于背景图片的尺寸，背景图片会平铺满整个容器
​		*当容器尺寸等于背景图片的尺寸，背景图片能刚好在容器中完整的呈现
​	3、background-repeat 背景图片是否平铺
​		*属性值： repeat默认平铺  no-repeat不平铺  repeat-x水平方向平铺  repeat-y垂直方向平铺
​	4、background-pisition背景图片在容器中的定位
​		（1）数值：
​			*背景图片往左移，为负值
​			*背景图片往右移，为负值
​		（2）方位：
​			*水平：left左 center中 right右
​			*垂直： top上 center中 bottom下
​	5、background-attachment背景图片的固定
​		*必须配合有滚动条的元素才能使用
​		*属性值：
​			scroll随着滚动条滚动而滚动
​			fixed滚动条滚动，背景图片固定位置
总属性 background: 1 2 3 4 5;(可以缺省)

### 五、浮动float

​	1、属性值：none默认不浮动 left向左浮动 right向右浮动
​	2、浮动元素的特点
​		（1）当元素浮动了，相当于脱离了标准流，但里面的文字不会脱离文档流。
​			*标准流：元素的摆放顺序为从上往下、从左往右。
​		（2）浮动的元素会按照行内块级元素进行摆放
​			*行内块级元素的特点：一行显示多个、可以设置宽高
​		（3）一行放不下所有的浮动元素，浮动元素会换行显示。该元素在垂直方向上紧跟上一个元素的最低点摆放

### 六、边框 border

​	1、border-width 边框宽度
​	2、border-style 边框样式
​		*属性值：solid实线  dashed虚线  dotted点线 double双线
​	3、border-color 边框颜色
​	*总属性 border:1 2 3;
​	*border-方位：1 2 3
​		*方位：left right top bottom
​	*border-方位-分属性
​		*border-方位-(width/style/color)
​	*分属性要覆盖总属性的某个值，则必须写在总属性的后面

# 四	盒模型

### 一、盒模型的组成

1、盒模型 = content+padding +border+margin
2、标准盒模型：width、height=content
3、怪异盒模型：width、height=content+padding+border
4、box-sizing 规定盒模型的解析方式
	*content-box 标准盒模型，以content以内为width、height大小
	*border-box 怪异盒模型，以border以内为width、height大小

### 二、padding内填充

padding的取值，遵循原则：上右下左，若某个方向的值缺省，找它的反义词的值。
​padding-方位：设置某个方位上的padding
​注意事项：
​	padding不能为负值
​	背景是从padding的左上角开始摆放的，background-position:0 0;在padding的左上角

### 三、margin 外间距

margin的取值，遵循原则：上右下左，若某个方向的值缺省，找它的反义词的值。
​margin-方位：设置某个方位上的margin
​注意事项：
​	margin可以为负值
​	margin区域没有背景
父元素的第一个子元素建议不要设置margin-top，因为可能存在margin塌陷问题

# 五	元素类型

### 一、元素类型的分类

#### （一）块级元素

​	1.特点：块级元素的宽高默认占其父级元素的一整行，若设置了宽度，多余的区域margin填充。
​		*利用块级元素水平方向多余的margin实现块级元素在父容器中水平居中，给当前元素加margin:0 auto;
​		*块级元素可以设置宽高
​		*块级元素可以理解成容器，可以容纳所有的行内元素及部分的块级元素
​			例如：ul里面只能嵌套li，dl>dt+dd
​			例如：有语义的标签不能在里面嵌套div、p不能嵌套p、标题标签不能嵌套标题
​	2.代表元素
​		div、标题h1-h6、p、列表ul、ol>li;dl>dt+dd、form、option

#### （二）行内元素（内联元素）

​	1.特点：一行显示多个；宽高由内容决定，即不能设置宽高；行内元素遵循盒模型规律，但是设置上下的border、padding、margin并没有真正的生效。
​	2.代表元素
​		span，buis，strong，em，ins，del，a，img，input，select，textarea，label
​	3.实现行内元素在父容器中水平居中
​		*给父容器加text-align:center;

### 二、元素显示类型的转换

​	属性值：*block  转换成块级元素，拥有块级元素的所有特点
​			*inline 转换 成行内元素，拥有行内元素的所有特点
​			*list-item 块级元素的一种特殊显示类型，为列表项
​			*inline-block 转换成行内块级元素
​			*none 隐藏元素，不占位置
（二）dispaly:inline-block;行内元素的一种特殊显示类型
​	特点：一行显示多个；可以设置宽高；
​	代表元素：img/input/textarea
​	存在问题：
​		1.设置成行内块，元素之间的换行会被解析成一个空格
​			解决办法：不换行；给父元素设置font-size为0
​		2.行内元素之间存在基线对齐的问题
​			解决办法：vertical-align;
（三）设置元素在父元素上居中
​	1、利用行内块级元素
​	垂直居中：
​		*将元素设置成行内块级元素，同时尺子也要设置成行内块，高度与父元素一致，宽度为0；
​		*将与元素及尺子都要设置vertical-align:middle;
​	水平居中：
​		*给父容器设置text-align:center;
若子元素与父元素都浮动了，父元素可以不设置宽度，父元素能被子元素撑开；

### 三、扩展知识

​	行内可置换元素(行内块级元素)：浏览器根据元素的标签和属性，来决定元素的具体显示内容-img[src]/input[type]/textarea[cols]+[rows]
​	行内不可置换元素（行内元素）

###### 2	隐藏元素的两种方式

1.display:none; 隐藏元素，不占位置
2.visibility:hidden;隐藏元素，占位置；
注：overflow:hidden;隐藏溢出容器的内容，不会隐藏容器

# 六	定位+锚点

### 一、定位position

（一）.静态定位static：
​	*元素的默认定位，不设置就是该定位；
​	*标准流中的定位；

（二）.相对定位relative：
​	*相对定位的元素都是相对于自己本身所在的位置进行定位移动；
​	*配合top,right,bottom,left属性使用，若是正值，则从自己的某条边往元素中间移动为正值。
​	*相对定位的元素不脱离标准流。（灵魂出窍）

（三）.绝对定位absolute
​	*绝对定位的元素是相对于有定位的最近的父级元素或者html进行定位的
​	*配合left,right,top,bottom使用，从包含块的某条边往包含块的中间移动为正值。
​	*脱离了标准流
​	扩展：包含块-定位参考框；一般子元素设置了绝对定位，父元素的定位一般都是相	对定位除非有特殊要求。
4.实现任意元素类型的元素在父容器中居中显示
​	

扩展：1.子元素绝对定位absolute,父元素相对定位relative（子绝父相）；
​		

2.给子元素{left:50%;top:50%;margin-left:-自己宽度的一半;margin-top:-自己高度的一半;}
​	

扩展：盒模型相关的属性设置百分比都是根据父元素的宽高作为基准
width,height,padding,border,margin,left,top,right,bottom

（四）.固定定位fixed
​	*固定定位的元素相对于浏览器的可视区域进行定位
​	*配合left,right,top,bottom使用，从浏览器可视区域的某条边往中间移动为正值
​	*固定定位的元素脱离了标准流
拓展：子代选择器（ie8+）>
例如ul>li表示获取ul的子元素li

### 二、层级z-index

​	*层级越高的元素在越上面
​	*默认情况下，定位的层级>标准流中的层级。浮动的层级>标准流中的层级（-1,0,1）
​	*只有设置了定位的元素才可以设置z-index
​	*层级为整数，可以为负数

### 三、锚链接

1.跳转到其他页面
2.跳转到当前页面某个部分（命名锚点）：给元素设置id名，给锚链接设置[href="#id名"]，当点击锚链接，就能跳转到id名所在的元素
3.跳转到其他页面某个部分（命名锚点）：给元素设置id名，给锚链接设置[href="路径#id名"]，当点击锚链接，就能跳转到id名所在的元素
4.不跳转
如果使用了a标签，但是不想要a标签跳转
​	*最常见的，不会跳转，但是会刷新页面a[href="#" ]
​	*onclick事件返回false; a[href="#" onclick="return false"]
​	*用href="javascript:void(0)"伪协议，不会跳转也不会刷新 a[href="javascript:void(0)"]
扩展：
​	*实现自适应两栏布局，某一栏确定宽度+浮动，另外一栏设置margin的值为上一栏的宽度，自己的宽度不设置
​	*实现自适应三栏布局，先写左右的元素设置宽度+浮动，最后才写中间的元素，设置margin

### 四、overflow

​	内容溢出容器时的处理方式
属性值：
​	visible默认可见
​	hidden隐藏溢出内容
​	scroll出现滚动条
​	auto自动判断溢出出现滚动条
overflow-x: 设置水平方向
overflow-y：设置垂直方向
**<u>当设置了某个方向的overflow不为visible,另外一个方向自动为auto</u>**

# 七	浏览器及兼容

### 一、浏览器及内核

IE, Safari, Firefox, Chrome , Opera
五大浏览器内核代表作品：
Trident: IE
Gecko:Mozilla Firefox
Webkit: Safari、Chrome
Presto:Opera
Blink:由Google和Opera Software开发的浏览器排版引擎，2013年4月发布。
CSS Bug:CSS样式在各浏览器中解析不一致的情况
CSS Hack：CSS中，Hack是指一种兼容CSS在不同浏览器中正确显示的技巧方法。有些人更喜欢使用patch(补丁)来描述这种行为。补丁
Filter：表示过滤器，Filter是一种用来过滤不同浏览器的Hack类型。

### 二、浏览器的兼容

1.图片有边框bug
​	a>img 在ie8及以下浏览器img都会出现边框
​	解决：在base.css设置img{border:0 none;}
2.图片间隙
​	盒子(例如div)>img, img与盒子底部会出现大约3px的间隙
​	解决办法：
​	（1）不换行，将父元素的font-size:0；
​	（2）转换成块级元素img{display:block;}；
3.ie6双倍浮向问题
​	当Ie6及更低版本浏览器在解析浮动元素时，会错误地把浮向边边界（margin）加倍显示。hack:给浮动元素添加声明：display:inline;
4.IE6、IE7默认高度问题
在IE6、IE7中，部分块元素拥有默认高度（在16px左右；）
解决方法：
（1）给元素添加声明：font-size:0；
（2）给元素添加声明：overflow:hidden；
5.表单元素行高不一致的问题
表单元素都是行内元素，会存在基线对齐的问题
解决办法：
（1）vertical-align:middle；
（2）浮动
6.表单元素样式不一致
浏览器对表单元素的样式解析不一致
解决办法：
（1）将input{border:0 none;online-style:none;}；
（2）在表单外部套一个块级元素，设置宽高边框，设置行高。同时input的宽度为父元素的100%；
（3）若还出现渲染效果不一致，设置统一的盒模型{box-sizing:border-box;}；
7.百分比bug
在IE6机以下版本，若元素浮动一行显示，存在50%+50%>100%的问题
解决办法：使用clear属性（属性值：nonr默认值、left、right、both）
8.鼠标指针cursor
cursor：hand 手型 ，IE浏览器支持
cursor：pointer 手型，IE6以上及高版本浏览器都支持。
属性值：auto默认；crosshair加号；text文本；wait等待；help帮助；progress过程；inherit继承；move移动；ne-resize向上或向右移动；pointer手形；
9.透明属性
会给整个盒子都有透明效果
（1）opacity取值为0-1，越大越不透明
（2）filter:alpha(opacity=值)
​	*值得取值为0-100，例如10代表上面的0.1
​	*IE8及以下支持
10.margin塌陷
若给父元素的第一个孩子设置margin-top，可能会被错误地渲染成父元素的margin-top。这个问题叫做margin塌陷
解决办法：
​	（1）子元素或者父元素浮动了；
​	（2）给父元素加overflow:hidden；
​	（3）给父元素加上边框；
​	（4）将该margin-top变为父元素的padding-top；
11.margin合并（层叠）
当两个块级元素垂直摆放时，当给第一个元素设置margin-bottom，给第二个元素设置margin-top，他们之间的margin不会叠加，而是取两者之间较大的值。

### 小图标布局技巧：

设置块、宽高背景、定位absolute（记得给它爸爸加relative）
宽高不一致就单独设置
背景的定位background-position也不一样，单独设置
小图标相对于父元素的位置也不一样，单独设置left、right、top、bottom

一、图片整合技术
	1.原理：将一组背景图片有规律的合并成一张背景图（精灵图，雪碧图），再利用background-position实现背景图片的定位。
	2.好处：减少页面的请求次数，从而提高页面的加载速度；合并后的图片体积减小，从而提高加载速度；
二、背景图
	1.h1：背景图
	2.小图标：背景图
	3.轮播图：都可以（建议用背景图）
	4.每天都要更新的图片：都可以（建议用图片）

# 八	自适应宽高

概念：元素的大小能够根据窗口或子元素自动调整，这就是自适应。
优点：可以适应在不同设备、不同窗口和不同分辨率下显示。

### 一、宽度自适应

概念：块级元素宽度设置成100%，或者不设置宽度，宽度都为父元素的一整行

### 二、高度自适应

概念：父元素高度不设置，或者设置成{height:auto;}可以由子元素撑开

###### （一）高度塌陷：

​	当子元素都浮动了，父元素的高度将没有办法被撑开
1	给父元素加overflow:hidden;缺点：造成该容器一部分布局内容丢失
2	给父元素添加最后一个子元素{height:0;clear:both;overflow:hidden;}缺点：产生大量的标签，影响页面性能
3	伪元素清除法（万能清除法）：给父元素添加类名clearfix

```
.clearfix:after{
     content:"";
     display:block;
     height:0;
     clear:both;
     overflow:hidden;
     visibility:hidden;
     *zoom:1;
 }
```

###### （二）内容为空

​	若子元素内容可能为空的情况下，父元素会出现高度为0的情况。
解决办法：设置最小高度min-height
​	兼容ie6办法1：在高版本浏览器，height为固定高度，但是在ie6，height代表最小高度。
​		*所以只能让ie6才识别到height属性，因此得使用过滤器
​		*_height 下划线属性过滤器，只有ie6才能识别
​	兼容ie6办法2：在高版本浏览器，!important代表最高权重，而在ie6没有这个概念，会解析成普通属性
​		*设置height:auto !important给高版本浏览器识别，再设置height:具体值，事项ie6时覆盖auto属性值

###### （三）自适应窗口高度

​	元素高度自适应窗口高度（移动端和PC端后台用的较多，平时较少使用）
*当元素设置{height:100%;}，即元素高度为父元素的高度
*设置窗口高度为100%，html,body{height:100%;}

给父元素添加类名clearfix
（2）若子元素内容可能为空的情况下，父元素会出现高度为0的情况。
​	解决办法：设置最小高度min-height
​		*当容器内容高度大于最小高度，按内容高度显示；当容器内容高度小于最小高度，按最小高度显示；
​	兼容ie6办法1：在高版本浏览器，height为固定高度，但是在ie6，height代表最小高度。
​		*所以只能让ie6才识别到height属性，因此得使用过滤器
​		*_height 下划线属性过滤器，只有ie6才能识别
​	兼容ie6办法2：在高版本浏览器，!important代表最高权重，而在ie6没有这个概念，会解析成普通属性
​		*设置height:auto !important给高版本浏览器识别，再设置height:具体值，事项ie6时覆盖auto属性值
2.元素高度自适应窗口高度（移动端和PC端后台用的较多，平时较少使用）
​	*当元素设置{height:100%;}，即元素高度为父元素的高度
​	*设置窗口高度为100%，html,body{height:100%;}

### 三、BFC

###### （一）概念：

块级格式化上下文，是一个独立的渲染区域，规定了内部的块如何布局，且不影响外部元素。

###### （二）布局规则

内部的块级元素会在垂直方向上一个接一个摆放
​属于同一个BFC的两个相邻块会发生margin重叠
bfc的区域不会与浮动块重叠(

###### （三）应用场景：

1	解决高度塌陷：通过给父元素添加最后一个子元素{height:0;clear:both;overflow:hidden;}
2	自适应两栏布局：左边固定宽度浮动+右overflow:hidden;左边固定宽度浮动+右margin-left
3	计算BFC的高度时，里面的浮动元素也参与计算（应用场景：给父元素加{overflow:hidden;}解决高度塌陷的问题）
4	BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素（应用场景：解决margin重叠问题：给其中一个元素设置overflow:hidden;将自己的样式全部给其子元素）

###### （四）触发元素成为bfc

1	html根元素
2	overflow不为visible，常用overflow:hidden;
3	浮动
4	脱离标准流的定位
5	display:inline-block; flex;

# 九	高级表单、表格

1.图片+背景图片
2.复习表单
​	form: action提交到的后台地址；method提交方式；name;
​	input:type类型;value给表单元素添加内容；name表单元素要提交必须要有名字，给同一组单选框或复选框起一样的名字；checked默认选中；disabled禁用；
​	select>option [value],[selected默认选中]
​	textarea[cols],[rows]

### 一、高级表单

1.表单字段集 fieldset
​	*作用：对文本及表单元素进行分组
​	*fieldset可以实现嵌套
​	*fieldset通过disabled属性禁用整个分组
2.字段集标题 legend
​	*legend必须为fieldset的第一个子元素
​	*[align="left/center/right/justify"]设置legend的位置，left为默认值
3.提示信息标签label
​	*作用：文字与表单元素关联起来，提供提示信息
​	*label[for]与表单元素的[id]要一致，才能与id名所在的元素关联
​	*也可以将文字与表单元素一起包裹:label>文字+input;
4.表单新类型
​	（1）[type="file"] 上传文件
​		*[multiple]上传多个文件
​	（2）[type="image"]图片提交按钮
​		*[src],[alt]

### 二、高级表格

（一）表格标签
1.caption表格标题
​	*最好作为table的第一个子元素
​	*文本默认在水平居中
2.th标题行的单元格
​		*文本默认加粗，且文本在单元格居中
3.行分组
​	*thead 表头（标题行）>tr>th
​	*tbody 表体（内容）>tr>td
​	*tfoot 表尾（总结）>tr>td
​	*注意：
​		*表格必须包含thead、tbody，若存在表尾，必须包含tfoot
​		*可以有多个tbody，但不建议
​		*书写次序：thead、tfoot、tbody，可以实现在数据请求完毕之前先加载thead、tfoot
4.列分组 colgroup
​	*[span]表示当前列分组占据的列数
（二）table表格的html属性
​	[rules]给表格添加分割线
​		*none默认没有分割线
​		*cols添加列分割线
​		*rows添加行分割线
​		*all添加行、列所有的分割线
​		*groups添加组分割线
（三）表格的CSS属性
​	1.border-spacing单元格间距
​		*给table添加的css属性，等同于cellspaing
​		*不能为负数
​	2.border-collapse 单元格边框合并
​		*属性值： separate默认分离；collapse合并；
​		*给table添加的css属性
​	3.empty-cells空单元格的边框处理
​		*给td添加的css属性
​		*属性值：show默认显示 ；hide 隐藏；
​	4.caption-side 标题所在的位置
​		*给caption添加的css属性
​		*属性值：top默认在上面 ；bottom下面；left左边；right右边；



# 十	HTML5新标签

### 一、html的新标签

1.header 头部，一般都是存放引导或导航信息。
	*通常会存在至少一个标题标签或者导航条
	*header与footer不要互相嵌套
	*也可以写在其他内容里面
2.hgroup对标题进行组合
	header>hgroup>h3+h4
3.nav 导航条
4.main 主要内容，只用在页面最外层。建议只使用一次
5.article 文章，独立的内容块；可以嵌套元素，内部元素对外部有隶属关系。
6.section 区块，章节，表示专题性的内容
7.aside 侧边栏，非正文的内容。例如广告、作者信息
8.footer 底部，一般包含版权信息、作者信息之类的。
9.figure对元素进行组合，一般用于文字图片、组合 ie9+
	figure>img+p{描述}
	figcaption对figure的内容进行描述
	figure>img+figcaption{描述}
10.time 语义化时间，表示时间或日期 ie9+
	[datetime]定义具体的时间，若time元素内没有具体时间，必须用属性设置具体时间。
11.details 细节[open内容默认是否可见]>summary对细节定义标题 ie/firefox/opera不支持
12.mark 突出重点显示的内容（增加了一个背景色） ie9+
13.progress 进度条   ie10+
	[max]最大值
	[value]当前值
	progress>span
14.meter 度量尺 ie不支持
	[min]最小值
	[max]最大值
	[value]当前值
	[high]较高的值
	[low]较低的值
	[optimum]较佳的值，若定义比high的值大，说明越大越好；若定义比low的值小，说明越小越好 
15.ruby定义需要被注释或音标的整体>rt注释或音标文本
16.datalist 拥有输入功能的下拉列表>option[value]   safari不支持 ie10+
	使用input[type="text" list="id名"]
	datalist[id="id名"]
17.output 输出
	form[oninput="jieguo.value=num1.value"]>input[name="num1"]+output[name="jieguo"]

### 二、表单新增类型

1.color拾色器
	input[type="color"]
2.email 电子邮箱
	input[type="email"]
	默认的验证功能
3.number
	input[type="number"]只能输入数字
	在移动端会自动弹出输入法的数字键盘
4.tel 电话号码
	input[type="tel"]移动端会弹出数字输入法
5.url网址
	默认的验证功能
6.search搜索
	input[type="search"]配合results="n"属性
7.range范围
	input[type="range"]
	[min最小值],[max最大值],[value当前值],[step每次移动的步数]
8.date,年月日
	 month, 年月
	week第几年的第几周
9.time时间（时分）
10.datetime-local 年月日时分

### 三、表单新增属性

1. [placeholder]占位符
2. [autofocus]自动聚焦
3. [multiple]文件上传多选
4. [required]必填项
5. [pattern]正则，有验证功能
6. [autocomplete]下次填写时自动补全
   ​	属性值：on自动补全，off关闭自动补全;可以给form,input添加ss

### 四、视频、音频

1.video视频
[src]引入视频
支持的后缀：ogg,mp4,webM
[autoplay]自动播放
[controls]添加控件
[width]
[height]
[poster]加载等待的画面图片
[loop]循环播放
2.audio 音频 与视频用法属性一样

# 十一	CSS3选择器

html:5声明文档类型为html5
html:4t声明文档类型为html4.01过渡版本
html:4s声明文档类型为html4.01严格版本
html:xt声明文档类型为xhtml1.0过渡版本
html:xs声明文档类型为xhtml1.0严格版本

### 一、选择器

（一）基本选择器
​	通配符，标签，类，id，群组 选择器
（二）层次（关系）选择器
1.后代选择器
E F:匹配到F元素，且F元素是E元素的后代
2.子代选择器
E>F:匹配到F元素，且F元素是E元素的子代
3.相邻兄弟选择器
E+F:匹配到F元素，且F元素是E元素后的第一个元素
4.兄弟选择器
E~F:匹配到F元素，且F元素是E元素后面的元素
（三）动态伪类选择器
:link 锚链接被点击前的样式
:visited锚链接被点击后的样式
:hover鼠标悬停在任意元素上，添加的样式
:actived 鼠标点击（激活）任意元素时，添加的样式
:focus 光标聚焦在表单元素上，添加的样式
（四）目标伪类选择器
E:target  获取到作为目标的E元素
（五）语言伪类选择器
q[lang="no"]会给标签内部的文本加上双引号
:lang(no){
​	quotes: "左符号""右符号";
}
（六）UI元素状态伪类选择器
:enabled给可用的表单元素添加样式
:disabled给不可用的表单元素添加样式
:checked给被选中的元素添加样式
（七）结构伪类选择器
1	E:first-child 父元素的第一个子元素，同时满足为E元素
2	E:last-child 父元素的最后一个子元素，同时满足为E元素
3	E:nth-child(n) n从1开始计数，满足为父元素的第n个子元素，同时为E元素
4	E:nth-last-child(n) n从1开始计数，满足为父元素的倒数第n个子元素，同时为E元素；
​	*2n 第偶数个孩子(even)
​	*2n-1 第奇数个孩子(odd)
​	*-n+a 满足为父元素的第1个到第a个孩子
5	E:first-of-type满足为父元素的第一个E类型的子元素
6	E:last-of-type满足为父元素的最后一个E类型的子元素
7	E:nth-of-type(n)满足为父元素的第n个E类型的子元素
8	E:nth-last-of-type(n)满足为父元素的倒数第n个E类型的子元素
9	E:empty 获取到内容为空（连空格都没有）的E元素
10	E:only-child 满足为父元素的唯一的一个孩子，且为E元素
11	E:only-of-type满足为父元素唯一的一个E元素类型的孩子
（八）否定伪类选择器
​	E :not(F) 在E元素的子元素中，除了F元素以外的所有
（九）属性选择器
1	E[attr] 拥有attr属性的E元素会被获取到
2	E[attr="val"] attr属性值为val的E元素会被获取到
3	E[attr*="val"] attr属性值包含val的E元素会被获取到
4	E[attr^="val"] attr属性值以val值开头的E元素会被获取到
5	E[attr$="val"] attr属性值以val结尾的E元素会被获取到
（十）伪类选择器
1	E::before 给E元素添加第一个子元素(行内)
2	E::after 给E元素添加最后一个子元素(行内)
3	E::first-letter 给E元素（块级）第一个文本添加样式
4	E::first-line 给E元素（块级）第一行文本添加样式
5	E::selection给选中的文本添加样式
​	*火狐不支持，加私有前缀 -moz-

### 二、文本属性 text-shadow

1	文本阴影text-shadow: x-offset y-offset blur color[,...可以省略];多个用逗号隔开
​	x-offset 水平偏移
​	y-offset 垂直偏移
​	blur 模糊区域
​	color阴影颜色
2	文本溢出的处理方式 text-overflow
​	*clip文本溢出直接被裁掉（默认）
​	*ellipsis 文本溢出用省略号代替
实现单行文本省略：配合overflow:hidden; width;white-space:nowrap;使用
实现多行文本省略：配合overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webket-line-clamp:2;-webkit-box-orient:vertical;使用
3	单词换行word-wrap
​	normal默认正常显示
​	break-word允许在单词内进行换行
4	单词换行的规则 word-break
​	normal按照默认的换行规则
​	break-all允许在单词内部换行
​	keep-all 只能在空格或连接符处换行
5	使用服务器端字体@font-face{}
​	*font-family给字体起名字
​	*src:url()引入字体路径
​	*font-family使用该字体
​	（2）字体图标
​		www.iconfont.com
​		好处：图片放大会失真，而文字不会；占内存小，从而提高加载速度

### 三、新增颜色模式

1	rgba(red0-255,green0-255,blue0-255,alpha不透明度0-1)
2	hsla(色调0-360，饱和度0-100%，lighter0-100%，alpha不透明度0-1)
3	transparent完全透明
​	利用transparet实现三角形(border)

### 四、边框属性

1	边框阴影box-shadow
​	box-shadow: x-offset y-offset blur spread color 外阴影/内阴影[,...可省略];
​	*x-offset 水平偏移，往右为正
​	*y-offset 垂直偏移，往下为正
​	*blur 模糊区域
​	*spread 扩展区域
​	*color
​	*默认为外阴影outset，内阴影inset
2	边框图片border-image
​	*boorder-image-source: url();引入边框图片，默认放在边框的四个角上
​	*border-image-slice边框图片切割。遵循上右下左原则，若缺省找反义词
​	*border-image-width 边框图片宽度，若没写，默认就是border宽度
​	*border-image-outset 边框图片向外延伸，不能为负数
​	*border-image-repeat 边框图片是否重复，stretch默认拉伸；repeat只重复；round重复完整图形
3	边框圆角border-radius
*将正方形做圆,border-radius:50%;
*border-垂直方位-水平方位-radius:水平半径 垂直半径;
水平方位：left right
垂直方位：top bottom
*border-radius: 水平半径（左上角开始顺时针）/垂直半径（左上角开始顺时针）
若某个方向的半径值缺省，找对角

### 五、伪类及伪元素

伪类模仿类的存在
伪元素模仿元素的存在
二、伪元素::
1、E::before 给E元素添加第一个子元素
​	*{content: "文字或图片路径"} 即使内容为空也不能省略content属性 content: "";
​	*默认情况下为行内元素
2、E::after 给E元素添加最后一个子元素
​	*{content: "文字或图片路径"} 即使内容为空也不能省略content属性 content: "";
​	*默认情况下为行内元素
3、E::first-letter给E元素的第一个字符添加样式
4、E::first-line给E元素的第一行字符添加样式

# 十二	背景属性、弹性盒

### 一、背景属性

1	background-size 规定背景图片的尺寸
*属性值：
​	数值（或百分比）：水平 	垂直；若只写了一个值，代表水平方向的值，垂直方向会等比拉伸。大多数情况下，背景图片会发生变形。若background-size:100% 100%;则图片不会变形（错的）
​	cover 背景图片完全覆盖容器，可能会出现背景图片丢失；背景图片等比缩放，不会出现变形的情况。
​	contain 容器完全包含背景图片，可能会出现留白
*应用：
​	利用{background-size:cover;background-position: center;}实现大图片在容器中的显示
2	background-origin背景图片的定位起始区域
​	padding-box 默认的定位区域为padding以内。
​	content-box 定位区域为content以内
​	border-box 定位区域为border以内
3	background-clip 背景图片的最终显示区域
​	padding-box 默认的显示区域为padding以内。
​	content-box 显示定位区域为content以内
​	border-box 显示区域为border以内
4	多张背景图片的使用

### 二、弹性盒布局

（一）概念原理：容器有能力让其子项目能够改变其宽度、高度（甚至顺序），以最佳的方式填充可用空间
​	*主轴：默认为水平方向
​	*侧轴：主轴的交叉轴，默认为垂直方向
（二）容器的属性
1	display:flex;将容器设置成弹性盒，里面的子项目会在主轴方向顺序排列（不会换行），侧轴方向的大小若缺省，会被默认拉伸
2	flex-direction 设置主轴方向
​	row 从左到右
​	row-reverse 从右到左
​	column 从上往下
​	column-reverse 从下往上
3	flex-wrap 设置主轴方向的换行
​	*nowrap 默认不换行，若主轴方向放不下，子项目进行缩放
​	*wrap 换行
4	justify-content   子项目在主轴方向的对齐方式
​	*flex-start 默认在主轴方向的开始位置顺序摆放
​	*flex-end在主轴方向的结束位置顺序摆放
​	*center 在主轴方向的中间位置顺序摆放
​	*space-between 将主轴方向的剩余空间平分在子项目之间
​	*space-around 将主轴方向的剩余空间环绕在子项目之间
5	align-items 子项目在侧轴方向（单行上）的对齐方式
​	*stretch若子项目在侧轴方向没有设置大小，则在当前行上默认拉伸
​	*flex-start若子项目在侧轴方向设置了大小，默认在侧轴方向（单行上）的开始位置顺序摆放
​	*flex-end在侧轴方向（单行上）的结束位置顺序摆放
​	*center在侧轴方向（单行上）的中间位置顺序摆放
​	*baseline 在侧轴方向（单行上）以基线对齐
6	align-content 多行子项目在侧轴方向的对齐方式
​	*flex-start 默认在侧轴方向的开始位置顺序摆放
​	*flex-end在侧轴方向的结束位置顺序摆放
​	*center 在侧轴方向的中间位置顺序摆放
​	*space-between 将侧轴方向的剩余空间平分在子项目之间
​	*space-around 将侧轴方向的剩余空间环绕在子项目之间
（三）子项目的属性
1	flex 设置子项目的比份，无单位。
2	align-self 单个子项目在侧轴方向（单行上）的对齐方式
​	属性值同align-items
3	order 规定子项目的排列顺序
​	*不定义order的子项目会排到前面
​	*order越小，排在越前面
弹性盒：移动端使用。
​	*老版本语法：需要时查阅
​	*flex 设置子项目在主轴方向的比份
​		*flex-grow定义子项目的扩展比率
​		*flex-shrink定义子项目的收缩比率
​		*flex-basis定义子项目的默认基准值
​		flex属性有两个快捷值：auto(1 1 auto)和none(0 0 auto)。
​			auto:当容器有多余空间，子项目平分剩余空间，放大。当容器空间不足，子项目平分缩小。
​			none:不管容器位置多还是少，子项目都不改变自己本身大小。

### 三、多列布局

1	概念：自动将内容按指定的列数排列，这种特性实现的效果和报纸、杂志类排版非常相似。
2	核心属性：
​	（1）column-count 列数，定义分列列数；最多列数，auto自适应（由列宽、容器宽和列间距决定），也可固定
​	（2）column-width 列宽，定义每列列宽； 类似于最小宽度min-width； auto 自适应；
​	（3）column-gap：定义列间距； 不能为负数；
​	（4）column-rule：定义列边框；与定义边框一样：2px dashed #ccc;
​	（5）column-span：定义多列布局中子元素的跨列效果；通常用于标题；
​		*none：不跨列；
​		*all：跨所有列
​	（6）break-inside: avoid;避免图片与文字断行
columns: column-width column-count;



# 十三	移动端

### （一）设置理想视口

1	布局视口viewpoint：比实际屏幕尺寸大很多，保证页面完整显示，但是是全局缩小后的页面。
2	理想视口viewpoint:meta标签实现meta:vp 移动端一定要记得加上这句代码
​	许多智能手机都使用了一个比实际屏幕尺寸大很多的虚拟可视区域viewpoint(布局视口)，主要目的就是让页面在智能手机端阅读时不会因为实际可视区域变形。所以你看到的页面还是普通样式，即一个全局缩小后的页面。为了让智能手机能根据媒体查询匹配对应样式，让页面在智能手机中正常显示，特意添加了一个meta标签。这个标签的主要作用就是让智能手机浏览页面时能进行优化，并且可以自定义界面可视区域的尺寸和缩放级别。
​	如何识别手机尺寸通过设置meta语句：

<meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
​	width                   可视区域的宽度；
​	height                  可视区域的高度；
​	device-width		设备屏幕分辨率的宽度值
​	initial-scale  		初始的缩放比例（0-10.0），取值为1时页面按实际尺寸显示，无任何缩放
​	minimum-scale 		允许用户缩放到的最小比例 
​	maximum-scale 		允许用户缩放到的最大比例
​	user-scalable 		设定用户是否可以缩放（yes/no）
​	可以写成：

<meta name="viewport" content="width=device-width,initial-scale=1.0" />

### （二）媒体查询

1	分界点：
超小屏幕xs  （移动设备）768px以下
小屏设备sm	768px-992px
中等屏幕md	992px-1200px
宽屏设备lg	1200px 以上
2	语法 @media screen and (条件){css语法}
​	*min-width 若当前页面宽度大于min-width，则样式生效。按照从小到大的书写顺序。
​	*max-width
​	*min-device-width
​	*响应式布局：利用媒体查询，在不同的设备、不同的分辨率或者不同的屏幕宽度，对同一套页面的细节进行调整
​		*局限性：一般都只能做简单的页面
​		*bootstrap框架 以响应式出名
一、弹性盒布局
二、等比缩放布局
移动端百分比布局：
1	meta:vp	设置理想视口
2	稿纸640px时，在iphone5开发；稿纸750px，在iphone6开发
3	拷贝三句代码，记得给meta：vp加id名;
4	弹性盒布局：
​	整个页面高度100%，设置成弹性盒，主轴向下
​	除了中间有滚动条的部分设置成flex:1，其他部分直接设置高度;
​	中间有滚动条部分设置overflow-y:auto;overflow-x:hidden;(只设置overflow-x:hidden也可以，另外方向自动auto;)

### （三）rem

​	em 以当前一个字符的大小为基准
​	rem 以html根部字体大小为基准 
移动端rem布局
1	meta:vp	设置理想视口
2	稿纸640px时，在iphone5开发；稿纸750px，在iphone6开发
3	拷贝三句代码，记得给meta：vp加id名;
4	弹性盒布局：
​	整个页面高度100%，设置成弹性盒，主轴向下
​	除了中间有滚动条的部分设置成flex:1，其他部分直接设置高度;
​	中间有滚动条部分设置overflow-y:auto;overflow-x:hidden;(只设置overflow-x:hidden也可以，另外方向自动auto;)
5	拷贝另外2句js代码，目的是让html字体大小根据设备改变。在哪个设备开发，就要用当前根部字体大小将px换算成rem
​	建议字体大小别转rem，用媒体查询做。

### （四）vw与vh

相对于视口的高度和宽度
1vw相当于视口宽度的1%，1vh相当于视口高度的1%

# 十四	渐变+运动

### 一、渐变（背景）

1.线性渐变 linear-gradient
(1)gradient(linear,起点，终点，颜色，[,颜色])
​	兼容问题
​	起点终点可以是数值，0 0代表左上角，100% 100%或者width 大小 height大小代表右下角
(2)gradient(linear,起点,终点,color-stop(颜色开始位置，颜色)[,颜色])
(3)linear-gradient( 方向||角度, `<stop'>`, `<stop'>` [, `<stop'>`]* )
​	* 第一个参数表示线性渐变的方向。
​	·to left：设置渐变为从右到左，相当于: 270deg;
​	·to right：设置渐变从左到右，相当于: 90deg;
​	·to top：设置渐变从下到上，相当于: 0deg;
​	·to bottom：设置渐变从上到下，相当于: 180deg。（默认值）
​	·也可以直接指定度数，如45deg
角度：
​	有前缀的兼容写法，角度跟象限角度一样
​	新版本（不加前缀）角度+老版本 = 90deg
2、radial-gradient 径向渐变
​	从一个中心点开始沿着四周产生渐变效果
radial-gradient([ [ at `<position>` ]? [ `<shape>` || `<size>` ]  , ?`<color-stop>`[ , `<color-stop>` ]+)
​	*shape：渐变的形状，ellipse椭圆形(默认)，circle表示圆形。
​	*size：渐变的大小，即渐变到哪里停止，它有四个值。 
​		closest-side：最近边； farthest-side：最远边；
​		closest-corner：最近角； farthest-corner：最远角（默认值）
​	*`<position>` 确定圆心的位置。
​		如果提供2个参数，第一个表示横坐标，第二个表示纵坐标；
​		如果只提供1个，第二值默认为50%，即center
​	*`<color>`：指定颜色。

### 二、过渡 transition

1.经过一定的时间， 从某个状态到另一个状态
2.分属性
​	(1)transition-property 过渡的属性（不可缺）
​	(2)transition-duration 过渡的时间（不可缺）
​	(3)transition-timing-function 过渡的形式
​		linear线性过渡
​		ease慢速进入慢速离开
​		ease-in慢速进入
​		ease-out慢速离开
​	(4)transition-delay 过渡的延时
3.总属性：
​	transition: 1 2 3 4;

### 三、变换transform

#### （一）2d变换

1.移动变换 translate
​	transform: translate(水平，垂直)
​	可以用百分比，代表自己宽高的百分比
​	transform: translateX()
​	transflorm:translateY()
2.缩放变换 scale(x,y)
​	x,y代表水平，垂直方向的缩放比例
​	缩放的基准点为元素中心
​	transform: scaleX(x)
​	transform: scaleY(y)
3.旋转rotate(角度)
​	transform: rotate(角度),角度以顺时针旋转,旋转的基准点在元素中心
4.扭曲变换 skew()
​	tranform:skew(x轴旋转的角度,y轴旋转的角度),扭曲变换的基准点在元素中间
​	transform: skewX(x轴旋转的角度)
​	transform: skewY(y轴旋转的角度)
注意：若存在多个变换，在书写属性值时，应用空格将多个变换隔开
5.改变元素变换的基准点 transform-origin

#### （二）3d变换

1.移动变换
​	transform:translate3d(x,y,z);
​	transform:translateZ(z);
2.旋转变换
​	transform:rotate3d(x,y,z,deg)
​		xyz取值为0或1,0代表不旋转，1代表旋转
​	transform:rotateX()
​	transform:rotateY()
​	transform:rotateZ()
左手定律：大拇指指向轴的正方向，手指弯曲的方向为旋转的正方向
3.skew()扭曲变换
4.transform-style规定变换的样式（需要设置在父元素上）
​	flat默认为平面
​	preserve-3d使被转换的子元素保留其3D转换
5.perspective设置观察的距离，景深（需要设置在父元素上）
6.perspective-origin设置观察的基准点（设置在父元素上）

### 四、动画animation

1.定义动画@keyframes
​	@keyframes 动画名{
​	节点{样式}
}
​	通过百分比将动画分成多个节点
​	最后通过animation将动画应用到指定元素上
2.animation用于设置动画属性
​	animation-name 动画名字
​	animation-duration 动画每次的播放时间
​	animation-timing-function 动画播放形式；linear ease ease-in ease-out；steps(n)相邻两个节点之间分成多少步，默认情况下每步都是用初始状态填充分配下来的时间段，steps(n)==>steps(n,end)默认; steps(n,start)用每一步的结束状态填充分配下来的时间
​	animation-delay动画延迟
​	animation-iteration-count 动画的播放次数；infinite无限次
​	animation-direction动画是否轮流反向播放； reverse方向播放 alternate交替播放 alternate-reverse 交替方向播放
​	animation-fill-mode动画完成模式；forwards保持最后一个状态