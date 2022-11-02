/** Move Zeroes **
 *
 * Given an array 'nums', move all the zeroes to the end.
 *
 * Note: You can not make a copy of the 'nums' array.
 *
 * @example
 * moveZeroes([1, 0, 2, 0]) -> [1, 2, 0, 0]
 * moveZeroes([10, 0, 9]) -> [10, 9, 0]
 * moveZeroes([3, 4, 0, 2, 0]) -> [3, 4, 2, 0, 0]
 *
 */

const moveZeroes = (nums) => {
  // let l=0;
  // let r=0;
  // while (r<nums.length)
  // {
  //     if(nums[r]!==0){
  //         console.log(l,r)
  //         let temp=nums[l];
  //         nums[l]=nums[r];
  //         nums[r]=temp;
  //         l++;
  //     }
  //     r++;
  // }
  // return nums;
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    if (nums[l] === 0) {
      while (nums[r] === 0) {
        r--;
      }
      const temp = nums[r];
      nums[r] = nums[l];
      nums[l] = temp;
      r--;
    }
    l++;
  }
  console.log(nums);
  return nums;
};

module.exports = moveZeroes;
