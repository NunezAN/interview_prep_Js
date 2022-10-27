function threeSum(nums) {
  nums = nums.sort(function (a, b) {
    return a - b;
  });
  const threeSumArray = [];
  i = 0;
  l = 1;
  r = nums.length - 1;
  while (i < nums.length - 2) {
    if (nums[i] !== nums[i-1]) {
      while (l < r) {
        const sum = nums[i] + nums[l] + nums[r];
        if (sum === 0) {
          threeSumArray.push([nums[i], nums[l], nums[r]]);
          l++;
          while (nums[l] === nums[l - 1] && l < r) {
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
  return threeSumArray;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
