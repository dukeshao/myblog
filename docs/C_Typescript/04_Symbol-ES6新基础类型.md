---
title: 04_Symbol_ES6新基础类型
date: 2019-10-27 14:51:50
categories: 
- C_Typescript
tags:
---

## Symbol 概述

symbol 前面不能加 `new`关键字，直接调用即可创建一个独一无二的 symbol 类型的值

```js
const s = Symbol();
typeof s;	//'symbol'

const s1 = Symbol("duke");
const s2 = Symbol("duke");
console.log(s1 === s2); // false
console.log(s1.toString()); // 'Symbol(duke)'
console.log(Boolean(s1)); // true
console.log(!s1); // false
```

## 作为属性名

在 ES6中，对象的属性名支持表达式，所以可以使用一个变量作为属性名，但是表达式必须放到方括号内

```js
let prop = "name";
const obj = {
	[prop]:"Duke"
}
console.log(obj.name);	//'Duke'

let name = Symbol();
let obj1={
    [name]:"duke"
}
console.log(obj1);	//{Symbol():'duke'}
console.log(obj[name]); // 'duke'
console.log(obj.name); // undefined
```

## 属性名的遍历

使用 Symbol 类型值作为属性名，这个属性不会被`for…in`遍历到，也不会被`Object.keys()`、`Object.getOwnPropertyNames()`、`JSON.stringify()`获取到

解决方案：

1.使用`Object.getOwnPropertySymbols()`方法获取对象的所有 symbol 类型的属性名

2.用 ES6新提供的 Reflect 对象的静态方法`Reflect.ownKeys()`，返回所有类型的属性名，所以 Symbol 类型的也会返回

## Symbol 的2个静态方法

1.Symbol.for()

使用 Symbol.for()方法传入字符串，会先检查有没有使用该字符串调用 Symbol.for 方法创建的 symbol 值，如果有，返回该只，如果没有，则使用该字符串新创建一个，使用该方法创建 symbol 值后会在全局范围进行注册。

注意：这个注册的范围包括当前页面和页面中包含的 iframe，以及 service sorker

```js
const s1 = Symbol.for("duke");
const s2 = Symbol.for("duke");
s1===s2;	//true
```

2.Symbol.keyFor()

该方法传入一个 symbol 值，返回该值在全局注册的键名

```js
const s = Symbol.for("duke");
console.log(Symbol.keyFor(s));	//"duke"
```

## 11个内置 symbol 值

ES6提供了11个内置的 Symbol 值，指向 JS 内部使用的属性和方法。你可以把 Symbol.xxx 看做一个 symbol 值

### 1. Symbol.hasInstance

对象 Symbol.hasInstance 指向一个内部方法，当你给一个对象设置以 Symbol.hasInstance 为属性名的方法后，当其他对象使用 instanceof 判断是否为这个对象的实例时，会调用你定义的这个方法，参数是其他的这个对象

```js
const obj={
    [Symbol.hasInstance](otherObj){
        console.log(otherObj)
    }
}
console.log({a:"a"} instanceof obj);
//{a:"a"}
//false
```

### 2. Symbol.isConcatSpreadable

当一个数组的 Symbol.isConcatSpreadable 设为 true 时，这个数组在数组的 concat 方法中不会被扁平化

```js
 let arr=[1,2]
 console.log([].concat(arr,[3,4]))；	//[1,2,3,4] length=4
 
 let brr=["a","b"]
 console.log(brr[Symbol.isConcatSpreadable])	//undefined
 brr[Symbol.isConcatSpreadable]=false
 console.log(brr[Symbol.isConcatSpreadable])	//undefined
 console.log([].concat(brr,[3,4]));
 //[["a","b",[Symbole.isConcatSpreadable]:false],3,4]
```

### 3. Symbol.species

```js
class C extends Array {
  getName() {
    return "duke";
  }
}
const c = new C(1, 2, 3);
const a = c.map(item => item + 1);
console.log(a); // [2, 3, 4]
console.log(a instanceof C); // true
console.log(a instanceof Array); // true
console.log(a.getName()); // "duke"
```

如果我们想只让衍生的数组是 Array 的实例，就需要用 Symbol.species

```js
class C extends Array{
    static get [Symbol.species](){
        return Array;
    }
    getName(){
        return "duke";
    }
}
const c = new C(1,2,3)
const a = c.map(item=>item+1)
console.log(a);	//[2,3,4]
console.log(a instanceof C);	//false
console.log(a instanceof Array);	//true
console.log(a.getName());	//error a.getName is not a function
```

就是给类 C 定义一个静态 get 存取器方法，方法名为 Symbol.species，然后在这个方法中返回要构造衍生数组的构造函数。所以最后我们看到，`a instanceof C`为 false，也就是 a 不再是 C 的实例，也无法继承自 C 的方法

### 4. Symbol.match/replace/search/split

这个 Symbol.match 值指向一个内部方法，当在字符串 str 上调用 match 方法时，会调用这个方法

```js
let obj={
    [Symbol.match](string){
        return string.length;
    }
}
console.log("abcde".match(obj));	//5
```

相同的还有 Symbol.replace/search/split，使用方法和 Symbol.match 是一样的

### 8. Symbol.iterator

数组的 Symbol.iterator 属性指向该数组的默认遍历器方法

```js
const arr = [1,2,3]
const iterator = arr[Symbol.iterator]();
console.log(iterator);	//Array Iterator {}
iterator.next();	//{value:1,done:false}
iterator.next();	//{value:2,done:false}
iterator.next();	//{value:3,done:false}
iterator.next();	//{value:undefined,done:true}
```

### 9. Symbol.toPrimitive

对象的这个属性指向一个方法，当这个对象被转为原始类型值时会调用这个方法，这个方法有一个参数，是这个对象被转为的类型

```js
let obj = {
    [Symbol.toPrimitive](type){
        console.log(type)
    }
}
//const b = obj++;	//number
const a = `abc${obj}`;	//string
```

### 10. Symbol.toStringTag

Symbol.toStringTag 和 Symbol.toPrimitive 相似，对象的这个属性的值可以是一个字符串，也可以是一个存取器 get 方法，当在对象上调用 toString 方法时调用这个方法，返回值将作为"[object xxx]"中 xxx 这个值

```js
let obj={
    [Symbol.toStringTag]:"duke"
}
obj.toString();		//"[object duke]"

let obj2={
    get [Symbol.toStringTag](){
        return "shao"
    }
}
obj2.toString();	//"[object shao]"
```

### 11. Symbol.unscopables

这个值和 with 命令有关，我们先来看下 with 怎么使用

```js
const obj={
    a:"a",
    b:"b"
}
with (obj){
    console.log(a);	//"a"
    console.log(b);	//"b"
}
//如果是在 TS 开发环境中，这段代码可能 with 会报错：不支持"with"语句，这是应为在严格模式下，不允许使用 with
```

可以看到，使用 with 传入一个对象后，在代码块中访问对象的属性就不需要写对象了，直接可以用属性。对象的 Symbol.unscopables 属性指向一个对象，该对象包含了当使用 with 关键字时，哪些属性被 with 环境过滤掉

```js
console.log(Array.prototype[Symbol.unscopables]);
/*
{
    copyWithin: true
    entries: true
    fill: true
    find: true
    findIndex: true
    includes: true
    keys: true
    values: true
}
*/
```

## 在 TS 中使用 symbol 类型

在 TS 中使用 symbol 类型值，很简单，就是制定一个值的类型为 symbol 类型

```tsx
let sym:symbol = Symbol();
```

unique symbol：

1.TS 在2.7版本新增了 unique symbol 这种类型，它是 symbol 的子类型

2.只能由 Symbol()或 Symbol.for()创建，或者通过指定类型来指定一个值是这种类型

3.这种类型的值仅可用于常量的定义和用于属性名。

4.定义 unique symbol 类型的值，必须用 const 不能用 let

```js
const key1:unique symbol = Symbol();
let key2:symbol = Symbol();
const obj = {
    [key1]:"value1",
    [key2]:"value2"
}
console.log(obj[key1]);
console.log(obj[key2]);	//error 类型"symbol"不能作为索引类型使用
```



