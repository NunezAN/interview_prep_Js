const twoSortedSum = (nums, target) => {
  let sumMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (sumMap.has(nums[i])) {
      return [sumMap.get(nums[i]), i];
    } else {
      sumMap.set(target - nums[i], i);
    }
  }
};
console.log(twoSortedSum([1, 2, 4, 9], 13));
