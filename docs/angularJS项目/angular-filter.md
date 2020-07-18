## 定义一个 filter

```js
// 过滤对象数组，仅限字符串数据
'use strict';

angular.module('app').filter('objectFilter', function () {
    //input 对象数组,key 传入的键,value 传入的键值
    return function (input, key, value) {
        if(value==''){
            return input;
        }else{
            var res = [];
            angular.forEach(input, function(data, index){
                if(data[key]&&(typeof data[key]=='string')){
                    if(data[key].toLowerCase().indexOf(value.toLowerCase()) != -1){
                        res.push(data);
                    }
                }else if(data[key] &&(typeof data[key]=='object')){
                    var arr;
                    for(arr in data[key]){
                        if (arr.toLowerCase().indexOf(value.toLowerCase())!=-1 || data[key][arr].toLowerCase().indexOf(value.toLowerCase())!=-1){
                            res.push(data);
                            break;
                        }
                    }
                }
            });
            return res;
        }
    };
});

```



## 使用 filter