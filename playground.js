const productExceptSelf = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let total;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        total = total * nums[j] || nums[j] ;
        console.log(total);
      }
    }
    result.push(total);
  }
  return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));
