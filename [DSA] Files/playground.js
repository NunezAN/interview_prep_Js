const stocks = (prices) => {
  let l = 0;
  let r = l + 1;
  let max = 0;
  while (r < prices.length) {
    const profit = prices[r] - prices[l];
    console.log(l,r)
    if (profit > 0) {
      if (max < profit) {
        max = profit;
      }
    }
    else{
        l=r;
    }
    r++;
  }
  return max;
};

console.log(stocks([8, 3, 6, 1, 6, 4, 7]));
