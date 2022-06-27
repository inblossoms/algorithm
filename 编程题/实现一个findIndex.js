// 二分查找

function findIndex(arr, target) {
  const len = arr.length;
  let left = 0;
  let right = len - 1;

  let ret = -1;
  while (left <= right) {
    const middle = ((right - left) >> 1) + left;
    const val = arr[middle];
    if (val >= target) {
      if (val === target) {
        ret = middle;
      }
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return ret;
}
