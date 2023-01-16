/** Binary Search **
 *
 * Given a sorted array 'nums' and an integer 'target', return
 * the index of the target.
 *
 * Note: Your solutions' time complexity must be faster than O(n).
 *
 * @example
 * binarySearch([1, 2, 4, 9, 12], 9) -> 3
 * binarySearch([-2, -1, 4, 5, 7], -1) -> 1
 * binarySearch([-1, 4, 18, 20], 18) -> 2
 *
 */

const binarySearch = (nums, target) => {
  // let l = 0;
  // let r = nums.length - 1;
  // let mid = Math.floor((l + r) / 2);
  // while (l <= r) {
  //   console.log(nums[mid]);
  //   if (nums[mid] === target) {
  //     return mid;
  //   } else if (nums[mid] < target) {
  //     l = mid + 1;
  //   } else if (nums[mid] > target) {
  //     r = mid - 1;
  //   }
  //   mid = Math.floor((l + r) / 2);
  // }
  // return false;
  let l = 0;
  let r = nums.length - 1;
  let mid = Math.floor((l + r) / 2);
  while (l < r) {
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    }
    mid = Math.floor((l + r) / 2);
  }
  return 0;
};

module.exports = binarySearch;
