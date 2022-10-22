/**
 * 栈：主要特点是先进后出(FILO - 后进先出 LIFO)的线性序列。 栈的操作都是 O(1) 的时间。
 *    栈结构也是一种线性表，是一种操作受限的线性表，只能在一端进行进出操作。
 *    进出的一段被称为栈顶，另一端为栈底。栈可以采用顺序存储也可以采用链式存储，分别被称为顺序栈和链栈。
 */

let stackTop, stackBase, stack

// 初始化一个栈
const initStack = (stackSize) => {
  stack = new Array(stackSize).fill(null)
  stackBase = stack[0]
  if (stackBase === undefined) return false
  stackTop = stackBase
  return true
}

console.log(initStack(12))


let stackSize = stack.length - 1
// 模拟入栈
const pushStack = (stack, target) => {
  if (stackTop - stackBase === stackSize) return false    // 判断栈满
  stackTop = target
  stackTop++
  return true
}


let ele = 0
// 模拟出栈：栈顶指针向下移动，栈内不再包括当前元素
const popStack = (stack, ele) => {
  if (stackTop - stackBase === 0) return false    // 判断栈空
  stackTop--
  ele = stack.pop()   // 出栈的值，当出栈元素的地址未被覆盖时，值依旧存与当前位置存在引用关系
  return true
}


// 取栈顶元素：栈顶指针为移动，站内元素未发生改变
const getStackTop = (stack) => {
  if (stackTop !== stackBase) {
    return stack[stackTop - 1]
  } else {
    return -1
  }
}
