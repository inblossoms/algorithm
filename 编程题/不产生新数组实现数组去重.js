// 1. 排序去重
const removeDuplicates = (nums) => {
  // 原地排序
  nums.sort();
  // 去重
  let len = 1;
  for (let i = 1; i < nums.length; i++)
    if (nums[i] != nums[i - 1]) nums[len++] = nums[i];
  // 删除重复项
  nums.splice(len);
  return nums;
};

// 测试
removeDuplicates([1, 2, 3, 1, 3]);
// [1, 2, 3]

// 2. 优化
const removeDuplicates = (nums) => {
  let len = nums.length - 1;
  for (let i = len; i >= 0; i--) {
    if (nums.indexOf(nums[i]) != i) {
      nums[i] = nums[len--];
    }
  }
  // 删除重复项
  nums.splice(len + 1);
  return nums;
};
// 测试
removeDuplicates([1, 2, 3, 1, 3]);
// [1, 2, 3]
