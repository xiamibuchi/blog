// 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率，常用于滚动条滚动监听等

function throttle(fn, timehold) {
  let startTime = new Date().getTime();
  const context = this;

  return function() {
    const currentTime = new Date().getTime();
    if (currentTime - startTime >= timehold) {
      fn.apply(context, arguments);

      startTime = currentTime;
    }
  };
}

function throttle(fn) {
  let flag = true;
  return function() {
    if (!flag) return;
    flag = false;
    setTimeout(() => {
      fn.apply(this, arguments);
      flag = true;
    }, 500);
  };
}
