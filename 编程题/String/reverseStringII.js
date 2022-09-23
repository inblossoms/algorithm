// 给定一个字符串 s 和一个整数 k，从字符串开头算起, 每计数至 2k 个字符，就反转这 2k 个字符中的前 k 个字符。
// 如果剩余字符少于 k 个，则将剩余字符全部反转。
// 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。

// 示例:
// 输入: s = "abcdefg", k = 2
// 输出: "bacdfeg"

const reverseString = (s, k) => {
  const len = s.length;
  let ret = s.split("");
  for (let i = 0; i < len; i += 2 * k) {
    let lf = i - 1,
      rt = i + k > len ? len : i + k;

    while (++lf < --rt) {
      if (ret[lf] === ret[rt]) continue;
      [ret[lf], ret[rt]] = [ret[rt], ret[lf]];
    }
  }
  return ret.join("");
};

console.log(reverseString("abcdefghigklmn", 4));
