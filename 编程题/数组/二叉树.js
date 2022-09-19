// Tip：返回目标值在数组中的索引，如果未找到则返回-1

// 左闭右闭

let Ary = [12, 32, 54, 71, 52, 34, 67, 85, 23, 41]

const search = function (nums, target) {
  // right是数组最后一个数的下标，num[right]在查找范围内，是左闭右闭区间
  let mid, left = 0, right = nums.length - 1;
  // 当left=right时，由于nums[right]在查找范围内，所以要包括此情况
  while (left <= right) {
    // 位运算 + 防止大数溢出
    mid = left + ((right - left) >> 1); // 左边界值处于更新状态，所以mid的取值需要加上left左边界值以保证mid的准确性
    // 如果中间数大于目标值，要把中间数排除查找范围，所以右边界更新为mid-1；如果右边界更新为mid，那中间数还在下次查找范围内
    if (nums[mid] > target) {
      right = mid - 1;  // 去左面闭区间寻找
    } else if (nums[mid] < target) {
      left = mid + 1;   // 去右面闭区间寻找
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(search(Ary, 12));

// 左闭右开
const binarySearch = (nums, target) => {
  let middle, left = 0, right = nums.length - 1

  while (left < right) {
    middle = left + ((right - left) >> 1)
    if (nums[middle] > target) {
      right = middle
    } else if (nums[middle] < target) {
      left = middle + 1
    } else {
      return middle
    }
  }
  return -1
}

console.log(binarySearch(Ary, 12));
