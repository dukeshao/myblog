---
title: 10_泛型拯救你的any
date: 2019-10-27 14:55:01
categories: 
- C_Typescript
tags:
---

## 简单使用

概念：泛型(Generics)是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性

`<T>`符号定义了一个泛型变量，T 在这次函数定义中就代表某一种类型，他可以是基础类型，也可以是联合类型等高级类型，定义了泛型变量之后，你在函数中任何需要指定类型的地方使用 T 都代表这一种类型

```tsx
const getArray = <T>(value:T,times:number=5):T[]{
    return new Array(times).fill(value);
}
//fill 用来初始化数组: [4,5,6].fill(1[,2,3])=>[1,1,1]/[4,5,1]
getArray<number[]>([1,2],3).forEach(item=>{
    console.log(item.length);//2,2,2
})
getArray<number>(2,3).forEach(item=>{
    console.log(item.length);// 类型"number"上不存在属性"length"
})
```

## 泛型变量

当我们使用泛型的时候，必须把这个数据当做任意类型来处理，这就意味着不是所有类型都能做的操作不能做，不是所有类型都能调用的方法不能调用。

```tsx
const getLength = <T>(param: T): number => {
  return param.length; // error 类型“T”上不存在属性“length”
};
```

当我们获取一个类型为泛型的变量 param 的 length 属性值时，如果 param 的类型为数组或字符串类型是没问题的，他们有 length 属性，但是如果传入的param 是数值 number 类型，就会提示错误信息`类型"T"上不存在属性"length"`

## 泛型函数类型

我们可以定义一个泛型函数类型，也可以使用接口的形式来定义泛型函数类型，还可以把接口中泛型变量提升到接口最外层，这样接口中所有属性和方法都能使用这个泛型变量了。

```tsx
//1.简单定义
const getArray:<T>(arg:T,times:number)=>T[]=(arg,times)=>{
    return new Array(times).fill(arg);
}
```

```tsx
//2.使用类型别名
type GetArray=<T>(arg:T,times:number)=>T[];
const getArray:GetArray=<T>(arg:T,times:number):T[]=>{
    return new Array(times).fill(arg);
}
```

```tsx
//3.使用接口
interface GetArray{
    <T>(arg:T,times:number):T[];
}
const getArray:GetArray=<T>(arg:T,times:number):T[]=>{
    return new Array(times).fill(arg);
}
```

```tsx
//4.接口中泛型变量提升到接口最外层
interface GetArray<T>{
    (arg:T,times:number):T[];
}
const getArray:GetArray<number>=(arg,times)=>{
	return new Array(times).fill(arg);
}
console.log(getArray(3,4));//[3,3,3,3]
console.log(getArray("3",4));//error 不能将类型""3""的参数赋给类型"number"的参数
```

## 泛型约束

当我们使用了泛型时，就意味着这个类型是任意类型，但是大多数情况下，我们的逻辑是对特定类型处理的。

泛型约束：就是使用一个类型和`extends`对泛型进行约束，泛型使用 extends继承接口的约束能力。

```tsx
interface ValueWithLength{
    length:number;
}
const getLength:ValueWithLength=(arg)=>{
    console.log(arg.length);
}
```

## 泛型约束中使用类型参数

需求：

```tsx
const getProps=(obj,propName)=>{
    return obj[propName];
}
const obj={a:"aa",b:"bb"};
getProps(obj,"c");//undefined
```

 当我们访问这个对象的"c"属性时，这个属性是没有的，这里我们需要用到索引类型`keyof`结合泛型来实现对这个问题的检查。

```tsx
const getProp=<T,K extends keyof T>(obj:T,propName:K)=>{
              return obj[propName];
          }
const obj={a:"aa",b:"bb"}
getProp(obj,"c");//类型""c""的参数不能赋给类型" "a" | "b" "的参数
```


