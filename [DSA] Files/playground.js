const twoSum = (nums, target) => {
  targetMap = new Map();
  for(let i=0;i<nums.length;i++){
    if(targetMap.has(nums[i]))
    {
      return [targetMap.get(nums[i]),i];
    }
    targetMap.set(target-nums[i],i);
    console.log(targetMap);
  }
  
};
console.log(twoSum([1, 2, 4, 9], 13));
