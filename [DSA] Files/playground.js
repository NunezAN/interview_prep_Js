const flatten = (nums) => {
  const flattenArr = [];
  const flattenFunc = (nums) =>{
    for(const num of nums){
      if(Array.isArray(num)){
        flattenFunc(num);
      }
      else(flattenArr.push(num));
    }
  }
  flattenFunc(nums);
  return flattenArr;
};
console.log(flatten([1, 2, 3, [4, 5]]));
