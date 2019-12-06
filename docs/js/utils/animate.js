function animate(element, target, num, fn) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    //让盒子每次在原来的基础上移动 10px
    var leader = element.offsetLeft;
    var step = target > leader ? num : -num;

    //只有当距离超过step的时候，才运行，否则，清除定时器
    if (Math.abs(leader - target) >= Math.abs(step)) {
      leader += step;
      element.style.left = leader + "px";
    } else {
      clearInterval(element.timer);
      element.style.left = target + "px";
      //if(fn){
      //  fn();
      //}
      //框架封装
      fn && fn();
    }
  }, 15);
}

function animate2(element, target) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var leader = element.offsetLeft;
    //缓速的原理：在原来的基础上每次跑step的距离， step的值在一直变小
    var step = (target - leader) / 10;
    //保证step最少都是1px,向上取整
    step = step > 0 ? Math.ceil(step) : Math.floor(step);
    leader += step;
    element.style.left = leader + "px";
    if (leader == target) {
      clearInterval(element.timer);
    }

  }, 15);
}