// KMP  求字符串匹配问题，思想是：当出现字符串不匹配时，可以记录一部分之前已经匹配的文本内容，利用这些信息避免从头再次做匹配
// 		算法的核心是：通过查找前缀表中最长相等前后缀
// 		会有一个 next 数组用于存储最长前后缀，通常 next 数组的实现分为两种情况：相等前后缀索引右移、相等前后缀索引减一，相等前后缀不相等添砖前一位数值所对应索引

// 前缀表不减一：索引即next
function IndexOf(haystack: string, needle: string): number {
  function getNext(str: string): number[] {
    let next: number[] = [],
      j: number = 0; // 前缀末尾的位置，同时也是后缀末尾之前包括末尾的位置的最大相等前后缀
    next[0] = j;

    for (let i = 1, length = str.length; i < length; i++) {
      while (j > 0 && str[i] !== str[j]) j = next[j - 1];
      if (str[i] === str[j]) j++;
      next[i] = j;
    }

    return next;
  }

  if (needle.length === 0) return 0;
  let next: number[] = getNext(needle),
    j: number = 0;

  for (let i = 0, length = haystack.length; i < length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) j = next[j - 1];
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) return i - j; // lo 在 hello 的 4 - 2 的位置，返回索引 2
      j++;
    }
  }

  return -1;
}

console.log(IndexOf("hello", "lo"));
