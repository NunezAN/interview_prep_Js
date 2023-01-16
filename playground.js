const flatten = (nums) => {
  result = [];
  const flattenArr = (arr) => {
    for (let num of arr) {
      if (Array.isArray(num)) {
        flattenArr(num);
      }
      else{
        result.push(num);
      }
    }
  };
  flattenArr(nums);
  return result;
};
console.log(flatten([1, 2, 3, [4, 5]]));
