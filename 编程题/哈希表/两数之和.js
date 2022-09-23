// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。但是数组元素不可以重复使用。

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]

const twosum = (sums, target) => {
  const helperObj = new Map(),
    retArr = [];
  let index;

  for (let i = 0, len = sums.length; i < len; i++) {
    index = helperObj.get(target - sums[i]); // 如果 map 集合中没有目标值，则此时index为undefined
    if (index !== undefined) return [index, i];
    helperObj.set(sums[i], i); // 将 当前值作为键 索引作为值
  }

  return retArr;
};
console.log(twosum([2, 3, 4, 1, 6], 10));
