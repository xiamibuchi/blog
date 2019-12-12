// 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行

function debounce(fn, waitTime) {
  let timeout;

  return function() {
    clearTimeout(timeout);
    const args = arguments;
    timeout = setTimeout(() => {
      fn.apply(this, [...args]);
    }, waitTime);
  };
}