function threeSum(nums) {
  nums = nums.sort((a, b) => a - b);
  let i = 0;
  let l = 1;
  let r = nums.length - 1;
  let result = [];
  while (i < nums.length - 2) {
    if (nums[i] !== nums[i - 1]) {
      while (l < r) {
        const sum = nums[i] + nums[l] + nums[r];
        if (sum === 0) {
          result.push([nums[i], nums[l], nums[r]]);
          l++;
          while (nums[l] === nums[l - 1] && l < r) {
            l++;
          }
        }
        if (sum < 0) {
          l++;
        }
        if (sum > 0) {
          r--;
        }
      }
    }
    i++;
    l = i + 1;
    r = nums.length - 1;
  }
  return result;
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
