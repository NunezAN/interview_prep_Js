const productExceptSelf = (nums) => {
  resultArr = [];
  let selectedNum = 0;
  while (selectedNum < nums.length) {
    let count = 1;
    for (const num of nums) {
      if (num !== nums[selectedNum]) {
        count *= num;
      }
    }
    resultArr.push(count);
    count = 1;
    selectedNum++;
  }
  return resultArr;
};
console.log(productExceptSelf([1, 2, 3, 4]));
