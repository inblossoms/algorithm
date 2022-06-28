// Tip add(1)(2,3)(4).value()
// 输出：10
/**
 * 函数柯里化实现add(1)(1,2)(3)等
 * https://blog.csdn.net/weixin_30498807/article/details/102319249
 */
// let obj = {
//     name:'hell',
//     toString:function() {
//         console.log('调用了toString')
//         return '22'
//     },
//     valueOf:function() {
//         console.log('调用了obj.valueOf');
//         return '00'
//     }
// }
// console.log(obj+"3")
function test() {
  console.log(1);
}
test.toString = function () {
  console.log("调用了valueOf方法");
  return 2;
};
function add() {
  var arr = Array.prototype.slice.call(arguments);
  const _adder = function () {
    arr.push(...arguments);
    return _adder;
  };
  _adder.valueOf = function () {
    return arr.reduce((a, b) => a + b);
  };
  return _adder;
}
let res = add(1)(2)(3, 4);
console.log(add(1)(2, 3).valueOf());
console.log(res + 0);
