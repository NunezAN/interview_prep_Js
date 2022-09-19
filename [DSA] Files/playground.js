const maxSubArray = (nums) => {
  if (nums.length===1){
    return nums[0];
  }
  let max = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    count+=nums[i];
    if(count <0){
      count = 0;
    }
    if(max<count){
      max=count;
    }
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]));
