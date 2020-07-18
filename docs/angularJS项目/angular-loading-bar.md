### 一、需求

在后台管理系统项目中做了一个可视化大屏的页面，因为项目在全局中做了 http 拦截的 loading 效果，即使用的 angular-loading-bar 做 http 的响应效果，在大屏页面使用了比较多的轮询以更新数据，这样非常不好看，所以，需要关闭 loading 效果。

### 二、开发环境

angularJS@1.4.14，angular-loading-bar: "^0.9.0"，插件的 JS 和 CSS 文件是直接链接到 index.html的。

当然，如果你使用的 ES-Module 开发环境，也可以使用 bower 或者 npm 安装。

### 三、解决思路:

1.通过配置，使特定的路由页面下的 http 响应动画失效 - - 失败(项目首次加载时配置信息生效,无法获取动态路由信息)

2.通过配置，使特定的 http 响应动画失效 - - 成功

###  四、只关闭原始 spinner

Angular-loading-bar 自带 progress 和 spinner 效果:

```js
//注入插件
angular.module('app', ['angular-loading-bar'])
//配置插件
angular.module('app')
  .config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;//关闭自带的 spinner
  }]);
```

###   五、同时关闭原始 progress 和 spinner

在 http 请求中配置ignoreLoadingBar即可使插件原始的 progress 和 spinner 失效:

```js
getDataList: function (params) {
    return $http({
        method: "GET",
        url: httpConfig + "/list",
        params: {
            pageNum: params.pageNum,
            pageSize: params.pageSize,
        },
        ignoreLoadingBar: true
    })
}
```

### 六、关闭自定义spinner

项目中的 spinner 是自定义用以下模板去做的

```html
<div class="spinner">
    <i></i>
</div>
```



在可视化大屏的 controller 中使自定义spinner失效:

```js
angular.module('bigVisualScreen').controller('bigVisualScreenController', ['$scope', '$state', function ($scope, $state) {
    $(".spinner").addClass("fate-spinner").removeClass("spinner");
    // 页面销毁,重置样式 , 清除定时器
    $scope.$on('$destroy', function () {
        $(".fate-spinner").addClass("spinner").removeClass("fate-spinner");
    })
}])
```



