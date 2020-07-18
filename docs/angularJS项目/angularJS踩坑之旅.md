---
title: angularJS项目踩坑之旅
categories: angularJS项目
date: 2020-02-07 23:11:06
tags:
---

## 一、表格插件 smart-table

筛选下拉列表的模板:

```html
<div class="toolbar">
  <!--刷新按钮-->
  <a class="btn btn-primary pull-left" ng-click="ctrl.search()">
    <i class="fa fa-refresh" aria-hidden="true"></i>刷新
  </a>
  
  <!--条件过滤-->
  <div class="pull-left" style="line-height:34px;color:#446083;margin:0 10px 0 20px;">
    数据中心:
  </div>
  <div class="pull-left search-group">
    <ui-select style="width:200px;" ng-model="ctrl.selectedDataCenter"
               ng-change="ctrl.selectedDataCenterChange()">
      <ui-select-match placeholder="请选择数据中心">
        <span ng-bind="$select.selected.name"></span>
      </ui-select-match>
      <ui-select-choices style="cursor:pointer;"
                         repeat="item in (ctrl.dataCenterList | filter:{name:$select.search}) track by $index">
        <span ng-bind="item.name"></span>
      </ui-select-choices>
    </ui-select>
  </div>
  
  <!--条件过滤-->
  <div class="pull-left" style="line-height:34px;color:#446083;margin:0 10px 0 20px;">
    资源池:
  </div>
  <div class="pull-left search-group">
    <ui-select style="width:200px;" ng-model="ctrl.selectedPool" ng-change="ctrl.search()">
      <ui-select-match placeholder="请选择资源池">
        <span ng-bind="$select.selected.name"></span>
      </ui-select-match>
      <ui-select-choices style="cursor:pointer;"
                         repeat="item in (ctrl.poolList | filter:{name:$select.search}) track by $index">
        <span ng-bind="item.name"></span>
      </ui-select-choices>
    </ui-select>
  </div>
  
  <!--搜索-->
  <div class="pull-right search-group">
    <input class="search-input" type="text" ng-change="ctrl.searchInputChange()" ng-model="ctrl.searchKeywords" ng-keyup="ctrl.eventSearch($event)" placeholder="请输入名称或IP进行搜索" />
    <a class="btn btn-primary search" ng-click=ctrl.search()>
      <i class="fa fa-search" aria-hidden="true"></i>
    </a>
  </div>

</div>
```



controller 的代码

```js
//刷新表格
vm.searchObject = {};
function refreshDataTable() {
  vm.searchObject.timestamp = new Date().getTime();
}
vm.search = function () {
  refreshDataTable();
}
vm.eventSearch = function (e) {
  let keycode = window.event ? e.keyCode : e.which;
  if (keycode == 13) {
    vm.search();
  }
}

//定义列表数据为空数组
vm.tableDataList = [];

//请求函数
vm.getTableData = function (tableState) {
  if (!vm.selectedPool) { return };
  let poolId = vm.selectedPool ? vm.selectedPool.id : null;
  let searchValue = vm.searchKeywords ? vm.searchKeywords : null;
  CapacityHostService.getHostDataTable(tableState, poolId, searchValue).success( res=> {
    if (res.success) {
      vm.tableDataList = res.entity.list || [];
      //将数组对象按名称排序
      vm.tableDataList.sort(function (a, b) {
        return a.hostName.localeCompare(b.hostName)
      })
      //赋值总数
      vm.totalCount = res.entity.total;
      //赋值每次请求条数
      tableState.pagination.numberOfPages = res.entity.pages;
    } else {
      vm.tableDataList = [];
      vm.totalCount = 0;
      messageService.error("获取宿主机列表失败: " + res.message);
    }
  }).error(err => {
    vm.tableDataList = [];
    vm.totalCount = 0;
    console.log(err);
  })
}
```

## 二、路由守卫

```js
//页面跳转，执行操作
// 跳转后，停止循环请求
$scope.$on('$destroy', function () {
  clearInterval(vm.setInterval);
})
//或者
$rootScope.$on('$stateChangeStart', function (evt, next, current) {
  clearInterval(vm.setInterval);
})
```



## 三、弹窗

```js
var modalInstance = $uibModal.open({
  templateUrl: 'controllers/iaas/container/container-cicd/pipeline/create/new-pipeline/pop-info/jira-info.html',
  controller: 'PipelineModalController as ctrl',
  animation: true,
  //点击背景是否关闭弹窗
  backdrop: 'static',
  size: 'lg',
  resolve: {
    load: ['$ocLazyLoad', function ($ocLazyLoad) {
      return $ocLazyLoad.load([
        'controllers/iaas/container/container-cicd/pipeline/create/new-pipeline/pop-info/modal.controller.js',
      ])
    }]
  }
})
```

