/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
		有效字符串需满足：
		左括号必须用相同类型的右括号闭合。
		左括号必须以正确的顺序闭合。
		注意空字符串可被认为是有效字符串。
*/

function isValid(s: string): boolean {
  type BracketMap = {
    [index: string]: string;
  };

  const helperStack: string[] = [];
  const bracketMap: BracketMap = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const i of s) {
    if (bracketMap.hasOwnProperty(i)) {
      helperStack.push(bracketMap[i]);
    } else if (i !== helperStack.pop()) {
      return false;
    }
  }

  return helperStack.length === 0;
}

console.log(isValid("()"));
