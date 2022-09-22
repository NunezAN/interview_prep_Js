const findMinimum = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  let mid = 0;
  while (l < r) {
    console.log("top", l, r);
    mid = Math.floor((l + r) / 2);
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
    console.log("bottom", l, r);
  }
  return nums[l];
};

console.log(findMinimum([21, 40 , 99, 102, 1102, 18, 20]));
