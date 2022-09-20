/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
		示例 1: 输入: s = "anagram", t = "nagaram" 输出: true
		示例 2: 输入: s = "rat", t = "car" 输出: false
 */

const anagram = (s, t) => {
  if (s.length !== t.length) return false;
  const helperArr = new Array(26).fill(0),
    pivot = "a".charCodeAt(0);

  for (let i = 0, len = s.length; i < len; i++) {
    helperArr[s.charCodeAt(i) - pivot]++;
    helperArr[t.charCodeAt(i) - pivot]--;
  }

  return helperArr.every((i) => i === 0);
};

console.log(anagram("asdf", "adsf"));
