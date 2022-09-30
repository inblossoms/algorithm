//  重复字符串：如果目标是字符串是由重复子串组成的，那么重复子串的最小单位就是这个字符串里最长相等前后缀所不包含的那个子串组成

// 前缀表统一减一
function repeatedSubstringPattern(str: string): boolean {
  function getNext(str: string): number[] {
    let next: number[] = [],
      j: number = -1;
    next[0] = j;

    for (let i = 1, len = str.length; i < len; i++) {
      while (j >= 0 && str[i] !== str[j + 1]) j = next[j];
      if (str[i] === str[j + 1]) j++;
      next[i] = j;
    }

    return next;
  }

  let next: number[] = getNext(str),
    sLen: number = str.length,
    nextLen: number = next.length,
    suffixLen: number = next[nextLen - 1] + 1; //  最长相等前后缀

  if (suffixLen > 0 && sLen % (sLen - suffixLen) === 0) return true;
  return false;
}

console.log(repeatedSubstringPattern("ababa"));
