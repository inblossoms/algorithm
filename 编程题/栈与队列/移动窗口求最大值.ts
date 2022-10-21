// 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
//返回滑动窗口中的最大值。

const maxSlidingWindow = function (nums: number[], k: number): number[] {
  // 单调递减队列
  class MonoQueue {
    private queue: number[];
    constructor() {
      this.queue = [];
    }

    /**
     * 入队：value如果大于队尾元素，则将队尾元素删除，直至队尾元素大于value，或者队列为空
     * push(value)：如果push的元素value大于入口元素的数值，那么就将队列出口的元素弹出，直到push元素的数值小于等于队列入口元素的数值为止
     */
    public enqueue(value: number): void {
      // back : 入口
      let back: number | undefined = this.queue[this.queue.length - 1];

      while (back !== undefined && back < value) {
        this.queue.pop();
        back = this.queue[this.queue.length - 1];
      }
      this.queue.push(value);
    }

    /**
     * 出队：只有当队头元素等于value，才出队
     * pop(value)：如果窗口移除的元素value等于单调队列的出口元素，那么队列弹出元素，否则不用任何操作
     */
    public dequeue(value: number): void {
      let top: number | undefined = this.top();
      if (top !== undefined && top === value) {
        this.queue.shift();
      }
    }

    public top(): number | undefined {
      return this.queue[0];
    }
  }

  const helperQueue: MonoQueue = new MonoQueue();
  // 通过 i j 来保证 k 的范围大小
  let i: number = 0,
    j: number = 0; // j 保持与 k 的值相等：即个数相等
  let resArr: number[] = [];

  while (j < k) {
    helperQueue.enqueue(nums[j++]);
  }

  resArr.push(helperQueue.top()!);

  while (j < nums.length) {
    helperQueue.enqueue(nums[j]);
    helperQueue.dequeue(nums[i]);
    resArr.push(helperQueue.top()!);
    j++, i++;
  }

  return resArr;
};
