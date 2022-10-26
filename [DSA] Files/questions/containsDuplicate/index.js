/** Contains Duplicate **
 *
 * Given an array of integers, return true if any integer appears
 * at least twice in the array, otherwise return false.
 *
 * @example
 * containsDuplicate([1, 2, 3, 4]) -> false
 * containsDuplicate([1, 2, 2, 5]) -> true
 * containsDuplicate([1, 2, 9, 5, 9]) -> true
 *
 */

const containsDuplicate = (nums) => {
  let dupMap = new Map();
  for (const num of nums) {
    if (dupMap.has(num)) {
      return true;
    }
    dupMap.set(num, true);
  }
  return false;
};

module.exports = containsDuplicate;
