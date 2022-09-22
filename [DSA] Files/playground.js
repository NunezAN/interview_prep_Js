const search = (nums, target) => {
  l = 0;
  r = nums.length - 1;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    if(nums[mid]===target)
    {
      return mid;
    }

    if (nums[mid] < nums[r]) {
      if (nums[r] < target || target < nums[mid]) {
        r = mid - 1;
      }
      else {
        l = mid + 1;
      }
    } 
    else
    {
      if(nums[l]>target|| target >nums[mid])
      {
        l=mid+1;
      }
      else{
        r=mid-1;
      }
    }
  }
  return "not found";
};
console.log(search([5, 4, 1, 2, 3], 2));
