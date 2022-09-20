function threeSum(nums) {
  solutionArray = [];
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  // console.log(nums);
  i = 0;
  l = i + 1;
  r = nums.length - 1;
  while (i < nums.length - 2) {
    // (console.log(negative);
    if (nums[i] !== nums[i - 1]) {
      while (l < r) {
        // console.log(i,l,r);
        let sum = nums[l] + nums[r] + nums[i];
        if (0 === sum) {
          solutionArray.push([nums[i], nums[l], nums[r]]);
          l++;
          while(nums[l]===nums[l-1] && l<r)
          {
            l++;
          }
        } else if (sum < 0) {
          l++;
        } else if (sum > 0) {
          r--;
        }
      }
    }
    i++;
    l = i + 1;
    r = nums.length - 1;
  }
  return solutionArray;
}

console.log(threeSum([-2, -2, 0, 0, 1, 1, 2, 2]));
