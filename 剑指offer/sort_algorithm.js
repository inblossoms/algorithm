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
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

let arr1 = [1, 33, 43, 12, 2, 21, 324]
console.log(bubbleSort(arr1))


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
  const len = arr.length
  for (let i = 0; i < len - 1; i++) {
    let idx = i
    for (let j = i + 1; j < len; j++) {
      if (arr[idx] > arr[j]) idx = j
    }
    let temp = arr[i]
    arr[i] = arr[idx]
    arr[idx] = temp
  }
  return arr
}

let arr2 = [1, 33, 43, 12, 2, 21, 324]
console.log(selectionSort(arr2))

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
  const len = arr.length
  let preIdx, current
  for (let i = 1; i < len; i++) {
    preIdx = i - 1
    current = arr[i]
    while (preIdx > 0 && current < arr[preIdx]) {
      arr[preIdx + 1] = arr[preIdx]
      preIdx--               // 移动指针位置 保证当前循环所比较的值的正确性
    }
    arr[preIdx + 1] = current
  }
  return arr
}

let arr3 = [1, 33, 43, 12, 2, 21, 324]
console.log(insertSort(arr3))

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





