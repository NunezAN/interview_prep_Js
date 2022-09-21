const productExceptSelf = (nums) => {
  let productArray = [];
  productArray.push(1);
  let leftSum = 1;
  let rightSum = 1;
  for (let i = 0; i < nums.length-1; i++) {
    leftSum = leftSum * nums[i];
    // console.log(leftSum);
    productArray.push(leftSum);
  }
  for (let i = nums.length-1; i >=1; i--) {
    rightSum = rightSum * nums[i];
    console.log(rightSum);
    productArray[i-1]=rightSum*productArray[i-1];
  }
  // console.log(leftProducts,rightProducts);
  return productArray;
};

console.log(productExceptSelf([1, 2, 3, 4]));
