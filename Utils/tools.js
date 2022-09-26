// 交换两数值
export const swapTowValue = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

// 比较两数值的大小：如若 v1 < v2 则返回 true
export const less = (arr, v1, v2) => {
  return arr[v1] < arr[v2];
};
