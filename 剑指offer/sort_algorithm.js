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
      if(arr[j] > arr[j + 1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}
let arr = [1,33,43,12,2,21,324]
console.log(bubbleSort(arr))


/**
 * 选择排序：
 * 平均时间复杂度：O(n^2)
 * 最好情况：O(n^2)
 * 最坏情况：O(n^2)
 * 空间复杂度：O(1)
 * 排序方式：in-place
 * 稳定性：不稳定
 */
