const moveZeroes = (nums) => {
  let l =0;
  let r=0;
  while(r<nums.length){
    if(nums[r]!=0)
    {
      let temp =nums[r];
      nums[r]=nums[l];
      nums[l] = temp
      l++;
    }
    r++;
  }
  return nums;
};
console.log(moveZeroes([1, 0, 2, 0]));
