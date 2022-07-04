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
