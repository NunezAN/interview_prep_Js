/** Product of Array except Self:
 *
 * Write a function that takes in an array of integers 'nums' and
 * returns an array with the product of all integers except the current integer.
 *
 * Note: You can not use the division operator
 *
 * Follow up: Can you do this in constant space? The results array does NOT count to the space.
 *
 * @examples
 * productExceptSelf([1, 2, 3, 4]) -> [24, 12, 8, 6]
 * productExceptSelf([3, 2, 6, 1]) -> [12, 18, 6, 36]
 * productExceptSelf([10, 1, 5, 2]) -> [10, 100, 20, 50]
 */

const productExceptSelf = (nums) => {
  let productArray = [];
  productArray.push(1);
  let leftSum = 1;
  let rightSum = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum = leftSum * nums[i];
    // console.log(leftSum);
    productArray.push(leftSum);
  }
  for (let i = nums.length - 1; i >= 1; i--) {
    rightSum = rightSum * nums[i];
    console.log(rightSum);
    productArray[i - 1] = rightSum * productArray[i - 1];
  }
  // console.log(leftProducts,rightProducts);
  return productArray;
};

module.exports = productExceptSelf;