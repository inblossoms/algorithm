/**
 * 逆波兰表达式主要有以下两个优点：
			去掉括号后表达式无歧义，上式即便写成 1 2 + 3 4 + * 也可以依据次序计算出正确结果。
			适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。
 */

const evalRPN = function (tokens: string[]): number {
  const hlperStack: number[] = [];
  const operatorMap: Map<string, (a: number, b: number) => number> = new Map([
    ["+", (a, b) => a + b],
    ["-", (a, b) => a - b],
    ["*", (a, b) => a * b],
    ["/", (a, b) => Math.trunc(a / b)],
  ]);

  let a: number, b: number;
  for (let i of tokens) {
    if (operatorMap.has(i)) {
      b = hlperStack.pop()!;
      a = hlperStack.pop()!;
      hlperStack.push(operatorMap.get(i)!(a, b));
    } else {
      hlperStack.push(Number(i));
    }
  }

  return hlperStack.pop()!;
};
