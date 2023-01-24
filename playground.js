const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (target === nums[mid]) {
      return mid;
    }
    if (nums[mid] < nums[r]) {
      if (nums[r] < target || target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[r] > target || target > nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return -1;
};
console.log(search([5, 4, 1, 2, 3], 2));
