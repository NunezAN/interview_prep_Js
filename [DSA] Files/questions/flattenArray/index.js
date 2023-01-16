/** Flatten Array **
 *
 * Given an array 'nums' that can have nested arrays inside it,
 * flatten the array.
 *
 *
 * @example
 * flatten([1, 2, 3, [4, 5]]) -> [1, 2, 3, 4, 5]
 * flatten([1, 2, 3, [4, [5]]]) -> [1, 2, 3, 4, 5]
 * flatten([1, [2, 3, [4, [5]]]]) -> [1, 2, 3, 4, 5]
 *
 */

const flatten = (nums) => {
  // const result = [];

  // const flattenArray = (nums) => {
  //   for (elem of nums) {
  //     if (Array.isArray(elem)) {
  //       flattenArray(elem);
  //     } else {
  //       result.push(elem);
  //     }
  //   }
  // };

  // flattenArray(nums);

  // return result;
  result = [];
  const flattenArr = (arr) => {
    for (let num of arr) {
      if (Array.isArray(num)) {
        flattenArr(num);
      } else {
        result.push(num);
      }
    }
  };
  flattenArr(nums);
  return result;
};

module.exports = flatten;
