let str = 'lengthOfLongestSubstring'

// 目标： 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
const lengthOfLongestSubstring = (str) => {
  let Str = '', ret = []
  // 1. 获取到字符串的每一个字母
  for (const s of str) {
    // 2. 将所有不含重复字符的子串，压入数组
    let idx =  Str.indexOf(s)
    if (idx === -1) {
      Str += s
    } else {
      ret.push(Str)
      Str = Str.substring(str)
    }
  }
  ret.push(Str)
  ret.sort((pre, cur)=>{return pre.length - cur.length})
  return ret[0]
}


console.log('lengthOfLongestSubstring：----',lengthOfLongestSubstring(str))

// 第一个只出现一次的字符，如果没有则返回单个空格
const firstUniqueChar = (str) => {
  let ary = []
  for (const s of str) !ary[s] ? ary[s] = 1 : ary[s]++
  for (const s in ary) {
    if (ary[s] === 1) return s
  }
  return ""
}

console.log('firstUniqueChar：----', firstUniqueChar(str))

// 连续数组
// 创建一个哈希表，用 keykey 来储存 curcur 值, valuevalue 来储存当前 indexindex。
// 假设我们碰到0就将 curcur decrementdecrement (减一), 碰到1则incrementincrement (加一)。
// 如果我们能在哈希表中找到当前的 curcur 值, 则取出对应的 pospos, 在看当前的 index - pos 是否比 ans 大, 取其中的最优解。
// 核心：由于以上碰1加一，碰0减一的操作，当0与1数量一致时(连续数组), 其连续数组的和为零。因此我们知道数组前面的 curcur 值是什么，
// 在到达该连续数组尾部时就不会变。因此我们只需要检查哈希表中是否存在其相同的 curcur 值即可！

const findMaxLength = function(nums) {
  let maxLength = 0;
  const map = new Map();
  let counter = 0;
  map.set(counter, -1);
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    const num = nums[i];
    if (num === 1) {
      counter++;
    } else {
      counter--;
    }
    if (map.has(counter)) {
      const prevIndex = map.get(counter);
      maxLength = Math.max(maxLength, i - prevIndex);
    } else {
      map.set(counter, i);
    }
  }
  return maxLength;
};
// 输入（[0,0,1,0,0,0,1,1]）

let nums = [0, 0, 1, 0, 0, 0, 1, 1];
console.log(findMaxLength(nums))










