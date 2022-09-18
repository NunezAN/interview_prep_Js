const twoSum = (nums, target) => {
  twoSumArray = [];
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    if (map.get(nums[i])!==undefined){
      return [map.get(nums[i]),i];
    }
    map.set(remain,i);
  }
};

console.log(twoSum([10, 20], 30));
