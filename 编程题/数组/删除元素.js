// 通过双指针进行移除操作

const removeEle = (nums, target) => {
  let slowIdx = 0, len = nums.length
  for (let fastIdx = 0; fastIdx < len; fastIdx++) {
    if (nums[fastIdx] !== target) {
      nums[slowIdx++] = nums[fastIdx]
    }
  }
  return slowIdx
}

let nums = [12, 34, 24, 43, 546, 76, 81, 34, 22, 34]
console.log(removeEle(nums,546));
