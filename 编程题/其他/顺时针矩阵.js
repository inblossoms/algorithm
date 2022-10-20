// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

// 示例 1：
// 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
// 输出：[1,2,3,6,9,8,7,4,5]

// 示例 2：
// 输入：matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// 输出：[1,2,3,4,8,12,11,10,9,5,6,7]

// 限制：
// 0 <= matrix.length <= 100;/
// 0 <= matrix[i].length <= 100;

var spiralOrder = function (matrix) {
  if (matrix === undefined || matrix.length === 0) return [];
  let res = [];
  let left = 0,
    right = matrix[0].length - 1,
    up = 0,
    down = matrix.length - 1;
  while (true) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[up][i]);
    }
    if (++up > down) break;
    for (let i = up; i <= down; i++) {
      res.push(matrix[i][right]);
    }
    if (--right < left) break;
    for (let i = right; i >= left; i--) {
      res.push(matrix[down][i]);
    }
    if (--down < up) break;
    for (let i = down; i >= up; i--) {
      res.push(matrix[i][left]);
    }
    if (++left > right) break;
  }
  return res;
};
