//Tip：  返回给定两数组它们的交集。输出结果的元素是唯一的

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
// 解释：[4,9] 也是可通过的

const intersection = (nums1, nums2) => {
  const helperArr = new Set(nums1),
    retArr = new Set();

  for (let i = nums2.length - 1; i > 0; i--)
    helperArr.has(nums2[i]) && retArr.add(nums2[i]);

  return Array.from(retArr);
};

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
