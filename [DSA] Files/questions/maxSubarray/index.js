/** Maximum Subarray
  *  
  * Given an integer array `nums`, find the subarray which has the 
  * largest sum and return the sum. 
  * 
  * @examples
  * maxSubArray([5, 4, -1, 7, 8]) = 23
  * maxSubArray([-2, 1, -3, 4, -1, 2, -5, 0]) = 5
  * maxSubArray([2, 4, 3, -1, -4, -9]) = 9
  */

const maxSubArray = (nums) => {
  let max = 0;
  if (nums.length===1){
    return nums[0];
  }
  for (let i = 0; i < nums.length - 1; i++) {
    let count = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      count += nums[j];

      if (count > max) {
        console.log("new max", count);
        max = count;
      }
    }
  }
  return max;
}

//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;
