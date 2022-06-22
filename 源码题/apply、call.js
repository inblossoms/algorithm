// Tip 分析：
/**
 * 1. apply、call 会改变调用者的this指向为指定对象
 * 2. 第一个参数：指定的新宿主 其他参数为args
 */

function mark() {
  return (
    Math.random().toString(36).substr(3, 6) + new Date().getTime().toString(36)
  );
}

Function.prototype.mCall = function (content) {
  let props = mark();
};
