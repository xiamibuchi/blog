## 原生方法被覆盖

js 的原生方法被覆盖后，可以创建一个新的 window 对象，然后从新的 window 对象里面获取原生的方法，来重新赋值。

## 使用 iframe 实现

首先创建一个 iframe 对象，获取 iframe 中的 window 对象

```JavaScript
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const iframeWin = iframe.contentWindow;
window.console = iframeWin.console;
```

## 使用 window.open 方法实现

window.open 方法调用会打开一个新的窗口，返回一个新的 window 对象

```JavaScript
const win = window.open(); // 获取对象
win.close(); //将打开的窗口关闭
window.console = win.console;
```
