/** Three Sum
 *
 * Given an array of integers 'nums', return an array of all the
 * three numbers that add up to 0.
 *
 * Note: There cannot be any duplicate triplets in the results array.
 *
 * @examples
 * threeSum([-1, 0, 1, 2, -1, -4]) = [[-1, -1, 2], [-1, 0, 1]]
 * threeSum([-2, -2, 0, 0, 1, 1, 2, 2]) = [[ -2, 0, 2 ], [ -2, 1, 1 ]]
 * threeSum([0, 0, 0, 0]) = [[0, 0, 0]]
 */

function threeSum(nums) {
  // solutionArray = [];
  // nums = nums.sort(function (a, b) {
  //   return a - b;
  // });
  // // console.log(nums);
  // i = 0;
  // l = i + 1;
  // r = nums.length - 1;
  // while (i < nums.length - 2) {
  //   // (console.log(negative);
  //   if (nums[i] !== nums[i - 1]) {
  //     while (l < r) {
  //       // console.log(i,l,r);
  //       let sum = nums[l] + nums[r] + nums[i];
  //       if (0 === sum) {
  //         solutionArray.push([nums[i], nums[l], nums[r]]);
  //         l++;
  //         while (nums[l] === nums[l - 1] && l < r) {
  //           l++;
  //         }
  //       } else if (sum < 0) {
  //         l++;
  //       } else if (sum > 0) {
  //         r--;
  //       }
  //     }
  //   }
  //   i++;
  //   l = i + 1;
  //   r = nums.length - 1;
  // }
  // return solutionArray;
  nums = nums.sort((a, b) => a - b);
  let i = 0;
  let l = 1;
  let r = nums.length - 1;
  let result = [];
  while (i < nums.length - 2) {
    if (nums[i] !== nums[i - 1]) {
      while (l < r) {
        const sum = nums[i] + nums[l] + nums[r];
        if (sum === 0) {
          result.push([nums[i], nums[l], nums[r]]);
          l++;
          while (nums[l] === nums[l - 1] && l < r) {
            l++;
          }
        }
        if (sum < 0) {
          l++;
        }
        if (sum > 0) {
          r--;
        }
      }
    }
    i++;
    l = i + 1;
    r = nums.length - 1;
  }
  return result;
}

//DO NOT EDIT BELOW THIS LINE
module.exports = threeSum;
