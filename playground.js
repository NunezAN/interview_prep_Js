const stocks = (prices) => {
  let end = prices.length - 1;
  let start = 0;
  let max = 0;
  while (end > 0) {
    while (start < prices.length) {
      const sum = prices[end] - prices[start];
      if (sum > max) max = sum;
      start++;
    }
    start = 0;
    end--;
  }
  return max;
};
console.log(stocks([8, 3, 6, 1, 6, 4, 7]));
