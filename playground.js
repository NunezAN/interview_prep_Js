const findMinimum = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (nums[mid] < nums[l]) {
      r = mid-1;
    } else {
      l = mid;
    }
  }
  return nums[r];
};
console.log(findMinimum([1, 4, 6]));
