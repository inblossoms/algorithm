// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
// 你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

const reverseString = (s: string[]): any => {
  const len: number = s.length;
  let lf: number = -1,
    rt: number = len;

  while (++lf < --rt) {
    if (s[lf] === s[rt]) continue;
    [s[lf], s[rt]] = [s[rt], s[lf]];
  }

  return s;
};

console.log(reverseString(["h", "l", "e", "a", "l", "o"]));
// const reverseStr = (s) => {
//   reverse(s);
//   return s;
// };

// function reverse(params) {
//   let lf = -1,
//     rt = params.length;

//   while (++lf < --rt) {
//     if (params[lf] === params[rt]) continue;
//     [params[lf], params[rt]] = [params[rt], params[lf]];
//   }
//   return params;
// }
