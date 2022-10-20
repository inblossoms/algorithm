// Tip 实现一个 render(template, context) 方法，将 template 中的占位符用 context 填充。

// 示例：
var template = "{{name}}很厉害，才{{age}}岁";
var context = { name: "bottle", age: "15" };

// 输入：template context
// 输出：bottle很厉害，才15岁

// 要求：
// 级联的变量也可以展开
// 分隔符与变量之间允许有空白字符

// Tip 解答：使用正则 + trim
// 利用非贪婪匹配 /\{\{(.*?)\}\}/g 匹配到到所有的 {{name}}，{{age}}
// 利用 str.replace(regexp|substr, newSubStr|function) ，其中第二个参数可以是 fucntion (replacement) ，该函数的返回值将替换掉第一个参数匹配到的结果，将所有匹配到的字符替换成指定的字符
// 最后，String.proto、type.trim() 去除分隔符与变量之间空白字符
var template = "{{name}}很厉害，才{{age}}岁";
var context = { name: "bottle", age: "15" };
function render(template, context) {
  return template.replace(/{{(.*?)}}/g, (match, key) => context[key.trim()]);
}
render(template, context);
// "bottle很厉害，才15岁"
