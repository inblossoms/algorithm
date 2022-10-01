// 力扣：232
// 说明：使用两个栈实现先入先出队列。队列需支持一般队列的所有操作（push、pop、peek、empty）

class MyQueue {
  private stackIn: number[];
  private stackOut: number[];

  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  push(x: number): void {
    this.stackIn.push(x);
  } // 将元素 x 推到队列的末尾

  // 输出栈如果为空，就把进栈数据全部导入进来（注意是全部导入），再从出栈弹出数据，如果输出栈不为空，则直接从出栈弹出数据就可以了。
  pop(): number {
    if (this.stackOut.length === 0) {
      while (this.stackIn.length > 0) {
        this.stackOut.push(this.stackIn.pop()!);
      }
    }
    return this.stackOut.pop()!;
  } // 从队列的开头移除元素

  peek(): number {
    let temp: number = this.pop();
    this.stackOut.push(temp);
    return temp;
  } // 返回队列开头的元素

  empty(): boolean {
    return this.stackIn.length === 0 && this.stackOut.length === 0;
  } // 如果队列为空，返回true；否则返回 false
}
