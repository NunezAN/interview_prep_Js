/** Stock Trading
 *
 * Given an array of 'prices', find the transaction that will yield the greatest profits.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing
 * a different day in the future to sell that stock.
 *
 * @examples
 * stocks([8, 3, 6, 1, 6, 4, 7]) -> 6
 * stocks([1, 8, 3, 4]) -> 7
 * stocks([2, 9, 18, 9, 2]) ->  16
 */

const stocks = (prices) => {
  //   let bestStockReturn = 0;

  //   for (let i = 0; i < prices.length - 1; i++) {
  //     for (let j = i + 1; j < prices.length; j++) {
  //       let returns = prices[j] - prices[i];
  //       console.log(returns);
  //       if (returns > bestStockReturn) {
  //         bestStockReturn = returns;
  //       }
  //     }
  //   }
  //   return bestStockReturn;
  // let l = 0;
  // let r = l + 1;
  // let max = 0;
  // while (r < prices.length ) {
  //   const profit = prices[r] - prices[l];
  //   // console.log(l,r)
  //   if (profit > 0) {
  //     if (max < profit) {
  //       max = profit;
  //     }
  //   }
  //   else{
  //       l=r;
  //   }
  //   r++;
  // }
  // return max;
  // let l = 0;
  // let r = 1;
  // let maxProfit = 0;
  // while (r < prices.length) {
  //   const profit = prices[r] - prices[l];
  //   if (profit > 0) {
  //     if (maxProfit < profit) {
  //       maxProfit = profit;
  //     }
  //   } else {
  //     l = r;
  //   }
  //   r++;
  // }
  // return maxProfit;

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

//DO NOT EDIT BELOW THIS LINE
module.exports = stocks;
