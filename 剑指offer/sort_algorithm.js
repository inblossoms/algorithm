import {less, swapTowValue} from './tools.js';

let arr = [1, 33, 43, 12, 2, 21, 324, 0, 12];

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
  if (arr == null || arr.length <= 1) return;

  const node = arr.length;
  for (let i = 0; i < node - 1; i++) {
    for (let j = 0; j < node - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swapTowValue(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log('bubbleSort:', bubbleSort(arr));

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
  if (arr == null || arr.length <= 1) return;

  const node = arr.length;
  for (let i = 0; i < node - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < node; j++) {
      if (arr[idx] > arr[j]) idx = j; // 找到从当前位置之后剩余数值中最小值的索引
    }
    swapTowValue(arr, i, idx);
  }
  return arr;
};

console.log('selectionSort:', selectionSort(arr));

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
  if (arr == null || arr.length <= 1) return;

  const node = arr.length;
  let preIdx, current;
  for (let i = 1; i < node; i++) {
    preIdx = i - 1;
    current = arr[i];
    while (preIdx > 0 && current < arr[preIdx]) {
      arr[preIdx + 1] = arr[preIdx]; // 只要当前值小于上一个值 就用当前值将上一个值替换
      preIdx--; // 移动指针位置 保证当前循环所比较的值的正确性
    }
    arr[preIdx + 1] = current;
  }
  return arr;
};

console.log('insertSort:', insertSort(arr));

/**
 * 希尔排序：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录"基本有序"时，
 *         再对全体记录进行依次直接插入排序。
 * 平均时间复杂度：O(n log n)
 * 最好情况：O(n ^ 1.3)
 * 最坏情况：O(n log^2 n)
 * 空间复杂度：O(1)
 * 排序方式：in-place
 * 稳定性：不稳定
 */

const shellSort = (arr) => {
  if (arr == null || arr.length <= 1) return;

  let N = arr.length,
    gap = 1;
  while (gap < N / 3) {
    gap = gap * 3 + 1;
  } // 动态定义间隔的增量序列 （算法4给出的初始逻辑）
  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    // 处于性能考虑的写法：可以判断gap >= 1  gap / 2 也可
    for (let i = gap; i < N; i++) {
      // 表示：每一次跳跃一个当前gap，然后依次为后续参数做插入
      for (let j = i; j >= gap && less(arr, j, j - gap); j -= gap) {
        // 这里就是插入排序
        swapTowValue(arr, j, j - gap);
      }
    }
  }
  return arr;
};

console.log('shellSort:', shellSort(arr));

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
  let node = arr.length;
  if (node < 2) return arr;

  //  将数组进行拆分
  let mid = Math.floor(node >> 1),
    leftAry = arr.slice(0, mid),
    rightAry = arr.slice(mid);
  return merge(mergeSort(leftAry), mergeSort(rightAry)); // 每一次的拆分都进行一次合并
  //  合并
  function merge(l, r) {
    let ary = [];
    while (l.length && r.length)
      l[0] < r[0] ? ary.push(l.shift()) : ary.push(r.shift()); // 将树形的左右两分支的元素进行比对合并处理
    while (l.length) ary.push(l.shift());
    while (r.length) ary.push(r.shift());

    return ary;
  }
};

console.log('mergeSort:', mergeSort(arr));

/**
 * 快速排序：先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录"基本有序"时，
 *         再对全体记录进行依次直接插入排序。
 * 平均时间复杂度：O(n log n)
 * 最好情况：O(n log n)
 * 最坏情况：O(n^2)
 * 空间复杂度：O(log n)
 * 排序方式：in-place
 * 稳定性：不稳定
 */

const quickSort = (arr) => {
  //  递归的结束条件

  if (arr.length <= 1) {
    return arr;
  } // 长度为一的数组不需要排序
  //  1.  设置基准元素 ->　pivot，pivot可以是数组元素中的任意一个
  let center = Math.floor(arr.length >> 1),
    pivot = arr.splice(center, 1)[0],
    leftAry = [],
    rightAry = [];

  //  2.  对元素进行排列，分别将大小于pivot的值排列在其两端
  for (let i = 0; i < arr.length; i++) {
    let target = arr[i];
    if (target < pivot) {
      leftAry.push(target);
    } else {
      rightAry.push(target);
    }
  }
  //  3.  递归调用
  return [...quickSort(leftAry), pivot, ...quickSort(rightAry)];
};

console.log('quickSort：', quickSort(arr));

/**
 * 堆排序：分为大顶堆和小顶堆，每个节点的值都大于等于或小于等于其子节点的值，在堆排序中用于升降排序。
 * 平均时间复杂度：O(n log n)
 * 最好情况：O(n log n)
 * 最坏情况：O(n log n)
 * 空间复杂度：O(1)
 * 排序方式：in-place
 * 稳定性：不稳定
 */

const heapSort = (tree) => {
  let node = tree.length

  // 进行堆调整
  function heapify(tree, i) {
    let l = 2 * i + 1, r = 2 * i + 2, largest = i;
    if (l < node && tree[largest] < tree[l]) {
      largest = l
    }      // l < node 保证子节点不会越界，超出树形的最大长度
    if (r < node && tree[largest] < tree[r]) {
      largest = r
    }      // 与左节点同理
    if (largest !== i) {
      swapTowValue(tree, i, largest)     // 如果当前 largest即最大节点 大于当前父节点 i， 则交换两数值，使得顶堆保持成立
      heapify(tree, i)     // 继续对堆结构进行堆调整
    }
  }

  // 构建对结构： 需要保证的是（以大顶堆为例）：每个堆的父节点大于等于其子节点，所以需要从整个树形结构的最底层堆开始
  // 每一个父节点都是连续的 所以我们在最底层的父节点基础上递减则可以堆整个树形进行 堆构建
  function buildHeap(tree) {
    for (let i = Math.floor(node >> 1); i >= 0; i--) {
      heapify(tree, i)
    } // 该循环的 i 值既是最底层堆的父节点
  }

  buildHeap(tree)
  // console.log(tree)

  // 进行堆排序：由于堆顶是最大（最小）值，所以可以将堆顶和树形尾端值进行交换截取
  for (let i = node - 1; i >= 0; i--) {
    swapTowValue(tree, 0, i)
    node--
    heapify(tree, 0)
  }

  return tree
}

let ary = [18, 52, 13, 84, 23, 23, 53, 76, 28, 76, 25, 34, 32, 21, 123]
console.log('heapSort：', heapSort(ary))


/**
 * 计数排序：一种非比较排序，桶排序思想中的一种，适用于特定问题（小范围）
 * 平均时间复杂度：O(n + k)
 * 最好情况：O(n + k)
 * 最坏情况：O(n + k)
 * 空间复杂度：O(k)
 * 排序方式：out-place
 * 稳定性：稳定
 */
const countingSort = (arr) => {
//  1. 构建桶
  let bucketLen = Math.max(...arr) - Math.min(...arr) + 1,
    bucket = new Array(bucketLen),
    len = arr.length,
    retArr = [];
//  2. 记录数组中每一个参数出现的次数，统计数组中每个值为i的元素的出现次数，存入桶中的第i项
  for (let i = 0; i < len; i++) {
    if (!bucket[arr[i]]) {
      bucket[arr[i]] = 0
    }
    bucket[arr[i]]++
  }
//  3. 对所有桶中的计数值进行累加
  for (let i = 1; i < bucketLen; i++) {
    bucket[i] = bucket[i] + bucket[i - 1]     // 此时bucket作为累加数组：从bucket中的第一个元素开始，每一项与其前一项进行相加
  }
//  4. 反向填充数组：这样保证了相同元素在原数组中的相对位置，此时的bucket的每一个值都是其所对应技术目标所出现的最后索引位置（这里的目标对应的是原数组中的元素，值为元素出现的次数）
  for (let i = len - 1; i >= 0; i--) {
    retArr[--bucket[arr[i]]] = arr[i]       // 将每个元素i放在新数组的第bucket(i)项，每放一个元素就将bucket(i)减去1
  }

  return retArr
}

let countArr = [1, 2, 2, 3, 4, 5, 1, 5, 6, 5, 6, 6, 7, 6, 8, 8, 4, 0]
console.log('countingSort：', countingSort(countArr))


/**
 * 基数排序：将整数按位数切割成不同的数字，然后按每个位数分别比较。
 * 平均时间复杂度：O(n * k)
 * 最好情况：O(n * k)
 * 最坏情况：O(n * k)
 * 空间复杂度：O(n + k)
 * 排序方式：out-place
 * 稳定性：稳定
 */

const radixSort = (arr) => {
  const maxNumber = Math.max(...arr)
  const maxDigit = determiningTheNumberOfDigits(maxNumber)

  let len = arr.length,
    bucket = []
  // retAry = []

  for (let i = 0; i < maxDigit; i++) {
    let base = Math.pow(10, i)     // 基数

    for (let j = 0; j < len; j++) {
      // 根据键值的每位数字来分配桶：对键值以逆序的方式进行排序
      let n = arr[j] / base
      let num = parseInt(n.toString()) % 10
      // 以数组的方式 将排序后的键值进行存储
      if (!bucket[num]) bucket[num] = []
      bucket[num].push(arr[j])
    }

    let pos = 0
    for (let j = 0; j < 10; j++) {
      let v = null  // 作为 桶中子元素 的临时变量
      // while 循环对桶中的每一组子数组元素进行排序处理
      if (bucket[j] != null) while ((v = bucket[j].shift())) arr[pos++] = v
    }
  }

  return arr
}

//  确定数字位数
const determiningTheNumberOfDigits = (n) => {
  let count = 0;
  while (n >= 1) {
    n /= 10
    count++
  }
  return count
}

const Ary = [21, 123, 52, 46, 176, 89, 76, 90, 211, 432]
console.log('radixSort：', radixSort(Ary))










