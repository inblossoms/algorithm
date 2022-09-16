// Tip 实现多维数组扁平化
// 方法一：reduce
function flat(arr, depth = 1) {
  return depth > 0
    ? arr.reduce((acc, cur) => {
      if (Array.isArray(cur)) {
        return [...acc, ...flat(cur, depth - 1)];
      }
      return [...acc, cur];
    }, [])
    : arr;
}

// 测试
let test = ['a', ['b', 'c'], ['d', ['e', ['f']], 'g']];
// 不传参数时，默认扁平化一层
flat(test);
// ["a", "b", "c", "d", ["e", ["f"]], "g"]

// 传入一个整数参数，整数即扁平化的层数
flat(test, 2);
// ["a", "b", "c", "d", "e", ["f"], "g"]

// Infinity 关键字作为参数时，无论多少层嵌套，都会转为一维数组
flat(test, Infinity);
// ["a", "b", "c", "d", "e", "f", "g"]

// 传入 <=0 的整数将返回原数组，不扁平化
flat(test, 0);
flat(test, -10);
// ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]];

// 如果原数组有空位，flat()方法会跳过空位。
let arr = ['a', 'b', 'c', 'd'];
flat(arr);
// ["a", "b", "c", "d"]

// 方法二：栈
function flattenDeep(arr) {
  const result = [];
  // 将数组元素拷贝至栈，直接赋值会改变原数组
  const stack = [...arr];
  // 如果栈不为空，则循环遍历
  while (stack.length !== 0) {
    const val = stack.pop();
    if (Array.isArray(val)) {
      // 如果是数组再次入栈，并且展开了一层
      stack.push(...val);
    } else {
      // 如果不是数组，就用头插法插入到结果数组中
      result.unshift(val);
    }
  }
  return result;
}

// 测试
let Ary = ['a', ['b', 'c'], ['d', ['e', ['f']], 'g']];
flattenDeep(Ary);
// ["a", "b", "c", "d", "e", "f", "g"]

// Tip 数组去重
let ary = [1, 2, 3, 3, 2, 4, 4, 6, 6, 6, 2, 1, 1, 9];


// 方法一：Set
let unique1 = (arr) => [...new Set(arr)];

console.time('time')
console.log('1', unique1(ary));     // 效率极低
console.timeEnd('time')

// 方法二：reduce
function unique2(arr) {
  return arr.sort().reduce((acc, cur) => {
    if (acc[cur] === 0 || acc[acc[cur - 1]] !== cur) acc.push(cur);
    return acc;
  }, []);
}

console.time('time')
console.log('2', unique2(ary));     // 一到两毫秒之间
console.timeEnd('time')

// 方法三: forEach
function unique3(arr) {
  let ary = [];
  arr.forEach((cur) => {
    // 1
    !ary.includes(cur) && ary.push(cur);
    // 2
    // if (ary.indexOf(cur) === -1) ary.push(cur);
  });
  return ary;
}

console.time('time')
console.log('3', unique3(ary));     // 0.4+  < 1
console.timeEnd('time')

// 方法四：filter
function unique4(arr) {
  let ary = arr.filter((cur, idx) => {
    return arr.indexOf(cur) === idx;
  });
  return ary;
}

console.time('time')
console.log('4', unique4(ary));     // 0.5- < 0.6
console.timeEnd('time')

// 方法五：利用对象属性的不重复性
let unique5 = (arr) => {
  let map = new Map();
  let brr = [];
  arr.forEach((item) => {
    if (!map.has(item)) {
      map.set(item, true);
      brr.push(item);
    }
  });
  return brr;
};
console.time('time')
console.log(unique5(ary));      // 1 毫秒 上下
console.timeEnd('time')


// 方法六：
console.time('str')
let copyAry = ary.sort((a, b) => a - b)

function clearRepeat(arr) {
  let result = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    arr[i] !== result[result.length - 1] && result.push(arr[i])  // 只有result数组中不存在该元素，才会被push
  }
  return result
}

console.log('clearRepeat', clearRepeat(copyAry))      // 0.5 上下
console.timeEnd('str')

// 方法七：

