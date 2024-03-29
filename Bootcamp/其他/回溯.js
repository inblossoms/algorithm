/**
 * 回溯：回溯算法和递归是相辅相成的，它的逻辑通常出现在递归调用逻辑的下方。
 *     纯暴力解法，在时间复杂度上不占优势，适用于：组合、切割、子集、排列、棋盘等算法环境；
 *
 */

function backtracking(param:'参数') {
  if ('终止条件') {
    `存放结果`;
    return;
  }

  for (`选择：本层集合中元素（树中节点孩子的数量就是集合的大小）`) {
    `处理节点`;
    backtracking('路径，选择列表'); // 递归
    `回溯，撤销处理结果`;
  }
}


