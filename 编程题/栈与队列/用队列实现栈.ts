/**
 * 栈：先进后出
 * 队列：先进先出
 * 思路：栈每push一个元素，队列同样也push一个；由于栈的先进后出原则，这里将从队列中 length -1 的位置将参数弹出再push回队中。
 */

class MyStack {
  private queue: number[];
  constructor() {
    this.queue = [];
  }

  push(x: number): any {
    this.queue.push(x);
  }

  pop(): number {
    for (let i = 0, len = this.queue.length - 1; i < len; i++) {
      this.queue.push(this.queue.shift()!);
    }

    return this.queue.shift()!;
  }

  top(): number {
    let res: number = this.pop();
    this.push(res);

    return res;
  }

  empty(): boolean {
    return this.queue.length === 0;
  }
}
