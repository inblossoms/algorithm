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
var test = ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]];
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
let arr = ["a", "b", "c", "d", ,];
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
var test = ["a", ["b", "c"], ["d", ["e", ["f"]], "g"]];
flattenDeep(animals);
// ["a", "b", "c", "d", "e", "f", "g"]

// Tip 数组去重
// 方法一：Set
let unique = (arr) => [...new Set(arr)];

// 方法二：reduce
function unique(arr) {
  return arr.sort().reduce((acc, cur) => {
    if (acc[length] === 0 || acc[acc[length - 1]] !== cur) acc.push(cur);
    return acc;
  }, []);
}

// 方法三: forEach
function unique(arr) {
  let ary = [];
  arr.forEach((cur) => {
    // 1
    if (!ary.includes(cur)) ary.push(cur);
    // 2
    // if (ary.indexOf(cur) === -1) ary.push(cur);
  });
  return ary;
}

// 方法四：filter
function unique(arr) {
  let ary = arr.filter((cur, idx) => {
    return arr.indexOf(cur) === idx;
  });
  return ary;
}

// 方法五：利用对象属性的不重复性

let unique = (arr) => {
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
let arr = [1, 2, 3, 3, 2, 4, 4];
console.log(unique(arr));
