const twoSortedSum = (nums, target) => {
  // const targetMap = new Map();
  // for (let i = 0; i < nums.length; i++) {
  //   if (targetMap.has(nums[i])) {
  //     return [targetMap.get(nums[i]), i];
  //   }
  //   targetMap.set(target-nums[i],i);
  // }
  l=0;
  r=nums.length-1;
  while(l<r){
    const numSum = nums[l]+nums[r];
    if(numSum === target){
      return [l,r];
    }
    else if(numSum<target){
      l++;
    }
    else{
      r++;
    }
  }
};
console.log(twoSortedSum([1, 2, 4, 9], 13));
