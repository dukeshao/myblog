## 一、angularJS 内置 filter

## 1.currency:

格式化一个数字成为一种货币。当没有提供任何货币符号时，使用当前区域的默认符号。

```js
HTML：{{ currency_expression | currency:symbol:fractionSize}}

JS：$filter(“currency”)(amount,symbol,fractionSize);

amount：数值，过滤的值。

symbol：字符串，要显示的货币符号或标识符。

fractionSize：数值，整数的小数位数，默认为当前的最大位数。
```

## 2.number:

格式化数字成为文本

示例：number

```html
<!-- 保留几位小数 -->
<span>{{volume.usedCapacityMb/1024 | number:0 || "0"}}G</span>

HTML：{{number_expression | number:fractionSize}}

JS：$filter(“number”)(number,fractionSize);

number：转换的数值。

fractionSize：数值，整数的小数位数，默认为当前的最大位数。在默认的区域设置的情况下这个数值是3。
```

## 3.filter:

从数组中选择一个子集,并将其返回为一个新数组

```js
HTML：{{filter_expression | filter:expression:comparator}}

JS：$filter(“filter”)(array,expression,comparator);

array：被过滤的数组。

expression：字符串/对象/函数，用于从数组中选择数据的判断表达式。使用$可以匹配任何字段。

comparator：函数/Boolean/undefined，用于确定预期的值（从filter表达式返回）和实际的值（数组中的对象）进行比较，应视为匹配。function(actual,expected);
```



## 4.date：

基于要求的格式格式化日期为字符串

示例：date

```html
<!-- 时间格式化 -->
<td>{{row.creationTimestamp | date:'yyyy-MM-dd HH:mm:ss' }}</td>

HTML：{{date_expression | date:format:timezone}}

JS：$filter(“date”)(date,format,timezone);

date：格式化为日期的日期对象。如果没有指定输入的时区字符串，时间则是当地时间。

format：格式规则/格式。

timezone：时区。
```



## 5.json：

允许你将一个javascript对象转化为JSON字符串

```js
HTML：{{json_expression | json:spacing}}

JS：$filter(“json”)(object,spacing);

object：过滤的对象。

spacing：每个缩进的空格数，默认为2。
```



## 6.lowercase：

转换字符串成为小写

```js
HTML：{{lowercase_expression | lowercase}}

JS：$filter(“lowercase”)(input);

Input：过滤的字符串。
```

## 7.uppercase：

转换字符串成为大写

```js
HTML：{{uppercase_expression |uppercase}}

JS：$filter(“uppercase”)(input);

Input：过滤的字符串。
```



## 8.limitTo：

将数组/字符串限定为一个指定的元素/字符数。

```js
HTML：{{limitTo_expression | limitTo:limit:begin}}

JS：$filter(“limitTo”)(input,limit,begin);

input：限制的数组，字符串，数字。

limit：限制的长度。

begin：限制长度开始的位置（根据索引）。
```



## 9.orderBy:

通过给定的表达式指定数组，它是按字母顺序排列的字符串和数值。

```js
HTML：{{orderBy_expression | orderBy:expression:reverse}}

JS：$filter(“orderBy”)(array,expression,reverse);

array：排序的数组。

expression：字符串/函数/数组，用来确定元素顺序的表达式。

reverse：boolean，颠倒数组的顺序。默认为false。
```

示例：orderBy

```html
<!-- 排序 -->
<tr ng-repeat="PrivilegesList in (ctrl.PrivilegesLists  | orderBy:'category')">
    <td>{{(ctrl.categoryList | filter:{name:PrivilegesList.category}: true)[0].displayName}}</td>
    <td>{{PrivilegesList.displayName}}</td>
    <td>{{PrivilegesList.description}}</td>
</tr>
```



```html
<tr ng-repeat="file in ctrl.filesList | orderBy:'type':true">
    <td>
        <i ng-if="file.type=='tree'" data-hidden="true" class="fa fa-folder fa-fw"></i>
        <i ng-if="file.type=='blob'" data-hidden="true"
           class="fa fa-file-text-o fa-fw"></i>
        <a id="fileName" ng-click="ctrl.openFile(file)"> {{file.name}}</a>
    </td>
</tr>
```



```html
<tr ng-repeat="pipeline in ctrl.pipelineList | orderBy:ctrl.sortKey:ctrl.reverse"></tr>
```

示例3：hignlight

```html
<!--  -->
<ui-select multiple ng-model="ctrl.selectedpools" name="pools" theme="bootstrap" require>
    <ui-select-match placeholder="选择资源池">
        <span ng-bind="$item.name"></span>
    </ui-select-match>
    <ui-select-choices repeat="item.id as item in ctrl.poolList | filter:$select.search track by $index">
        <span>{{item.name | highlight:$select.search}}</span>
    </ui-select-choices>
</ui-select>
```

## 二、用法介绍

## 1.在 html 表达式中使用

filter可以用管道符 | 添加到表达式:{{expression | filter}}

也可以多个filter连用，上一个filter的输出作为下一个filter的输入：

{{expression | filter1 | filter2 |……}}

## 2.在 html 指令中使用

可使用参数：例如: <li ng-repeat=“x in names | orderBy:’country’”>或<li ng-repeat=“x in names | filter : ‘i’>

## 3.在 JS 中使用

\$scope.formatDate = $filter('date')(today, 'yyyy-MM-dd');

```js
$scope.formatDate = $filter('date')(today, 'yyyy-MM-dd');
'接收的变量' = $filter('过滤')
```

## 三、自定义过滤器

