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

    for (let i = 0; i < nums.length; i++) {
      const remain = (target - nums[i]);
      console.log(remain);
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[j] === remain) {
          console.log("FOUND MATCH!!");
          twoSumArray.push(i);
          twoSumArray.push(j);
          return twoSumArray;
        }
      }
    }
    return twoSumArray;
}

module.exports = twoSum;
