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


// 给你一个 无重复元素 的整数数组candidates 和一个目标整数target，找出candidates中可以使数字和为目标数target 的 所有不同组合，并以列表形式返回。
// 你可以按任意顺序 返回这些组合。
// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。

// 示例：
// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]
// 解释：
// 2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
// 7 也是一个候选， 7 = 7 。
// 仅有这两种组合。

const combinationSum = (candidates, target) => {
  const ret = [], path = []
  candidates.sort()
  backtracking(0, 0)
  return ret

  function backtracking(j, sum) {
    if (sum > target) return    // 如果已经大于规定的求和目标值 返回
    if (sum === target) {
      ret.push([...path])   // 将符合目标值的组合推进结果集中
      return;
    }
    for (let i = j; i < candidates.length && sum + candidates[i] <= target; i++) {  //sum + candidates[i] <= target ；当大于target时，就没有必要再向后查找了（在一开始我们做了排序操作，所以当和较小值组合已经大于目标值，则之后的参数已经没有必要再进行一个组合测试）
      const n = candidates[i]
      if (n > target - sum) continue;
      path.push(n)
      sum += n
      backtracking(i, sum)
      path.pop()
      sum -= n
    }
  }
}
console.log('combinationSum：', combinationSum([2, 3, 6, 7], 9))


// 给定一个字符串 string，需将 string 分割成一些字串，使每一个字串都是回文串且返回所有可能的分割方// 例一：
// 输入：s = "aab"
// 输出：[["a","a","b"],["aa","b"]]

const solution = (str) => {

  let result = [], path = []


  function isPalindrome(str, startIndex, end) {
    for (let i = startIndex, j = end; i < j; i++, j--) {
      if (str.charAt(i) !== str.charAt(j)) {
        return false;
      }
    }
    return true
  }

  const backtracking = (str, startIndex) => {
    //  如果起始位置大于str的大小，说明找到了一组分割方案
    if (startIndex >= str.length) {
      result.push([...path])
      return
    }

    for (let i = startIndex; i < str.length; i++) {
      //  将满足回文串要求的字符串收集
      if (isPalindrome(str, startIndex, i)) {
        let s = str.substring(startIndex, i + 1)
        path.push(s)
      } else {
        continue
      }
      //  起始位置后移 保证数字不被重复切割
      backtracking(str, i + 1)
      path.pop()
      return
    }
  }
  backtracking(str, 0)
  return result
}
let str = 'aab'
console.log(solution(str))
