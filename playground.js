const maxSubArray = (nums) => {
  let count = nums[0];
  let maxCount = nums[0];
  for (let i = 1; i < nums.length; i++) {
    count += nums[i];
    if (count < 0) {
      count = 0;
    }
    if (count > maxCount) {
      maxCount = count;
    }
  }
  return maxCount;
};
console.log(maxSubArray([5, 4, -1, 7, 8]));
