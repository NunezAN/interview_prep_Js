const stocks = (prices) => {
  let l = 0;
  let r = 1;
  let maxProfit = 0;
  while (r < prices.length) {
    const profit = prices[r] - prices[l];
    if (profit > 0) {
      if (maxProfit < profit) {
        maxProfit = profit;
      }
    } else {
      l = r;
    }
    r++;
  }
  return maxProfit;
};
console.log(stocks([8, 3, 6, 1, 6, 4, 7]));
