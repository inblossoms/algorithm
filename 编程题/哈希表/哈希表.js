/**
 * 理想时间复杂度：O(1)
 * Tip：散列函数可能会把两个或两个以上的关键字映射到同一地址，发生冲突（冲突的不同关键字称为：同义词）
 *  遵循原则：1. 散列函数尽可能的简单，能够快速计算关键字的散列地址
 *         2. 散列函数映射的i地址应均匀分布整个地址空间，避免聚集以减少冲突。
 *         3. 在处理冲突的过程中，出现非同义词之间争夺同一个散列表地址的现象称为：堆积。
 *
 */

// 1. 直接定址法：直接取关键字的某个线性函数作为散列函数：hash(key) = a * key + b 其中，a、b为常数
// 适用场景：事先知道关键字，关键字集合不是很大且连续性较好。关键字如果不连续，则有大量空位，造成空间浪费。


// 2. 除留余数法：不需要事先知晓关键字分布。假定散列表的表长为 M，取一个等于或大于数据集合长度的最小素数 P（避免区间密集），则设计散列表函数为：hash(key) = key % P
// 为什么要选择 P 为素数：两个齿为偶数的偶数容易冲突，同理 P 选择素数。


/**
 *  所有的散列函数，都无法避免冲突问题。冲突解决的方法有三种：
 *  1. 开放地址法：该方法是线性存储空间上的解决方案，称为闭散列。发生冲突时，采用冲突处理方法在线性空间上探测其他位置：
 *     hash'(key) = (hash(key) + d') % m
 *     hash(key) 为原散列函数，hash'(key) 为探测函数，d' 为增量序列，m 为表长。
 *  根据增量序列的不同，开放地址法又分为：
 *    - 线性探测法：增量序列 d' = 1, ... , m-1；因为哈希表长取数组长度，可以保证每一个元素都有地址存储
 *    - 二次探测法：该探测方式是以跳跃式的方式进行探测，效率较高，但会出现存在空址的情况却存储失败。而线性探测存在空址则一定会探测成功。
 *  2. 链地址法：又称为拉链法。如果不同关键字通过散列函数映射到同一地址，这些关键子为同义词，将所有同义词存储在一个线性链表中；
 *     查找、插入、删除操作主要在这个链表中惊醒，拉链法适用于经常进行插入、删除的情况。
 *    - 随机探测法：
 *    - 再散列法：
 */


//  a.  线性探测法：
//  有任意一组关键字(12,32,42,67,23,61,18,93,19,41)，若表长为12，散列函数为 hash(key) = key % 13，采用线性探测处理冲突，构造散列表。
//  - 查找成功，平均比较次数：∑dpici (pi: 每一个关键字出现次数概率，ci: 比较次数)
//  - 查找失败，平均查找次数：∑pici (pi: 构建散列表所选素数，ci: 比较次数)有空址可用即为失败，寻找空址的过程为查找次数


//  b.  二次探测法：d' = 1^2, -(1^2), 2^2, -(2^2), ... , k^2, -(k^2)  (K <= m/2，k为表长度，当探测加到表长度的一半时，依旧未找到则宣布失败)
//  采用前后跳跃式的探测方法，发生冲突时向后一位探测，向前一位探测，以此类推避免堆积。
//  如果寻址过程中，hash(key) 出现负数的情况，则加上表长度使其成为正数。


//  代码实现：
let
  HTable = [12, 32, 56, 87, 93, 19, 28, 37, 20, 46, 23, 63, 40],
  P = HTable.length,
  M = P + 2,      // 哈希表的表长
  NULLKEY = 0  // 单元为空的标记

// hash 函数
const h = (key) => {
  const p = P % 2 === 1 ? P : P += 1;
  return key % p
}

// 线性探测
const lineDetect = (HT, preH, key, cnt) => {
  let HIdx
  for (let i = 0; i < M; i++) {
    cnt++ // 记录每一次查找次数
    HIdx = (preH + i) % M      // 按照线性探测法计算下一个哈希地址 HIdx
    if (HT[HIdx] === NULLKEY || HT[HIdx] === key) return HIdx       // 若单元HIdx为空，或者查找成功
  }
  return -1
}

// 二次探测
const secondDetect = (HT, preH, key, cnt) => {
  let HIdx
  for (let i = 0; i < M >> 1; i++) {
    let lookRight = i ** 2, lookLeft = -lookRight
    cnt++
    HIdx = (HIdx + lookRight) % M  // 二次探测向右寻址
    if (HT[HIdx] === NULLKEY || HT[HIdx] === key) return HIdx
    cnt++
    HIdx = (HIdx + lookLeft) % M  // 向左寻址
    if (HIdx < 0) HIdx += M  // 当向左寻址做减法的过程中出现负数，加上表长即可
    if (HT[HIdx] === NULLKEY || HT[HIdx] === key) return HIdx
  }
  return -1
}


let HC = [], HT = new Array(HTable.length).fill(0)
// 将数据进行插入
const insertHash = (HT, arr, key) => {
  let preH = h(key), // 根据哈希函数 计算哈希地址
    HIdx = -1, cnt = 1
  if (HT[preH] === NULLKEY) { // 如果 preH 为 null
    HC[preH] = 1 // 统计比较次数
    HT[preH] = key // 放入哈希表中
    return 1
  }
  HIdx = lineDetect(HT, preH, key, cnt) // 线性探测
  // HIdx = secondDetect(HT, preH, key, cnt) // 二次探测
  if (HIdx !== -1 && HT[HIdx] === NULLKEY) { // 如果 HIdx 为空
    HC[preH] = cnt // 统计比较次数
    HT[preH] = key // 放入哈希表中
    return 1
  }
  return 0
}

const hash = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i]
    insertHash(HT, arr, key)
  }
}


console.log('hash',hash(HTable))

















