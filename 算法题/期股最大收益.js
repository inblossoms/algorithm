// Tip 在给定时间段内的不同时间时股票的价格，分析怎样收抛达到最大收益, 不能获取利润返回0

// eg
// 给定一个数组； [2,4,6,3,7,1,9,5]
// 最大收益：在 1 时买入，在 9 的时候卖出 -- 8

function doneOnceMax(prices) {
  if (prices == null || prices.length === 0) return 0;

  let ans = 0; // 最可观的收入
  let min = prices[0]; // 范围内价格的最小值

  for (let i = 1; i < prices.length; i++) {
    const p = prices[i];
    min = Math.min(min, p);
    ans = Math.max(ans, p - min);
  }

  return ans;
}

let price = [2, 4, 6, 3, 7, 1, 9, 5];
doneOnceMax(price);
console.log(doneOnceMax(price));

// Tip 在上一次的基础上，你可以多次购买不同时期的股票，但在购买下一次的股票之前必须抛售之前的股票

// 思路：在每一次的价格低谷收入，在下一次的价格相对于上次有利可图抛出

function doneMax(prices) {
  if (prices == null || prices.length === 0) return 0;

  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    ans += Math.max(prices[i] - prices[i - 1], 0);
  }

  return ans;
}

// Tip 在上一次的条件上，限制交易次数为两次，保证最大收益
function maxProfit(prices) {
  if (prices == null || prices.length === 0) return 0;

  let ans = 0;
  // doneOnceMinusBuyMax -> 在指标 0 时即初始情况
  doneOnceMinusBuyMax = -prices[0];
  // doneOnceMax -> 0~0 时只做一次交易的最好情况
  let doneOnceMax = 0;
  // 0~0 上的最小价格
  let min = prices[0];

  for (let i = 0; i < prices.length; i++) {
    const p = prices[i];
    min = Math.min(min, p);

    // 0~i 上，只进行一次交易获取的最好收益
    // 可能性一: 只进行一次交易，不在 i 的位置进行抛出，（0~i-1) 也就是上一步的doneOnceMax
    // 可能性二：只进行一次交易，在 i 的位置抛出，prices[i] - min
    doneOnceMax = Math.max(doneOnceMax, p - min);

    // 0~i 上，只进行一次交易并且扣除下一次交易的买入获取的最好收益
    // 可能性一: 扣除下一次交易的买入，不在 i 的位置发生，（0~i-1) 也就是上一步的doneOnceMinusBuyMax
    // 可能性二：扣除下一次交易的买入，在 i 的位置发生，（0~i) 也就是在该范围上最好的交易 - 最后一次报价prices[i]
    doneOnceMinusBuyMax = Math.max(doneOnceMinusBuyMax, doneOnceMax - p);

    ans = Math.max(ans, doneOnceMinusBuyMax + p);
  }
}
