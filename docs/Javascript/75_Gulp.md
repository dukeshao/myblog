---
title: Gulp
date: 2015-10-08 23:18:33
tags: 
- Javascript
- gulp
categories: 
- B_Javascript
---

# gulp的安装及运行

gulp是一种比较流行的自动化工具 ，可以自动化完成我们开发过程中大量的重复工作。如：

> 编译：
> 	less->css
> 	sass->css
> 	coffeescript->js
> 	es6->es5(兼容)
> 合并: css, js
> 压缩 ：css, js, html
> 优化：图片优化

- 官网：<http://gulpjs.com/> 
- 中文网：<http://www.gulpjs.com.cn/> 

## 全局安装gulp

```
npm install --global gulp    //全局安装gulp目的是为了通过它执行gulp任务
```

## 本地安装gulp

作为项目的开发依赖（devDependencies）安装：

```
npm install gulp //不会自动生成在package.json
npm install --save gulp
npm install --save-dev gulp //本地安装gulp是为了调用gulp插件的功能
```

- –save-dev 保存配置信息至 package.json 的 devDependencies 节点
- 这步操作前先新建package.json文件（npm init）
- 这步完成后就可以安装各种gulp插件了

## 安装gulp插件

大部分插件都可以在`http://www.npmjs.com`找到，任何插件的使用都要经历以下三步：

> 安装插件npm install  gulp-htmlmin

PS：可一次性安装多个插件，插件间用空格隔开

## 创建gulpfile.js文件

- ！！！项目根目录下 创建
- gulp项目的配置文件，内容如下：

```
var gulp = require('gulp');
gulp.task('任务名', function() {
  // 将你的默认的任务代码放在这
});
```

## gulp运行任务命令

在命令行执行以下命名，如果不写任务名称，则自动运行default任务（如果有）

``` js
gulp <任务名称>
```

## gulp工作流程

1. 选通过gulp.src(globs) 方法获取到想要处理的文件，并返回文件流
2. 然后文件流通过 pipe 方法导入到 gulp 的插件中
3. 经过插件处理后的文件流，再通过pipe方法导入到 gulp.dest() 方法中
4. 最后通过gulp.dest() 方法把流中的内容写入到文件中

> PS：文件流=>文件在内存中的状态

   5.监听文件修改，并执行相应任务gulp.watch(glob,[‘任务名’])

## globs语法

globs需要处理的源文件匹配符路径，语法如下

- 匹配单个文件：
  `gulp.src('src/js/index.js')`

- 匹配多个文件：
  `gulp.src(['src/js/index.js','src/js/detail.js']) //多个文件以数组形式传入`

- 匹配所有文件
  `gulp.src('src/js/*.js')`

- 匹配符`!`：排除文件，
  
```
  gulp.src(["./src/sass/**/*.scss","!./src/sass/var.scss"])
```

`*`：匹配所有文件，
  `**`：匹配0个或多个子文件夹，
  `{}`：匹配多个属性

- 不受匹配控制: 在文件名前面加下划线`_`

# gulp常用插件

> html压缩：gulp-htmlmin
>
> css压缩：gulp-clean-css
>
> js压缩：gulp-uglify
>
> 合并文件：gulp-concat
>
> 文件重命名：gulp-rename
>
> 编译Sass: gulp-sass
>
> 编译 Less：gulp-less

## 编译scss为css

```js
//1.安装gulp-sass插件
//2.gulpfile.js:
//(1)引包：require()：返回对象或者函数
let gulp = require('gulp');//得到对象
let sass = require('gulp-sass');//得到函数
//(2)创建任务
gulp.task('compileSass',function(){
	// （3）执行gulp工作流程
	gulp.src('./src/sass/*.scss') // 返回文件流（液体，文件在内存中的状态）
	.pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
	.pipe(gulp.dest('./src/css/'))
});
	
/*outputStyle参数（gulp-sass）：
    nested(默认）
    expanded: 展开
    compact: 单行
    compressed: 压缩
on('error', sass.logError)：忽略错误，继续编译*/

//监听scss文件，自动编译
gulp.task('jtSass',function(){
	gulp.watch('./src/sass/*.scss',['compileSass'])
})
```



## js压缩及合并、重命名

	// js压缩
	let uglify = require('gulp-uglify');
	let pump = require('pump');
	let concat = require('gulp-concat');
	let rename = require('gulp-rename');
	gulp.task('compressJs',function(cb){
	    pump([
	        gulp.src('./src/js/*.js'),
	        // 合并
	        concat('index.js'),
	        gulp.dest('./dist/js/'),
	        // 压缩
	        uglify(),
	        // 重命名
	        rename({
	            suffix:'.min'
	        }),
	        gulp.dest('dist/js/')
	    ],cb );
	});    
## ES6转ES5

```
gulp.task('es6',function(){
	gulp.src('src/js/demo.js')
	.pipe(babel({
		'presets':['es2015']
	}))
	.pipe(gulp.dest('dist/es5'));
});
```

## 静态服务器

	var browserSync = require("browser-sync");
	// 静态服务器
	gulp.task('server',()=>{
		browserSync({
			// 服务器路径
			// server:'./src/',
			// 代理服务器，必须绑定到当前服务器路径一致
			proxy:'http://localhost:1806',
			// 端口
			port:666,
			// 监听文件修改，自动刷新
			files:['./src/**/*.html','./src/css/*.css','./src/api/*.php']
		});
		// 监听sass文件修改，并自动编译
		gulp.watch('./src/sass/*.scss',['compileSass'])	
	}）
	//监听的文件修改，页面html对应修改。通过brower-sync服务只能看到页面修改
静态服务器：开启服务，不能识别后端语言.

wampserver:apache服务器  php解析器  mysql服务器

## 创建node服务器

http-server

```

```



# package.json文件

1.生成package.json文件：npm init

2.是什么？项目要依赖的所有包的信息

3.通过package.json下载包含的所有包

​	npm install ==>dependencies、devDependencies都会帮你下载

​	npm install --production ==>只会下载devDependencies下面的包

详细剖析：

dependencies{

​	gulp-htmlmin//

​	npm install --save gulp

devDependencies{} //上线目录需要用到哪些包

​	npm install --save-dev gulp

