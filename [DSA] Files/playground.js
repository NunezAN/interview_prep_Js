const maxSubArray = (nums) => {
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let count = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      count += nums[j];

      if (count > max) {
        console.log("new max", count);
        max = count;
      }
    }
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]));
