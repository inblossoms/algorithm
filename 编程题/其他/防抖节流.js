// Tip 防抖
function debounce(func, delay, immediate) {
  // immediate  布尔值 是否立即执行防抖
  let timer,
    result,
    debounced = function () {
      let that = this,
        args = arguments;
      if (timer) clearTimeout(timer);
      if (immediate) {
        // 判断第一次的事件发生 则立即执行函数
        let callNow = !timer;
        timer = setTimeout(() => (timer = null), delay);
        // 立即执行
        if (callNow) result = func.apply(that, args);
      } else {
        timer = setTimeout(function () {
          // 改变执行函数的this指向（指向调用者本身），每一次执行获取到的是鼠标发生的事件
          result = func.apply(that, args);
        }, delay);
      }
      // 返回函数执行结果
      return result;
    };
  // 既然是函数内部的清除防抖方法 就需要在内部定义
  debounced.cancel = function () {
    clearTimeout(timer);
    // 清除时间标识 防止内存泄漏
    timer = null;
  };
  return debounced;
}

// Tip 节流
function throttle(func, delay) {
  let timer,
    beginTime = 0;
  return function () {
    let that = this,
      args = arguments,
      nowTime = new Date().getTime(),
      later = () => {
        nowTime = new Date().getTime();
        timer = null;
        func.apply(that, args);
      };
    if (nowTime - beginTime > delay) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      func.apply(that, args);
      beginTime = nowTime;
    }
    if (!timer) {
      timer = setTimeout(later, delay);
    }
  };
}
