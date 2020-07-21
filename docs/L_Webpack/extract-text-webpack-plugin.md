---
title: extract-text-webpack-plugin
categories:
- L_Webpack
date: 2020-07-21 23:20:15
tags:
---

# "extract-text-webpack-plugin" loader is used without the corresponding plugin

解决 webpack 使用插件 extract-text-webpack-plugin 打包时出现 "extract-text-webpack-plugin" loader is used without the corresponding plugin 错误的问题.

我的 webpack 是V4版本, 官方 https://github.com/webpack-contrib/extract-text-webpack-plugin  仓库中写到 "Since webpack v4 the `extract-text-webpack-plugin` should not be used for css. Use [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) instead." 意思就是说 v4版本的 webpack 不要使用 extract-text-webpack-plugin 而是使用 mini-css-extract-plugin.

果断卸载掉 extract-text-webpack-plugin， 装上 mini-css-extract-plugin.

以下是相关文件的配置: webpack.config.js , package.json

```js
//webpack.config.js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: "development",
    entry: './app/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'epic-webpack.bundle.js'
    },
    //服务器webpack-dev-server
    devServer: {
        contentBase: path.resolve(__dirname, './app'),
        open: true
    },
    module: {
        rules: [
            {
                test: "/\.html$/",
                use: "html-loader"
            }, {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)(\?.*)?$/,
                use: "url-loader"
            }, {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/index.html'
        }),
        new MiniCssExtractPlugin()
    ]
};
```



```json
//package.json
{
    "name": "webpack-app",
    "version": "1.0.0",
    "description": "",
    "main": "app.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "build": "webpack",
        "dev": "webpack-dev-server --hot --inline"
    },
    "author": "duke",
    "license": "ISC",
    "devDependencies": {
        "css-loader": "^3.4.2",
        "html-loader": "^1.0.0",
        "html-webpack-plugin": "^3.2.0",
        "mini-css-extract-plugin": "^0.9.0",
        "node-sass": "^4.13.1",
        "sass-loader": "^8.0.2",
        "style-loader": "^1.1.3",
        "url-loader": "^4.0.0",
        "webpack": "^4.42.0",
        "webpack-cli": "^3.3.11",
        "webpack-dev-server": "^3.10.3",
        "webpack-manifest-plugin": "^2.2.0",
        "webpack-merge": "^4.2.2"
    },
    "dependencies": {}
}
```

