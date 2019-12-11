# 模块化

[模块化资料](https://segmentfault.com/a/1190000000733959)

概念:

- 将复杂的程序依据规范封装成几个块(文件), 并进行组合
- 块的内部数据与实现是私有的, 只是向外部暴露一些接口
- 在js中，一个模块就是实现特定功能的文件（js文件）
- 遵循模块的机制，想要什么功能就加载什么模块
- 模块化开发需要遵循规范

解决的问题:

- 1 命名冲突
- 2 文件依赖（加载文件）
- 3 模块的复用
- 4 统一规范和开发方式

## 历史

1. namespace (对象命名空间)
2. IIFE (立即调用的函数表达式)

## 规范

- AMD 浏览器端
  - requirejs
- CommonJS nodejs
  - 加载模块：require()
  - 导出模块：module.exports = {} / exports = {}
- ES6 中的 import / export
- CMD 浏览器端
  - 玉伯（阿里前端大神） -> seajs
- UMD 通用模块化规范，可以兼容 AMD、CommonJS、浏览器中没有模块化规范 等这些语法

### AMD

- Asynchronous Module Definition：异步模块定义，浏览器端模块开发的规范
- 代表：require.js
- [requirejs 文档](http://requirejs.org/)
- 特点：模块被异步加载，模块加载不影响后面语句的运行

### 基本语法

```javascript
define("module", ["dep1", "dep2"], function(d1, d2) {
  return someExportedValue
});

require(["module", "../file"], function(module, file) { /* ... */ })
```

优点：

- 适合在浏览器环境中异步加载模块
- 可以并行加载多个模块

缺点：

- 提高了开发成本，代码的阅读和书写比较困难，模块定义方式的语义不顺畅
- 不符合通用的模块化思维方式，是一种妥协的实现

## CMD

CMD 与 AMD 的区别

- 对于依赖的模块AMD是提前执行，CMD是延迟执行。不过RequireJS从2.0开始，也改成可以延迟执行(根据写法不同，处理方式不通过)
- CMD推崇依赖就近，AMD推崇依赖前置

### CommonJS

Node 应用由模块组成，采用 CommonJS 模块规范。每个文件就是一个模块，有自己的作用域。

输出的是一个值的拷贝，编译时输出接口

CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。

#### 特点

- 所有代码都运行在模块作用域，不会污染全局作用域。
- 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
- 模块加载的顺序，按照其在代码中出现的顺序。

#### 基本语法

暴露模块：module.exports = value或exports.xxx = value
引入模块：require(xxx),如果是第三方模块，xxx为模块名；如果是自定义模块，xxx为模块文件路径

### ES6

import/ export，export default

输出的是值的引用，运行时加载。编译时就能确定模块的依赖关系，以及输入和输出的变量
