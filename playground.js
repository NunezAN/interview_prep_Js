const moveZeroes = (nums) => {
  let zero = 0;
  let findNum = 0;
  while (findNum < nums.length) {
    if (nums[findNum] !== 0) {
      const temp = nums[findNum];
      nums[findNum] = nums[zero];
      nums[zero] = temp;
      zero++;
    }
    findNum++;
  }
  return nums;
};
console.log(moveZeroes([1, 0, 2, 0]));
