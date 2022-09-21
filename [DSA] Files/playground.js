const binarySearch = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;
  let mid = Math.round((l + r) / 2);
  while (l <= r) {
    console.log(nums[mid]);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    }
    mid = Math.round((l + r) / 2);
  }
  return false;
};

console.log(binarySearch([-3,1,3,5,6,9,12,14,31], 6));
