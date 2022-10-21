// 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。

function topKFrequent(nums: number[], k: number): number[] {
  const countMap: Map<number, number> = new Map();

  for (const i of nums) {
    countMap.set(i, (countMap.get(i) || 0) + 1);
  }

  return [...countMap.entries()]
    .sort((v1, v2) => v2[1] - v1[1])
    .slice(0, k)
    .map((i) => i[0]);
}

console.log(topKFrequent([1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4], 2));
