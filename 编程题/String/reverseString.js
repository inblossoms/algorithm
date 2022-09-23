// 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
// 要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

const reverseStr = (s) => {
  reverse(s);
  return s;
};

function reverse(params) {
  let lf = -1,
    rt = params.length;

  while (++lf < --rt) {
    if (params[lf] === params[rt]) continue;
    [params[lf], params[rt]] = [params[rt], params[lf]];
  }
  return params;
}

console.log(reverseStr("hellow"));
