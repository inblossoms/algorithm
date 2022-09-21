/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？
 * 请你找出所有满足条件且不重复的三元组，但是不同三元组内的元素可以重复使用
 */

// 示例：
// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
// 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
const threesum = (nums) => {
  nums.sort((v1, v2) => v1 - v2);
  if (nums[0] > 0) return;
  let len = nums.length,
    lf = 0,
    rt = len - 1,
    retArr = [];

  for (let i = 0; i < len; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 满足三元组中的元素不重复

    (lf = i + 1), (rt = len - 1);
    while (lf < rt) {
      let sum = nums[i] + nums[lf] + nums[rt];
      if (sum === 0) {
        retArr.push([nums[i], nums[lf], nums[rt]]); // 收集所有符合要求的三元组
        lf++, rt--; // 移动左右指针 搜集剩余符合条件的元素g
        while (nums[lf] === nums[lf - 1]) lf++; // 对做指针所指元素去重
        while (nums[rt] === nums[rt + 1]) rt--;
      } else if (sum > 0) {
        rt--;
      } else {
        lf++;
      }
    }
  }
  return retArr;
};

console.log(threesum([1, -1, -3, 6, 3, 4, -2, -4, 0, 4, -5, -3]));

var threeSum = function (nums) {
  const res = [],
    len = nums.length;
  // 将数组排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    let l = i + 1,
      r = len - 1,
      iNum = nums[i];
    // 数组排过序，如果第一个数大于0直接返回res
    if (iNum > 0) return res;
    // 去重
    if (iNum == nums[i - 1]) continue;
    while (l < r) {
      let lNum = nums[l],
        rNum = nums[r],
        threeSum = iNum + lNum + rNum;
      // 三数之和小于0，则左指针向右移动
      if (threeSum < 0) l++;
      else if (threeSum > 0) r--;
      else {
        res.push([iNum, lNum, rNum]);
        // 去重
        while (l < r && nums[l] == nums[l + 1]) {
          l++;
        }
        while (l < r && nums[r] == nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }
  return res;
};
console.log(threeSum([1, -1, -3, 6, 3, 4, -2, -4, 0, 4, -5, -3]));
