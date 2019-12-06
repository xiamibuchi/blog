# Webpack

- [webpack 官网](http://webpack.github.io/)
- bundle `[ˈbʌndl]` 捆绑，收集，归拢，把…塞入

```html
1 webpack 将带有依赖项的各个模块打包处理后，变成了独立的浏览器能够识别的文件 2
webpack 合并以及解析带有依赖项的模块
```

### 概述

> webpack 是一个现代 JavaScript 应用程序的模块打包器(module bundler)  
> webpack 是一个**模块化方案（预编译）**  
> webpack 获取具有依赖关系的模块，并生成表示这些模块的静态资源

- 四个核心概念：**入口(entry)**、**输出(output)**、**加载器 loader**、**插件(plugins)**

```html
模块化方案: webpack 和
requirejs（通过编写代码的方式将前端的功能，划分成独立的模块） browserify 是与
webpack 相似的模块化打包工具 webpack 预编译
(在开发阶段通过webpack进行模块化处理, 最终项目上线, 就不在依赖于 webpack)
requirejs 线上的编译( 代码运行是需要依赖与 requirejs 的 )
```

### webpack 起源

- webpack 解决了现存模块打包器的两个痛点：
  - 1 **Code Spliting** - 代码分离
  - 2 **静态资源的模块化处理方案**

### webpack 与模块

- [前端模块系统的演进](http://zhaoda.net/webpack-handbook/module-system.html)
- 在 webpack 看来：所有的**静态资源都是模块**
- webpack 模块能够识别以下等形式的模块之间的依赖：
- JS 的模块化规范：
  - ES2015 `import` `export`
  - CommonJS `require()` `module.exports`
  - AMD `define` 和 `require`
- 非 JS 等静态资源：
  - css/sass/less 文件中的 `@import`
  - 图片连接，比如：样式 `url(...)` 或 HTML `<img src=...>`
  - 字体 等

### webpack 文档和资源

- [webpack 中文网](https://doc.webpack-china.org/)
- [webpack 1.0](http://webpack.github.io/docs/what-is-webpack.html)
- [webpack 2.x+](https://webpack.js.org/)
- [入门 Webpack，看这篇就够了](http://www.jianshu.com/p/42e11515c10f#)

## 安装 webpack

- 全局安装：`npm i -g webpack`
  - 目的：在任何目录中通过 CLI 使用 `webpack` 这个命令
- 项目安装：`npm i -D webpack`
  - 目的：执行当前项目的构建

## webpack 的基本使用

- 安装：`npm i -D webpack`
- webpack 的两种使用方式：1 命令行 2 配置文件（`webpack.config.js`）

### 命令行方式演示 - 案例：隔行变色

- 1 使用`npm init -y` 初始 package.json，使用 npm 来管理项目中的包
- 2 新建`index.html`和`index.js`，实现隔行变色功能
- 3 运行`webpack src/js/index.js dist/bundle.js`进行打包构建，语法是：`webpack 入口文件 输出文件`
- 4 注意：需要在页面中引入 输出文件 的路径（此步骤可通过配置 webpack 去掉）

```js
/*
  src/js/index.js
*/

// 1 导入 jQuery
import $ from "jquery";
// 2 获取页面中的li元素
const $lis = $("#ulList").find("li");
// 3 隔行变色
// jQuery中的 filter() 方法用来过滤jquery对象
$lis.filter(":odd").css("background-color", "#def");
$lis.filter(":even").css("background-color", "skyblue");
```

### 配置文件方式（推荐）

```js
/*
  webpack.config.js

  运行命令：webpack

  entry 入口的配置说明：
  https://doc.webpack-china.org/concepts/entry-points
*/

var path = require("path");
module.exports = {
  // 入口文件
  entry: path.join(__dirname, "src/js/index.js"),

  // 输出文件
  output: {
    path: path.join(__dirname, "dist"), // 输出文件的路径
    filename: "bundle.js" // 输出文件的名称
  }
};
```

## webpack-dev-server

- 安装：`npm i -D webpack-dev-server`
- 作用：配合 webpack，创建开发环境（启动服务器、监视文件变化、自动编译、刷新浏览器等），提高开发效率
- 注意：无法直接在终端中执行 `webpack-dev-server`，需要通过 `package.json` 的 `scripts` 实现
- 使用方式：`npm run dev`

```json
"scripts": {
  "dev": "webpack-dev-server"
}
```

### 使用说明

- 注意：`webpack-dev-server`将打包好的文件存储在内存中，提高编译和加载速度，效率更高
- 注意：输出的文件被放到项目根目录中
  - 命令行中的提示：`webpack output is served from /`
  - 在`index.html`页面中直接通过 `/bundle.js` 来引入内存中的文件

### 配置说明 - CLI 配置

- `--contentBase` ：主页面目录
  - `--contentBase ./`：当前工作目录
  - `--contentBase ./src`：webpack-dev-server 启动的服务器，我们在浏览器中打开的时候会自动展示 ./src 中的 index.html 文件
- `--open` ：自动打开浏览器
- `--port` ：端口号
- `--hot` ：热更新，只加载修改的文件(按需加载修改的内容)，而非全部加载

```js
/* package.json */
/* 运行命令：npm run dev */

{
  "scripts": {
    "dev": "webpack-dev-server --contentBase ./src --open --port 8888 --hot"
  }
}
```

### 配置说明 - webpack.config.js

```js
const webpack = require('webpack')

devServer: {
  // 服务器的根目录 Tell the server where to serve content from
  // https://webpack.js.org/configuration/dev-server/#devserver-contentbase
  contentBase: path.join(__dirname, './'),
  // 自动打开浏览器
  open: true,
  // 端口号
  port: 8888,

  // --------------- 1 热更新 -----------------
  hot: true
},

plugins: [
  // ---------------- 2 启用热更新插件 ----------------
  new webpack.HotModuleReplacementPlugin()
]
```

## html-webpack-plugin 插件

- 安装：`npm i -D html-webpack-plugin`
- 作用：根据模板，自动生成 html 页面
- 优势：页面存储在内存中，自动引入`bundle.js`、`css`等文件

```js
/* webpack.config.js */
const htmlWebpackPlugin = require("html-webpack-plugin");

// ...
plugins: [
  new htmlWebpackPlugin({
    // 模板页面路径
    template: path.join(__dirname, "./index.html"),
    // 在内存中生成页面路径，默认值为：index.html
    filename: "index.html"
  })
];
```

# VUE

## Loaders（加载器）

- [webpack - Loaders](https://webpack.js.org/loaders/)
- [webpack - 管理资源示例](https://doc.webpack-china.org/guides/asset-management)

> webpack enables use of loaders to preprocess files. This allows you to bundle any static resource way beyond JavaScript.

- webpack 只能处理 JavaScript 资源
- webpack 通过 loaders 处理非 JavaScript 静态资源

## CSS 打包

- 1 CSS 打包文件（加载）
- 2 SASS 打包文件（编译为 CSS）

### 使用 webpack 打包 CSS

- 安装：`npm i -D style-loader css-loader`
- 注意：use 中模块的顺序不能颠倒，加载顺序：从右向左加载

```js
/* index.js */

// 导入 css 文件
import "./css/app.css";

/* webpack.config.js */

// 配置各种资源文件的loader加载器
module: {
  // 配置匹配规则
  rules: [
    // test 用来配置匹配文件规则（正则）
    // use  是一个数组，按照从后往前的顺序执行加载
    { test: /\.css$/, use: ["style-loader", "css-loader"] }
  ];
}
```

### 使用 webpack 打包 sass 文件

- 安装：`npm i -D sass-loader node-sass`
- 注意：`sass-loader` 依赖于 `node-sass` 模块

```js
/* webpack.config.js */

// 参考：https://webpack.js.org/loaders/sass-loader/#examples
// "style-loader"  ：creates style nodes from JS strings 创建style标签
// "css-loader"    ：translates CSS into CommonJS 将css转化为CommonJS代码
// "sass-loader"   ：compiles Sass to CSS 将Sass编译为css

module: {
  rules: [
    {
      test: /\.(scss|sass)$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    }
  ];
}
```

## 图片和字体打包

- 安装：`npm i -D url-loader file-loader`
- `file-loader`：加载并重命名文件（图片、字体 等）
- `url-loader`：将图片或字体转化为 base64 编码格式的字符串，嵌入到样式文件中

```js
/* webpack.config.js */

module: {
  rules: [
    // 打包 图片文件
    { test: /\.(jpg|png|gif|jpeg)$/, use: "url-loader" },

    // 打包 字体文件
    { test: /\.(woff|woff2|eot|ttf|otf)$/, use: "file-loader" }
  ];
}
```

### 图片打包细节

- `limit`参数的作用：（单位为：字节(byte)）
  - 当图片文件大小（字节）`小于`指定的 limit 时，图片被转化为 base64 编码格式
  - 当图片文件大小（字节）`大于等于`指定的 limit 时，图片被重命名以 url 路径形式加载（此时，需要`file-loader`来加载图片）
- 图片文件重命名，保证相同文件不会被加载多次。例如：一张图片（a.jpg）拷贝一个副本（b.jpg），同时引入这两张图片，重命名后只会加载一次，因为这两张图片就是同一张
- 文件重命名以后，会通过 MD5 加密的方式，来计算这个文件的名称

```js
/* webpack.config.js */

module: {
  rules: [
    // {test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader?limit=100'},
    {
      test: /\.(jpg|png|gif|jpeg)$/,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192
          }
        }
      ]
    }
  ];
}
```

### 字体文件打包说明

- 处理方式与图片相同，可以使用：`file-loader`或`url-loader`

## Babel

Babel 是一个编译 JavaScript 的平台，它可以编译代码帮你达到以下目的：

- 让你能使用最新的 JavaScript 代码（ES6，ES7...），而不用管新标准是否被当前使用的浏览器完全支持；
- 让你能使用基于 JavaScript 进行了拓展的语言，比如 React 的 JSX；

* [babel](https://babeljs.io/)
* [es2015-loose](http://2ality.com/2015/12/babel6-loose-mode.html)
* [babel 全家桶](https://github.com/brunoyang/blog/issues/20)
* 安装：`npm i -D babel-core babel-loader`
* 安装：`npm i -D babel-preset-env`

### 基本使用（两步）

- 第一步：

```js
/* webpack.config.js */

module: {
  rules: [
    // exclude 排除，不需要编译的目录，提高编译速度
    { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ }
  ];
}
```

- 第二步：在项目根目录中新建`.babelrc`配置文件

```json
/* .babelrc */

// 将来babel-loader运行的时候，会检查这个配置文件，并读取相关的语法和插件配置
{
  "presets": ["env"]
}
```

## babel 的说明

- babel 的作用：
  - 1 语法转换：将新的 ES 语法转化为浏览器能识别的语法（babel-preset-\*）
  - 2 polyfill 浏览器兼容：让低版本浏览器兼容最新版 ES 的 API

### babel-preset-\*

> Babel 通过语法转换器，能够支持最新版本的 JavaScript 语法  
> babel-preset-\* 用来指定我们书写的是什么版本的 JS 代码

- 作用：将新的 ES 语法转化为浏览器能识别的 ES5 代码
- [ES6 语法提案的批准流程](http://es6.ruanyifeng.com/#docs/intro#语法提案的批准流程)
  - ES2015 也就是 ES6, 下一个版本是 ES7, 从 ES6 到 ES7 之间经历了 5 个阶段
  - babel-preset-es2015 转换 es6 的语法
  - babel-preset-stage-0 转换比 es6 更新的语法

```html
Stage 0 - Strawman（展示阶段） Stage 1 - Proposal（征求意见阶段） Stage 2 -
Draft（草案阶段） Stage 3 - Candidate（候选人阶段） Stage 4 -
Finished（定案阶段） Stage 0 is "i've got a crazy idea", stage 1 is "this idea
might not be stupid", stage 2 is "let's use polyfills and transpilers to play
with it", stage 3 is "let's let browsers implement it and see how it goes",
stage 4 is "now it's javascript".
```

### babel-polyfill 和 transform-runtime

- 作用：实现浏览器对不支持 API 的兼容（兼容旧环境、填补）
  - 在低版本浏览器中使用高级的 ES6 或 ES7 的方法或函数，比如：`'abc'.padStart(10)`
- [方式一 polyfill](https://babeljs.io/docs/usage/polyfill/#usage-in-node-browserify-webpack)
- [方式二 transform-runtime](https://babeljs.io/docs/plugins/transform-runtime/)
- 方式一：`npm i -S babel-polyfill`
- 方式二：`npm i -D babel-plugin-transform-runtime` 和 `npm i -S babel-runtime`
  - 注意：babel-runtime 包中的代码会被打包到你的代码中（-S）

```html
区别： polyfill
所有兼容性问题，都可以通过polyfill解决（包括：实例方法）、污染全局环境 runtime
除了实例方法以外，其他兼容新问题都能解决、不污染全局环境
polyfill：如果想要支持全局对象（比如：`Promise`）、静态方法（比如：`Object.assign`）或者**实例方法**（比如：`String.prototype.padStart`）等，那么就需要使用`babel-polyfill`
babel-runtime ：提供了兼容旧环境的函数，使用的时候，需要我们自己手动引入 比如：
const Promise = require('babel-runtime/core-js/promise') 存在的问题： 1
手动引入太繁琐 2 多个文件引入同一个helper（定义），造成代码重复，增加代码体积
babel-plugin-transform-runtime： 1 自动引入helper（比如，上面引入的 Promise） 2
babel-runtime提供helper定义，引入这个helper即可使用，避免重复 3 依赖于
babel-runtime 插件 transform-runtime插件的使用： 直接在 .bablerc
文件中，添加一个 plugins 的配置项即可！！！ "plugins": [ "transform-runtime" ]
```

```js
/*
  babel-polyfill 的使用步骤：
  1 main.js
*/
// 第一行引入
require("babel-polyfill");

var s = "abc".padStart(4);
console.log(s);

// 2 webpack.config.js 配置
module.exports = {
  entry: ["babel-polyfill", "./js/main.js"]
};
```

### 总结

```html
babel-core babel核心包 babel-loader 用来解析js文件 babel-preset-*
新ES语法的解析和转换 transform-runtime / babel-polyfill
兼容旧浏览器，到达支持新API目的 // 判断浏览器是否兼容 padStart 这个 API if
(!String.prototype.padStart) { // 如果不兼容, 就自己模拟 padStart的功能实现一份
String.prototype.padStart = function padStart(targetLength,padString) { } }
```

## vue 单文件组件

- [vue-loader](https://vue-loader.vuejs.org/zh-cn/)
- single-file components(单文件组件)
- 后缀名：`.vue`，该文件需要被预编译后才能在浏览器中使用
- 注意：单文件组件依赖于两个包 **vue-loader** / **vue-template-compiler**
- 安装：`npm i -D vue-loader vue-template-compiler`

```html
<!-- App.vue 示例代码： -->
<template>
  <div>
    <h1>VUE 单文件组件示例 -- App.vue</h1>
    <p>这是 模板内容</p>
  </div>
</template>

<script>
  // 组件中的逻辑代码
  export default {};
</script>

<style>
  /* 组件样式 */
  h1 {
    color: red;
  }
</style>
```

```js
// webpack.config.js 配置：
module: {
  rules: [
    {
      test: /\.vue$/,
      loader: "vue-loader"
    }
  ];
}
```

### 使用单文件组件

```js
/* main.js */

import Vue from "vue";
// 导入 App 组件
import App from "./App.vue";

const vm = new Vue({
  el: "#app",
  // 通过 render 方法，渲染App组件
  render: c => c(App)
});
```

### 单文件组件使用步骤

- 1 安装：`npm i -D vue-loader vue-template-compiler`
- 2 在 `webpack.config.js` 中配置 `.vue` 文件的 loader
  - `{ test: /\.vue$/, use: 'vue-loader' }`
- 3 创建 `App.vue` 单文件组件，注意：App 可以是任意名称
- 4 在 `main.js` 入口文件中，导入 `vue` 和 `App.vue`组件，通过 render 将组件与实例挂到一起

### 单文件组件+路由

- [vue - Vue.use](https://cn.vuejs.org/v2/api/#Vue-use)
- [Vue.use 和 路由](https://cn.vuejs.org/v2/guide/plugins.html#使用插件)

```js
import Vue from "vue";
import App from "./App.vue";

// ------------- vue路由配置 开始 --------------
import Home from "./components/home/Home.vue";
import Login from "./components/login/Login.vue";

// 1 导入 路由模块
import VueRouter from "vue-router";
// 2 ** 调用use方法使用插件 **
Vue.use(VueRouter);
// 3 创建路由对象
const router = new VueRouter({
  routes: [
    { path: "/home", component: Home },
    { path: "/login", component: Login }
  ]
});

// ------------- vue路由配置 结束 --------------

const vm = new Vue({
  el: "#app",
  render: c => c(App),
  // 4 挂载到 vue 实例中
  router
});
```

## 错误处理

### 下载源连接错误

```
npm set registry https://registry.npmjs.org/
rm -rf node_modules/
npm cache clean --force
npm cache verify
npm install
```
