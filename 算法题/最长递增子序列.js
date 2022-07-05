// Tip 通过两层循环找出在每一个位置上的最长递增子序列  时间复杂度 O(n^2)
function sequence(ary) {
  let seq = new Array(ary.length).fill(1);
  if (ary.length === 1) return `最长递增子序列长度为：1`;

  let ret = 1;
  for (let i = 1; i < ary.length; i++) {
    for (let j = 0; j < i; j++) {
      if (ary[j] < ary[i]) {
        seq[i] = Math.max(seq[j] + 1, seq[i]);
        console.log(seq);
      }
    }
    ret = Math.max(seq[i], ret);
  }

  return `最长递增子序列长度为：${ret}`;
}

let numbers = [2, 6, 5, 3, 9];
console.log(sequence(numbers));
