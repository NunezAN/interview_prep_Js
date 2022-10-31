const findMinimum = (nums) => {
  l = 0;
  r = nums.length - 1;
  let mid = Math.floor((l + r) / 2);
  while (l < r) {
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
    mid = Math.floor((l + r) / 2);
  }
  return nums[l];
};
console.log(findMinimum([5, 4, 1, 2]));
