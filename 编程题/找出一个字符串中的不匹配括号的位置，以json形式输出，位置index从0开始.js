// 异常输入
// ${{(3+5)*2+(5/(24)}

// 输出
// {
//     1: '{',
//     11: '(',
// }

// 正常输入
// [a+b]/${x}

// 输出
// {}

// 解答：利用栈结构
// 解题思路： 将字符串中的字符依次入栈，遍历字符依次判断：

// 首先判断该元素是否括号，不是则遍历下一个字符
// 是 { 、 ( 、 [ ，直接入栈
// 否则该字符为 } 、 ) 、 ] 中的一种，
// 如果栈为空，则当前右括号无匹配左括号，直接写进结果数组，并遍历下一个字符
// 栈顶元素出栈，判断当前元素是否与出栈元素匹配，例如栈中元素有 ({， 如果继续遍历到的元素为 ), 那么当前元素序列为 ({) 是不可能有效的，所以此时与出栈元素匹配失败，将出栈元素写进结果数组，并继续匹配当前元素
// 当遍历完成时，所有已匹配的字符都已匹配出栈，如果栈不为空，说明字符串中还有未匹配的左括号字符，则将栈元素直接写进结果数组

let getUnmatchJson = function (s) {
  let map = {
    "{": "}",
    "(": ")",
    "[": "]",
  };
  let stack = [],
    brackets = "{[()]}",
    result = {};
  for (let i = 0; i < s.length; i++) {
    // 如果不是括号，跳过
    if (brackets.indexOf(s[i]) === -1) continue;
    // 如果是左括号，则进栈
    if (map[s[i]]) {
      stack.push({
        char: s[i],
        index: i,
      });
    } else {
      // 如果是右括号，则出栈匹配
      if (!stack.length) {
        //如果栈为 null ，则表示没有匹配的左括号，则当前有括号直接进结果数组
        result[i] = s[i];
        continue;
      }
      // 出栈
      let temp = stack.pop();
      // 括号不匹配
      if (s[i] !== map[temp.char]) {
        // 不匹配左括号进结果数组，并i--，继续匹配当前字符
        result[temp.index] = temp.char;
        i--;
      }
    }
  }
  // 如果匹配结束，依然有剩余的左括号，则直接进结果数组
  while (stack.length) {
    let temp = stack.pop();
    result[temp.index] = temp.char;
  }
  return result;
};

let s1 = "${{(3+5)*2+(5/(24)}";
let s2 = "[a+b]/${x}";
let s3 = "${(3+5)*2+(5/(24)}(}";
console.log(getUnmatchJson(s1)); // {1: "{", 11: "("}
console.log(getUnmatchJson(s2)); // {}
console.log(getUnmatchJson(s3)); // {10: "(", 18: "(", 19: "}"}
