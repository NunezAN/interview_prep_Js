/** Minimum Number in Rotated Sorted Array **
 *
 * Given a rotated sorted array, return the smallest
 * number in the array.
 *
 * Note: Your solutions' time complexity must be faster than O(n).
 *
 * @example
 * findMinimum([5, 4, 1, 2]) -> 1
 * findMinimum([7, 9, 12, 3, 4]) -> 3
 * findMinimum([3, 4, 2, 0]) -> 0
 *
 */

const findMinimum = (nums) => {
  // let l = 0;
  // let r = nums.length - 1;
  // let mid = 0;
  // while (l < r) {
  //   console.log(l, r);
  //   mid = Math.floor((l + r) / 2);
  //   if (nums[mid] > nums[r]) {
  //     l = mid + 1;
  //   } else {
  //     r = mid;
  //   }
  // }
  // return nums[l];
  l = 0;
  r = nums.length - 1;
  let mid = Math.floor((l + r) / 2);
  while (l < r) {
    if (nums[mid] > nums[r]) {
      l = mid + 1;
    } else {
      r = mid;
    }
    mid = Math.floor((l + r) / 2);
  }
  return nums[l];
};

module.exports = findMinimum;
