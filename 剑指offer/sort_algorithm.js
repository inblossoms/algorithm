import {less, swapTowValue} from './tools.js';

let arr = [1, 33, 43, 12, 2, 21, 324]

/**
 * 冒泡排序：比较相邻的两个元素，如果第一个比第二个大，就交换他们两个。
 * 平均时间复杂度：O(n^2)
 * 最好情况：O(n)
 * 最坏情况：O(n^2)
 * 空间复杂度：O(1)
 * 排序方式：in-place
 * 稳定性：稳定
 */
function bubbleSort(arr) {
  if (arr == null || arr.length <= 1) return

  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapTowValue(arr, j, j + 1)
      }
    }
  }
  return arr
}

console.log('bubbleSort:', bubbleSort(arr))


/**
 * 选择排序：将序列中最大（小）的值排序到起始位置，然后将未排序的值排序到已排序序列的末尾，重复该操作。
 *        任何数据通过选择排序都是 O(n^2) 的时间复杂度。
 * 平均时间复杂度：O(n^2)
 * 最好情况：O(n^2)
 * 最坏情况：O(n^2)
 * 空间复杂度：O(1)
 * 排序式：in-place
 * 稳定性：不稳定
 */
const selectionSort = (arr) => {
  if (arr == null || arr.length <= 1) return

  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let idx = i
    for (let j = i + 1; j < len; j++) {
      if (arr[idx] > arr[j]) idx = j          // 找到从当前位置之后剩余数值中最小值的索引
    }
    swapTowValue(arr, i, idx)
  }
  return arr
}

console.log('selectionSort:', selectionSort(arr))

/**
 * 插入排序：从当前值开始，看左侧值是否大于当前值，循环直到当前值大于左侧值位置。
 * 平均时间复杂度：O(n^2)
 * 最好情况：O(n)
 * 最坏情况：O(n^2)
 * 空间复杂度：O(1)
 * 排序方式：in-place
 * 稳定性：稳定
 */
const insertSort = (arr) => {
  if (arr == null || arr.length <= 1) return

  const len = arr.length
  let preIdx, current
  for (let i = 1; i < len; i++) {
    preIdx = i - 1
    current = arr[i]
    while (preIdx > 0 && current < arr[preIdx]) {
      arr[preIdx + 1] = arr[preIdx]       // 只要当前值小于上一个值 就用当前值将上一个值替换
      preIdx--               // 移动指针位置 保证当前循环所比较的值的正确性
    }
    arr[preIdx + 1] = current
  }
  return arr
}

console.log('insertSort:', insertSort(arr))

/**
 * 希尔排序：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录"基本有序"时，
 *         再对全体记录进行依次直接插入排序。
 * 平均时间复杂度：O(n log n)
 * 最好情况：O(n log^2 n)
 * 最坏情况：O(n log^2 n)
 * 空间复杂度：O(1)
 * 排序方式：in-place
 * 稳定性：不稳定
 */

const shellSort = (arr) => {
  if (arr == null || arr.length <= 1) return

  let N = arr.length,
    gap = 1;
  while (gap < N / 3) {
    gap = gap * 3 + 1
  }         // 动态定义间隔的增量序列 （算法4给出的初始逻辑）
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {       // 处于性能考虑的写法：可以判断gap >= 1  gap / 2 也可
    for (let i = gap; i < N; i++) {         // 表示：每一次跳跃一个当前gap，然后依次为后续参数做插入
      for (let j = i; j >= gap && less(arr, j, j - gap); j -= gap) {        // 这里就是插入排序
        swapTowValue(arr, j, j - gap)
      }
    }
  }
  return arr
}

console.log('shellSort:', shellSort(arr))

/**
 * 归并排序：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录"基本有序"时，
 *         再对全体记录进行依次直接插入排序。
 * 平均时间复杂度：O(n log n)
 * 最好情况：O(n log n)
 * 最坏情况：O(n log n)
 * 空间复杂度：O(n)
 * 排序方式：out-place
 * 稳定性：稳定
 */

const mergeSort = (arr) => {
  let len = arr.length
  if (len < 2) return arr

//  将数组进行拆分
  let mid = Math.floor(len >> 1),
    leftAry = arr.slice(0, mid),
    rightAry = arr.slice(mid)
  return merge(mergeSort(leftAry), mergeSort(rightAry))     // 每一次的拆分都进行一次合并

  function merge(l, r) {
    let ary = []
    while (l.length && r.length) l[0] < r[0] ? ary.push(l.shift()) : ary.push(r.shift())
    while (l.length) ary.push(l.shift())
    while (r.length) ary.push(r.shift())

    return ary
  }
}

console.log('mergeSort:', mergeSort(arr))











