// Tip 在给定时间段内的不同时间时股票的价格，分析怎样收抛达到最大收益, 不能获取利润返回0

// eg
// 给定一个数组； [2,4,6,3,7,1,9,5]
// 最大收益：在 1 时买入，在 9 的时候卖出 -- 8

function maxmumReturn(prices) {
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
maxmumReturn(price);
console.log(maxmumReturn(price));

// Tip 在上一次的基础上，你可以多次购买不同时期的股票，但在购买下一次的股票之前必须抛售之前的股票

// 思路：在每一次的价格低谷收入，在下一次的价格相对于上次有利可图抛出

function maxmumReturn(prices) {
  if (prices == null || prices.length === 0) return 0;

  let ans = 0;
  for (let i = 1; i < prices.length; i++) {
    ans += Math.max(prices[i] - prices[i - 1], 0);
  }

  return ans;
}

// Tip 在上一次的条件上，限制交易次数为两次，保证最大收益
