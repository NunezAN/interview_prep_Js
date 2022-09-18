/** Two Sum **
 * 
 * Find two numbers in the given array that add up to `target`
 * and return the indices of those two numbers in the array
 * 
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([3, 2, 4], 6) -> [1, 2]
 * 
 */

const twoSum = (nums, target) => {
    twoSumArray = [];
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const remain = target - nums[i];
      if (map.get(nums[i])!==undefined){
        return [map.get(nums[i]),i];
      }
      map.set(remain,i);
    }
}

module.exports = twoSum;
