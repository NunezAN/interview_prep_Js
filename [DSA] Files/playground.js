const maxSubArray = (nums) => {
  let max = nums[0];
  let maxCount = nums[0];
  for (const num of nums.slice(1)) {
    maxCount += num;
    if (maxCount < 0) {
      maxCount = 0;
    }
    if (max < maxCount) {
      max= maxCount;
      console.log(max,num)
    }
  }
  return max;
};
console.log(maxSubArray([5, 4, -1, 7, 8]));
