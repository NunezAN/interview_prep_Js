const containsDuplicate = (nums) => {
  const map = new Map();
  for (let i=0;i<nums.length;i++){
      if(map.has(nums[i]))
      {
          return true;
      }
      map.set(nums[i],true);
  }
  return false;
}

console.log(containsDuplicate([1, 2, 2, 5]));
