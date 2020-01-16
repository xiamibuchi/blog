// 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行

function debounce(fn) {
  let timer;

  return function() {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}
