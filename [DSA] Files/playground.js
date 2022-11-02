const moveZeroes = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    if (nums[l] === 0) {
      while(nums[r]===0){
        r--;
      }
      const temp = nums[r];
      nums[r] = nums[l];
      nums[l] = temp;
      r--;
    }
    l++;
  }
  return nums;
  // let l = 0;
  // let r = 0;
  // while (r < nums.length) {
  //   if (nums[r] !== 0) {
  //     let temp = nums[l];
  //     nums[l] = nums[r];
  //     nums[r] = temp;
  //     l++;
  //   }
  //   r++;
  // }
  // return nums;
};
console.log(moveZeroes([0, 0, 1, 2, 3]));
