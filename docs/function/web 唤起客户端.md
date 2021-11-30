# web 唤起客户端

## 使用 WebSocket 实现页端和 App 的通信

1. Android App 需要实现 WebSocket 的连接功能，开放一个特定的端口
2. web JS 建立 WebSocket连接

> 当 App 不在进程中存活时，我们是无法成功 call 起

## 用 setTimeout 做延时处理

```js
location.href = schema;
let timer = setTimeout(() => {
  if (!isBlur) {
    location.href = dispatchUrl;
  }
}， 3e3)
document.addEventListener('visibilitychange', () => {
  clearTimeout(timer);
});
window.addEventListener('pagehide', () => {
  clearTimeout(timer);
});
```

其中 isBlur 值的设置可以用：

1. 监听 window 的 blur 事件
2. 判断 document.hidden
3. document.hasFocus()

当页面触发 visibilitychange / pagehide 后，则判断页面跳转（即打开了 App）
