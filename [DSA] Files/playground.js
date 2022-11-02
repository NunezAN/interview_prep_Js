const flatten = (nums) => {
  const flatten = [];
  const flattenFunc = (nums) =>{
    for(const num of nums){
      if(Array.isArray(num)){
        flattenFunc(num);
      }
      else(flatten.push(num));
    }
  }
  flattenFunc(nums);
  return flatten;
};
console.log(flatten([1, 2, 3, [4, 5]]));
