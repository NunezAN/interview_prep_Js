const containsDuplicate = (nums)  => {
  let dupMap = new Map();
  for(const num of nums){
    if(dupMap.has(num)){
      return true;
    }
    dupMap.set(num,true);
  }
  return false;
  
};
console.log(containsDuplicate([1, 2, 2, 5]));
