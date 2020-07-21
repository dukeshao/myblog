---
title: angular-tree
date: 2019-10-27 14:49:31
categories: 
- D_AngularJS
tags:
---



[文档地址](http://demo.16css.com/menu/1196/demo.html#file-style)

## 一、使用图标

<img src="/images/angular-tree-img/file_style_img.png" alt="file_style_img" style="zoom:50%;" />

```html
<!-- Note that the tree does not set the background color. We inject it from the wrapper div. -->
<div style="background-color: #555;">
  <treecontrol class="tree-dark" tree-model="treedata" on-selection="showSelected(node)">
    <span ng-switch="" on="node.type">
      <span ng-switch-when="folder" class="glyphicon glyphicon-folder-open" aria-hidden="true"></span>
      <span ng-switch-when="pic" class="glyphicon glyphicon-picture" aria-hidden="true"></span>
      <span ng-switch-when="doc" class="glyphicon glyphicon-file" aria-hidden="true"></span>
      <span ng-switch-when="file" class="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
      <span ng-switch-when="movie" class="glyphicon glyphicon-film" aria-hidden="true"></span>
      <span ng-switch-when="email" class="glyphicon glyphicon-envelope" aria-hidden="true"></span>
      <span ng-switch-when="home" class="glyphicon glyphicon-home" aria-hidden="true"></span>
      <span ng-switch-when="trash" class="glyphicon glyphicon-trash" aria-hidden="true"></span>
    </span> label: {{node.label}}
  </treecontrol>
</div>
```



```js
function FileStyle($scope) {
  $scope.treedata=[
    {label: "Documents", type: "folder", children: [
      {label: "a picture", type: "pic"},
      {label: "another picture", type: "pic"},
      {label: "a doc", type: "doc"},
      {label: "a file", type: "file"},
      {label: "a movie", type: "movie"}
    ]},
    {label: "My Computer", type: "folder", children: [
      {label: "email", type: "email"},
      {label: "home", type: "home"}
    ]},
    {label: "trash", type: "trash"}

  ];
  $scope.showSelected = function(sel) {
    $scope.selectedNode = sel;
  };
}
```



