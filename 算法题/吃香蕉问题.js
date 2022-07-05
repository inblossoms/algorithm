// Tip 猩猩需要在 门卫离开的N小时内，以最快速度 X根/小时，吃完 Y 堆香蕉。
// 信息：猩猩吃香蕉的速度 K：x根/每小时
// 			每小时选择一堆从中吃掉 K 根，如果香蕉数量小于K 根，它将吃光所有香蕉，然后躺平
// 			问：猩猩要在门卫离开的时间内 N ，吃掉所有香蕉的最小速度？

/**
 * 香蕉：piles
 * 速度：speed
 * 返回吃掉香蕉的最小速度
 */

function hours(piles, speed) {
  let ans = 0; // 最优速度

  for (const p of piles) {
    ans += (p + speed - 1) / speed;
    // (a + b - 1) / b ：a/b 的向上取整，b-1确保了a/b余数为最小是1的情况可以使得结果加一，是0的情况不需进位。
  }

  return ans;
}

function minEatingSpeed(piles, h) {
  let l = 1,
    r = 0;
  for (const p of piles) {
    r = Math.max(r, p);
  }

  // 在 l -- r 找最优速度
  let ans = 0,
    m = 0;

  while (l <= r) {
    m = l + ((r - l) >> 1);
    if (hours(piles, m) <= h) {
      ans = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return ans;
}
