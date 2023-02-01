/** Two Sorted Sum **
 *
 * Find two numbers in the given sorted array that add up to `target`
 * and return the indices of those two numbers in the array.
 *
 *
 * @example
 * twoSum([1, 2, 4, 9], 13) -> [2, 3]
 * twoSum([10, 20], 30) -> [0, 1]
 * twoSum([2, 3, 4], 6) -> [0, 2]
 *
 */

const twoSortedSum = (nums, target) => {
  // const map =new Map();
  // for(let index = 0;index<nums.length;index++){
  //   const difference = target - nums[index];
  //   if(map.has(nums[index]))
  //   {
  //     return [map.get(nums[index]),index]
  //   }
  //   map.set(difference, index);
  // }
  // return [];

  // let l=0;
  // let r=nums.length -1;

  // while(l<r){
  //     const sum = nums[l] + nums[r];
  //     if(sum < target)
  //     {
  //         l++;
  //     }
  //     if(sum>target)
  //     {
  //         r--;
  //     }
  //     if(sum === target){
  //         return [l,r];
  //     }
  // }
  //   const targetMap = new Map();
  //   for (let i = 0; i < nums.length; i++) {
  //     if (targetMap.has(nums[i])) {
  //       return [targetMap.get(nums[i]), i];
  //     }
  //     targetMap.set(target - nums[i], i);
  //   }
  let sumMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (sumMap.has(nums[i])) {
      return [sumMap.get(nums[i]), i];
    } else {
      sumMap.set(target - nums[i], i);
    }
  }
};

module.exports = twoSortedSum;
