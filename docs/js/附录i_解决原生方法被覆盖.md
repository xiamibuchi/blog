## 实现原理

js 的原生方法被覆盖掉以后，如果你还没让原生方法又从新指向一个新的变量名，那就 gg 了。所以，关键就是怎么再获取到原生的方法。实现的原理就是创建一个新的 window 对象，然后从新的 window 对象里面获取原生的方法，来重新赋值。

## 使用 iframe 实现

首先创建一个 iframe 对象，使用 document.createElement 方法创建

var iframe = document.createElement("iframe"); document.body.appendChild(iframe)
然后，获取到 iframe 里面的 window 对象

```JavaScript
`var iframeWin = iframe.contentWindow;`
`window.console = iframeWin.console;`
```

## 使用 window.open 方法实现

window.open 方法调用会打开一个新的窗口，返回一个新的 window 对象，所以我们获取 window 对象可以这样获取

```JavaScript
var win = window.open(); //获取对象
win.close(); //将打开的窗口关闭
window.console = win.console;
```
