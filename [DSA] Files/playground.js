const flatten = (nums) => {
  const result = []

  const flattenArray = (nums) => {
    for(elem of nums){
      if(Array.isArray(elem)){
        console.log("is array",elem);
        flattenArray(elem);
      }
      else{
        result.push(elem);
      }
    }
  }

  flattenArray(nums)

  return result


 };
console.log(flatten([1, [2, 3, [4, [5]]]]));
