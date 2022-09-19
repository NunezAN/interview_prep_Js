const twoSortedSum = (nums, target) => {
  const map =new Map();
  for(let index = 0;index<nums.length;index++){
    const difference = target - nums[index];
    if(map.has(nums[index]))
    {
      return [map.get(nums[index]),index]
    }
    map.set(difference, index);
  }
  return [];
}

console.log(twoSortedSum([2, 3, 4], 6));
