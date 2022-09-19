/**
 * 题目：给定一个含有 n 个正整数的数组和正整数 target，找出数组中满足 >= target 的最小长度的
 *     连续子数组且返回其长度，不能存符合条件的子数组返回 0
 */

// Tip：滑动窗口，解题思路：如何通过一个循环找到 最小长度子数组
// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

const minimumLengthSubarray = (nums, target) => {
  const len = nums.length
  let lf, rt, sum,
    retLen = Infinity
  lf = rt = sum = 0
  while (rt < len) {   // 定义数组边界值
    sum += nums[rt++];
    while (sum >= target) {
      retLen = retLen < rt - lf ? retLen : rt - lf;   // 选择最小长度子数组
      sum -= nums[lf++];  // 缩小搜索范围
    }
  }
  return retLen > len ? 0 : retLen;
};


let nums = [2, 3, 1, 2, 4, 3]
console.log(minimumLengthSubarray(nums, 7));
