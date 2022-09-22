//给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。

// 为了使问题简单化，所有的 A, B, C, D 具有相同的长度 N，且 0 ≤ N ≤ 500 。所有整数的范围在 -2^28 到 2^28 - 1 之间，最终结果不会超过 2^31 - 1 。
const fourSumCount = (nums1, nums2, nums3, nums4) => {
  let helperMap = new Map(),
    retNum = 0,
    tempVal = 0;

  for (const i of nums1) {
    for (const j of nums2) {
      tempVal = helperMap.get(i + j);
      // helperMap.set(i + j, (helperMap.get(tempVal) || 0) + 1);
      helperMap.set(i + j, tempVal ? tempVal + 1 : 1); // 当 tempVal 不存在时默认为1， 存在时则+1
    }
  }

  for (const k of nums3) {
    for (const l of nums4) {
      tempVal = helperMap.get(0 - (k + l));
      if (tempVal) retNum += tempVal;
    }
  }
  console.log(helperMap.entries());
  return retNum;
};

console.log(fourSumCount([1, 2], [-2, -1], [-1, 2], [0, 2]));
