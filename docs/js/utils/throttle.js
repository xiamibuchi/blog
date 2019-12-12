// 指定时间间隔内只会执行一次任务，常用于滚动条滚动监听等

function throttle(fn, timehold) {
  let startTime = new Date().getTime();
  const context = this;

  return function() {
    const currentTime = new Date().getTime();
    if (currentTime - startTime >= timehold) {
      fn.apply(context, [...arguments]);

      startTime = currentTime;
    }
  };
}