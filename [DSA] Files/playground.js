const search = (nums, target) => {
  l = 0;
  r = nums.length - 1;
  let mid = Math.floor((l + r) / 2);
  while (l <= r) {
    if (nums[mid] === target) {
      return mid;
    }
    if(nums[mid]>target||target>nums[r]){
      r=mid-1;
    }
    else{
      l=mid+1;
    }
    mid = Math.floor((l + r) / 2);
  }
  return 0;
};
console.log(search([5, 4, 1, 2, 3], 2));
