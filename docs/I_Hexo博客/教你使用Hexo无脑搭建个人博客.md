---
title: 教你使用Hexo无脑搭建个人博客
date: 2019-10-10 23:18:33
categories: 
- I_Hexo博客
tags: 
- Hexo
---
## 一、开发环境

1.git

2.node.js

3.安装 hexo 脚手架

```bash
npm install -g hexo-cli
```

## 二、建站

### 创建项目、安装依赖

```bash
# 将拉取 hexo 的 github 仓库的相关文件，拉取不成功的直接去 github 克隆或者下载压缩包
# github 仓库地址: https://github.com/hexojs/hexo-starter.git
hexo init myblog
# 进入目录
cd myblog
# 安装项目相关依赖包
npm install
```

修改配置文件`/myblog/_config.yml`(也可以不修改)，将网站名称改成自己，我的是这样的:

```yml
# Site
title: 邵中华
subtitle: 犯我中华者，虽远必诛
description: 
keywords:
author: Duke Shao
language: zh-Hans
timezone:
```



### 创建文章

```bash
hexo new myFirstPage
```

默认生成的是myFirstPage.md 文件，可以自己去编辑器编写内容，经过编译会生成 html 文件

md 文件可以使用 VS Code 等代码编辑器，也可以使用其他的 md 文件编辑器，我使用的是 Typora，我喜欢这个 md 文件编辑器，软件主题也特别好看。

```bash
# 编译文件
hexo g
# 开启服务
hexo s
```

打开 localhost:4000 ，查看效果。

## 三、创建 Github Pages

### 创建仓库

在 Github 上创建一个仓库，名字为 username.github.io，username 是你 GitHub 的用户名。

### 修改配置文件

修改配置文件`/myblog/_config.yml`,repo 的值是你的仓库的地址，以下是我的:

```yml
deploy:
  type: git
  repo: git@github.com:Duke1048/Duke1048.github.io.git
  branch: master
```

### 发布到 github

```bash
hexo d
```

如果报错：ERROR Deployer not found: git ，安装插件:hexo-deployer-git

```bash
npm install hexo-deployer-git --save
```

打开 http://Duke1048.github.io/ 查看效果，可能存在延迟



## 四、绑定自己的域名

### 添加域名解析

用阿里云、腾讯云...注册的域名都可以，我用的是腾讯云的。

修改解析

```js
记录类型: CNAME	//固定值
主机记录: www.dukeshao.com	//添加 www 就好，后面固定是你自己的域名
解析线路: 默认	//不用管，默认就好
记录值: Duke1048.github.io	//这是你 github pages 的访问地址
TTL值: 600s	//延迟时间，不用管
```

### 创建配置文件

进入目录 /myblog/source/

```bash
# 创建文件 CNAME
touch CNAME
```

CNAME文件没有文件类型，不用管，用编辑器或者直接在终端编辑文件，添加自己的域名(www.dukeshao.com) 就好

### 完成

```bash
# 编译
hexo g
# 部署发布到 github
hexo d
```

访问www.dukeshao.com就好了

##  五、添加搜索功能

### 安装插件

在自己博客根目录下（我的目录：/Users/dukeshao/Documents/myblog），执行如下命令

```bash
npm install hexo-generator-searchdb --save
```

### 修改站点配置文件

我的路径是：myblog下的_config.yml文件，添加以下代码。

```yml
search:
    path: search.xml
    field: post
    format: html
    limit: 10000
```



### 修改主题配置文件

我的路径：/myblog/themes/next下的_config.yml文件，进行编辑。

```yml
local_search:
    enable: true
```

### 完成

```bash
# 编译文件
hexo g
# 推送发布到 git 仓库
hexo d
# 开启本地服务
hexo s
```

## 六、首页文章缩略功能

Hexo 的 Next 主题默认是首页显示你每篇文章的全文内容，不爽，我要它只预览一部分。

修改配置文件 /myblog/themes/next/_config.yml 文件:

```bash
auto_excerpt:
    enable: false
    length: 150
```

重启，搞定！

## 七、文章分类功能

在主题配置文件`~/Documents/myblog/themes/next/_config.yml`中打开分类功能

```yml
menu:
  home: / || home
  # about: /about/ || user
  categories: /categories/ || th
  archives: /archives/ || archive
  # tags: /tags/ || tags
  # schedule: /schedule/ || calendar
  # sitemap: /sitemap.xml || sitemap
  # commonweal: /404/ || heartbeat
```

在项目根目录(`~/Documents/myblog/`)运行

```bash
hexo new page categories
INFO  Created: ~/Documents/myblog/source/categories/index.md
```

修改`~/Documents/myblog/source/categories/index.md` 文件，添加一行` type: "categories"`

```md
---
title: categories
date: 2019-10-14 15:06:57
type: categories
---
```

给文章添加"categories"属性即可，例如我的某篇文章如下:

分类"初级"是分类"Hexo"的子分类

~~~md
---
title: 教你使用Hexo无脑搭建个人博客
date: 2019-10-10 23:18:33
tags: Hexo
categories: 
- Hexo
- 初级
---
## 开发环境

1.git

2.node.js

3.安装 hexo 脚手架

```bash
npm install -g hexo-cli
```
~~~

## 八、文章标签功能

在主题配置文件`~/Documents/myblog/themes/next/_config.yml`中打开标签功能

```yml
menu:
  home: / || home
  # about: /about/ || user
  categories: /categories/ || th
  archives: /archives/ || archive
  tags: /tags/ || tags
  # schedule: /schedule/ || calendar
  # sitemap: /sitemap.xml || sitemap
  # commonweal: /404/ || heartbeat
```

在项目根目录(`~/Documents/myblog/`)运行

```bash
hexo new page tags
INFO  Created: ~/Documents/myblog/source/tags/index.md
```

修改`~/Documents/myblog/source/categories/index.md` 文件，添加一行` type: "tags"`

```md
---
title: tags
date: 2019-10-14 15:06:57
type: tags
---
```

给文章添加"tags"属性即可，例如我的某篇文章如下:

~~~md
---
title: 教你使用Hexo无脑搭建个人博客
date: 2019-10-10 23:18:33
tags: Hexo
categories: Hexo
---
## 开发环境

1.git

2.node.js

3.安装 hexo 脚手架

```bash
npm install -g hexo-cli
```
~~~

## 九、博客已运行时间功能

添加以下代码`~/myblog/themes/next/layout/_custom/sidebar.swig`

```jsx
<div id="days" style="text-align:center;"></div>
<script>
function show_date_time(){
window.setTimeout("show_date_time()",1000);
BirthDay=new Date("01/10/2015 12:13:14");//自己博客的生日
today=new Date();
timeold=(today.getTime()-BirthDay.getTime());
sectimeold=timeold/1000
secondsold=Math.floor(sectimeold);
msPerDay=24*60*60*1000
e_daysold=timeold/msPerDay
daysold=Math.floor(e_daysold);
e_hrsold=(e_daysold-daysold)*24;
hrsold=setzero(Math.floor(e_hrsold));
e_minsold=(e_hrsold-hrsold)*60;
minsold=setzero(Math.floor((e_hrsold-hrsold)*60));
seconds=setzero(Math.floor((e_minsold-minsold)*60));
document.getElementById('days').innerHTML="已运行: "+daysold+"天 "+hrsold+":"+minsold+":"+seconds;
}
function setzero(i){
if (i<10)
{i="0" + i};
return i;
}
show_date_time();
</script>
```

## 十、隐藏底部"强力驱动"

修改主题配置文件`~/myblog/themes/next/_config.yml`

```yml
footer:
	powered: false
  	theme:
    	enable: false
    	version: false
```

## 十一、添加头像

修改主题配置文件`~/myblog/themes/next/_config.yml`

头像文件存在`~/myblog/themes/next/source/images/avatar.jpg`

```yml
avatar: /images/avatar.jpg
```

## 十二、文章结束标记

修改文件`~/myblog/themes/next/layout/_macro/post.swig`

在"END POST BODY"后面增加一行代码`<div></div>`

```swig
{#####################}
{### END POST BODY ###}
{#####################}

<div style="text-align:center;color: #ccc;font-size:14px;">---------------- The End ----------------</div>
```

## 十三、文章底部标签图标

修改文件`~/myblog/themes/next/layout/_macro/post.swig`

搜索`rel="tag">#`，将`#`改为图标`<i class="fa fa-tag"></i>`

```swig
{% if post.tags and post.tags.length and not is_index %}
<div class="post-tags">
{% for tag in post.tags %}
<a href="{{ url_for(tag.path) }}" rel="tag"><i class="fa fa-tag"></i> {{ tag.name }}</a>
{% endfor %}
</div>
{% endif %}
```

## 十四、菜单标签/分类/归档数量显示

编辑模板文件`~/myblog/themes/next/layout/_partials/header.swig`，增加3行代码

```jsx
{% if theme.menu %}
    <ul id="menu" class="menu">
      {% for name, path in theme.menu %}
        {% set itemName = name.toLowerCase() %}
        <li class="menu-item menu-item-{{ itemName | replace(' ', '-') }}">
          <a href="{{ url_for(path.split('||')[0]) | trim }}" rel="section">
            {% if theme.menu_icons.enable %}
              <i class="menu-item-icon fa fa-fw fa-{{ path.split('||')[1] | trim | default('question-circle') }}"></i> <br />
            {% endif %}
            {{ __('menu.' + name) | replace('menu.', '') }}
            {% if name == 'tags' %}//这是增加的第一行代码
            <span class="badge">{{site.tags.length || 0}}</span>//这是增加的第二行代码
            {% endif %}//这是增加的第三行代码
            {% if name == 'categories' %}
            <span class="badge">{{site.categories.length || 0}}</span>
            {% endif %}
            {% if name == 'archives' %}
            <span class="badge">{{site.archives.length || 0}}</span>
            {% endif %}
          </a>
        </li>
      {% endfor %}
```

编辑样式文件`~/myblog/themes/next/source/css/_common/components/header/menu.styl`，添加以下 css 样式

```css
.menu .menu-item a .badge{
  display: inline-block;
  min-width: 10px;
  padding: 1px 5px;
  font-size: 12px;
  line-height: 1;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background-color: #d2d2d2;
  border-radius: 10px;
  position:absolute;
  right:15px;
  top:50%;
  transform:translateY(-50%);
}
.menu .menu-item-active{
    a{
        .badge{
            background-color:#555;
        }
    }
}
```

移除主题自带的小圆点`~/myblog/themes/next/source/css/_schemes/Pisces/_menu.styl`

```css
.menu-item-active a {
  @extend .menu .menu-item a:hover;
-  &:after {
-    content: " ";
-    position: absolute;
-    top: 50%;
-    margin-top: -3px;
-    right: 15px;
-    width: 6px;
-    height: 6px;
-    border-radius: 50%;
-    background-color: $grey;
  }
}
```

## 十五、自定义文章目录序号

hexo 编译默认会为你设置文章目录序号，使用的是阿拉伯数字，一级标题（1、2、3），二级标题（1.1、1.2、1.3），三级标题（1.1.1、1.1.2、1.1.3），我不喜欢这种格式，如果已经在文章标题中写了序号，那么就会重复。我不习惯在文章中标题没有序号，在我看文章时我希望看到标题时能知道这是第几个标题，如果没有序号，那么我还得将文章中的标题去目录中寻找，才能知道序号。我平时喜欢大标题用中文简体数字（一、二、三、...），二级标题（1、2、3、...），三级标题（(1)、(2)、(3)、...），四级标题（a、b、c、...）。

把编译文件里自动生成目录数字的代码注释掉：

路径：`~/myblog/node_modules/hexo/lib/plugins/helper/toc.js`

大约在59行，注释掉如下的代码

```
// if (listNumber) {
//     result += `<span class="${className}-number">`;

//     for (let i = firstLevel - 1; i < level; i++) {
//         result += `${lastNumber[i]}.`;
//     }

//     result += '</span> ';
// }
```



## 十六、清楚缓存和静态文件

`hexo clean`清除缓存文件 (db.json) 和已生成的静态文件 (public)。

在某些情况(尤其是更换主题后),如果发现您对站点的更改无论如何也不生效,您可能需要使用到