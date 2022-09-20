const stocks = (prices) => {
  let bestStockReturn = 0;

  for(let i = 0;i <prices.length-1;i++) {
    for(let j = i+1;j <prices.length;j++)
    {
      let returns = prices[j]-prices[i];
      console.log(returns);
      if(returns>bestStockReturn)
      {
        bestStockReturn = returns;
      }
    }
  }
  return bestStockReturn;
}

console.log(stocks([2, 9, 18, 9, 2]));