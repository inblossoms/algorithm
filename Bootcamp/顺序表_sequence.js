/**
 *  线性表；由 n 个相同类型的数据元素组成的有序序列，除了第一个元素每个元素都有唯一的直接前驱；除了最后一个元素每个元素都有唯一的直接后继。
 *    顺序表：顺序存储的线性表称为顺序表
 *      在顺序存储方式中，元素存储是连续的，中间不允许有空可以快速定位某个元素，但是插入、删除时需要移动大量元素。
 *      顺序表分为：静态分配（一个提初始化的数组，TS 中的元组）和动态分配
 *    链表：链式存储的线性表称为链表
 */

// 插入：
let List = [12, 32, 56, 87, 93, 19, 28, 37, 20, 46, 23, 63, 40]

const insert = (originAry, positio, target) => {
  for (let i = originAry.length; i > positio; i--) {
    originAry[i] = originAry[i - 1]
  }
  originAry[positio] = target
  return originAry
}
console.log(insert(List, 7, 34))

// 删除：
const eliminate = (originAry, positio) => {
  for (let i = positio; i < originAry.length; i++) {
    originAry[i] = originAry[i + 1]
  }
  originAry.pop()
  return originAry
}
console.log(eliminate(List, 7))
