// 提供一个包含负数的有序数组，返回一个新数组，数组内容是原数组成员的平方且有序

// 暴力思路
let result
const sortedSquares = nums => result = nums.map((item) => item ** 2).sort((a, b) => a - b)


// 双指针解决思路
const squareOfAnOrderAry = (nums) => {
  const ret = []
  let left = 0, right = nums.length - 1

  while (left <= right) {
    // 右侧的元素不需要取绝对值，nums 为非递减排序的整数数组
    // 在同为负数的情况下，左侧的平方值一定大于右侧的平方值
    Math.abs(nums[left]) > nums[right] ?
      ret.unshift(nums[left++] ** 2) :
      ret.unshift(nums[right--] ** 2)
  }

  return ret
}


let nums = [-6, -3, 1, 2, 4, 5]
console.log(sortedSquares(nums));
console.log(squareOfAnOrderAry(nums));
