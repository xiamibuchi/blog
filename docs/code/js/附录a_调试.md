# 调试

## 移动端调试

1. ios 手机连接到 pc

设置手机 safari 设置-》safari-》高级-》打开 web 检查器 （授权调试功能）
2. [安装 ios_webkit_debug_proxy](https://github.com/google/ios-webkit-debug-proxy)。
     1. 安装 scoop
     2. 通过 scoop 安装 ios_webkit_debug_proxy
3. 连接测试
确认手机已连接 pc，输入
ios_webkit_debug_proxy -f chrome-devtools://devtools/bundled/inspector.html
在 localhost:9221 中查看设备连接情况，此时可看到连接设备的地址。

在 chrome://inspect/#devices 添加设备端口，在红圈处进行添加。

此时手机通过 safari 访问网页，刷新 chrome://inspect/#devices，多试几次，将在 target 可以看到如下：

点击 inspect,就可看到调试界面了。（你在手机上的操作在调试界面都可以看到）

> 注意事项

点击 inspect 可能看到的是空白，是因为在使用时需要翻墙下载一个插件，所以需要 pc 能够翻墙（第一次）。

另外也可能是缓存的原因，需要清理。（chrome://appcache-internals/#、手机 safari 的缓存）

## chrome

### console

`console`对象是JavaScript的原生对象，它有点像Unix系统的标准输出 stdout 和标准错误 stderr，可以输出各种信息用来调试程序，而且还提供了很多额外的方法，供开发者调用。它的常见用途有两个。

- 显示网页代码运行时的错误信息。
- 提供了一个命令行接口，用来与网页代码互动。

`console`对象提供的各种方法，用来与控制台窗口互动。

- log()，info()，debug()：在console窗口输出信息。它可以接受多个参数，将它们的结果连接起来输出。
- warn()，error()：它们与log方法的不同之处在于，warn方法输出信息时，在最前面加一个黄色三角，表示警告；error方法输出信息时，在最前面加一个红色的叉，表示出错，同时会显示错误发生的堆栈
- table()：对于某些复合类型的数据，console.table方法可以将其转为表格显示
- count()：用于计数，输出它被调用了多少次
- dir()：对一个对象进行检查（inspect），并以易于阅读和打印的格式显示
- assert()：接受两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果
- time()，timeEnd()：这两个方法用于计时，可以算出一个操作所花费的准确时间
- profile()，profileEnd()：console.profile方法用来新建一个性能测试器（profile），它的参数是性能测试器的名字console.profileEnd方法用来结束正在运行的性能测试器
- group()，groupend()，groupCollapsed()：用于将显示的信息分组。它只在输出大量信息时有用，分在一组的信息，可以用鼠标折叠/展开
- trace()：显示当前执行的代码在堆栈中的调用路径
- clear()：清除当前控制台的所有输出，将光标回置到第一行
- $_：返回上一个表达式的值
- $(selector)：等同于document.querySelector
- $$(selector)：等同于document.querySelectorAll

## vConsole

[Github](https://github.com/Tencent/vConsole)

引入方法

```html
<script type="text/javascript" src="https://cdn.bootcss.com/vConsole/3.13.0/vconsole.min.js"></script>
<script>
    // 初始化
    var vConsole = new VConsole();
    console.log('Hello world');
</script>
```

## Chrome

https://developer.chrome.com/docs/devtools/overview/

## vue

线上调起 vue 浏览器插件

```js
(function() {
    'use strict';
    const all = document.querySelectorAll('*');
    let el
    for (let i = 0; i < all.length; i++) {
        if (all[i].__vue__) {
            el = all[i]
            break
        }
    }
    if (el) {
        console.log('use vue', el);
        var Vue = Object.getPrototypeOf(el.__vue__).constructor
        while (Vue.super) {
            Vue = Vue.super
        }
        Vue.config.devtools = true;
        window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = Vue;
        console.log(Vue.version);
    }
    else {
        console.log('not use vue');
    }
})();
```