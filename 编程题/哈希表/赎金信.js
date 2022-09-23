// 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。

// (题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const strArr = new Array(26).fill(0),
    base = "a".charCodeAt();
  for (const s of magazine) {
    strArr[s.charCodeAt() - base]++;
  }
  for (const s of ransomNote) {
    const index = s.charCodeAt() - base;
    if (!strArr[index]) return false;
    strArr[index]--;
  }
  return true;
};

console.log(canConstruct("asd", "fdas"));
