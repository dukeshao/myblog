---
title: babel是什么
date: 2015-10-02 23:18:33
tags: 
- Javascript
- babel
categories: 
- B_Javascript
---

## 一、概念及用途

JavaScript在不断的发展，各种新的标准和提案层出不穷，但是由于浏览器的多样性，导致可能几年之内都无法广泛普及，babel可以让你提前使用这些语言特性，他是一种用途很多的javascript编译器，他把最新版的javascript编译成当下可以执行的版本，简言之，利用babel就可以让我们在当前的项目中随意的使用这些新语法。就是把各种javascript千奇百怪的语言统统专为浏览器可以认识的语言。

利用一系列的plugin来管理编译案列，通过不同的plugin，他不仅可以编译es6的代码，还可以编译React JSX语法或者别的语法，甚至可以使用还在提案阶段的es7的一些特性，这就足以看出她的可扩展性。

## 二、使用

### 1.ES6 => ES5

```bash
#新建项目:
npm init 

#安装babel-cli:
npm i babel-cli --save-dev
```

```js
//新建一个文件index.js
let numbers = [1,2,3];
let dou = numbers.map((number)=>number*2);
console.log(dou);
//这是es6最新的语法，map遍历数组并输出
//然后用babel来编译这段代码，不编译，直接运行，可能会报错，编译成标准的js语言compiled.js
```

```bash
babel index.js -o compiled.js
```

项目中自动生成compiled.js

打开compiled.js 文件，发现并没有起作用，相当于复制过来了，其实我们在在用babel的时候是需要配置文件泪完成编译的，

新建配置.babelrc文件

```
{
    "plugins":[ ],
    "presets":[ ]
}
```

下面来一个预设，它可以把es6的代码编译为es5

```bash
npm i babel-preset-es2015 --save-dev
#安装完后把这插件配置到.babelrc文件
```

```
{
    "plugins":[ ],
    "presets":["es2015"]
}
```

再次运行编译

打开compiled.js文件

变了

```js
var numbers = [1, 2, 3];
var dou = numbers.map(function (number) {
  return number * 2;
});
console.log(dou);
```



### 2.ES7 => ES5

接下来在编译一段es7的代码，es7编译为es5

我们需要一个插件来完成

```bash
npm i babel-plugin-transform-object-rest-spread --save-dev
```

然后把这个插件配置到.babelrc文件中去

```
{
    "plugins":["transform-object-rest-spread"],
    "presets":["es2015"]
}
```

```js
let  mike = {name:'mike',age:40};
mike={...mike,sex:'男'};
console.log(mike);
```

然后运行编译命令

打开compiled.js

```js
'use strict';


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };


var mike = { name: 'mike', age: 40 };
mike = _extends({}, mike, { sex: '男' });
console.log(mike);
```

这个插件其实就是添加了一个_extends方法来完成这个功能