const binarySearch = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  let mid = Math.floor((l + r) / 2);
  while (l < r) {
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    }
    mid = Math.floor((l + r) / 2);
  }
  return 0;
};
console.log(binarySearch([1, 2, 4, 9, 12], 9));
