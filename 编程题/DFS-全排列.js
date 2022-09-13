// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// 示例 1：
// 输入：
let nums = [1, 2, 3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 示例 2：
// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]

// 示例 3：
// 输入：nums = [1]
// 输出：[[1]]

// 提示：
// 1 <= nums.length <= 6
// -10 <= nums[i] <= 10
// nums 中的所有整数 互不相同

const permute = (nums) => {
  let res = []
  const dfs = (area) => {
    // 出口条件
    if (area.length === nums.length) {
      //将结果放进数组里
      res.push([...area])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      //减少重复的遍历
      if (area.includes(nums[i])) continue
      area.push(nums[i])
      dfs(area)
      // 最后结果出栈
      area.pop()
    }
  }
  dfs([])
  return res
}
console.log(permute(nums))

// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 示例 1：
// 输入：n = 4, k = 2
// 输出：
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

// 示例 2：
// 输入：n = 1, k = 1
// 输出：[[1]]

// 提示：
// 1 <= n <= 20
// 1 <= k <= n

let result = [], path = []
const backtracking = (n, k, stackIndex) => {
  if (path.length === k) {
    result.push([...path])
    return
  }

  for (let i = stackIndex; i <= n; i++) {
    path.push(i)
    backtracking(n, k, i + 1)
    path.pop()
  }
}
console.time('time')
backtracking(4, 2, 1)
console.timeEnd('time')
console.log(result)

// 回溯优化：减枝
let ret = [], paths = []

function backtracking_optimization(n, k, stackIndex) {
  if (paths.length === k) {
    ret.push([...paths])
    return
  }
  // 减枝的意图在于去除没必要的查询
  /* k - paths.length：缺少多少个元素满足条件， +1：i的起始位置是1开始的，n - (k - paths.length) + 1：满足最小搜索长度 */
  for (let i = stackIndex; i <= n - (k - paths.length) + 1; i++) {
    paths.push(i)
    backtracking_optimization(n, k, i + 1)
    paths.pop()
  }
}

console.time('time')
backtracking_optimization(4, 2, 1)
console.timeEnd('time')
console.log(ret)
