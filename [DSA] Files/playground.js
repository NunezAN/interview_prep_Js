const sumOfTwo = (nums1, nums2, target) => {
  const remainderSet = new Set();
  for(num of nums1){
    remainderSet.add(target-num)
  }
  for(num of nums2){
    if(remainderSet.has(num)){
      return true;
    }
  }
  return false;
};
console.log( sumOfTwo([1, 2, 3], [5, 2], 8));
