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
  let max = nums[0];
  let maxCount = nums[0];
  for (const num of nums.slice(1)) {
    maxCount += num;
    if (maxCount < 0) {
      maxCount = 0;
    }
    if (max < maxCount) {
      max = maxCount;
      console.log(max, num);
    }
  }
  return max;
};

//DO NOT EDIT BELOW THIS LINE
module.exports = maxSubArray;
