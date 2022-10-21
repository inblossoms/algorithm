/**
 * 给出由小写字母组成的字符串 S，重复项删除操作会选择两个相邻且相同的字母，并删除它们。
 * 示例：
		输入："abbaca"
		输出："ca"
 */

const removeDuplicates = function (s: string): string {
  const hlperStack: string[] = [];

  for (const i of s) {
    let code: any = null,
      len: number = hlperStack.length;
    if (len && i === (code = hlperStack.pop())) continue;
    code && hlperStack.push(code);
    hlperStack.push(i);
  }

  return hlperStack.join("");
};

let n = removeDuplicates("abbaca");
console.log(n);
