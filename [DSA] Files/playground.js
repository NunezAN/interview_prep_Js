const twoSum = (nums, target) => {
  twoSumArray = [];

  for (let i = 0; i < nums.length; i++) {
    const remain = (target - nums[i]);
    console.log(remain);
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === remain) {
        console.log("FOUND MATCH!!");
        twoSumArray.push(i);
        twoSumArray.push(j);
        return twoSumArray;
      }
    }
  }
  return twoSumArray;
};

console.log(twoSum([10, 20], 30));
