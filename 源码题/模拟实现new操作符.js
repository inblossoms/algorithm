// Tip 分析：
/**
 * new 操作符在执行后发生了什么?
 * 1. 会创建出一个实例，构造函数内部this指向实例
 * 2. 实例的proto指向构造函数的原型
 */

function New(constructor, ...args) {
  // 1. 创建实例，改变this指向
  let target = Object.create(constructor.prototype);
  // 2. 将构造函数内部的this指向该实例
  let ret = constructor.apply(target, ...args);
  // 3. 返回实例
  return typeof ret === "object" ? ret : target;
}
