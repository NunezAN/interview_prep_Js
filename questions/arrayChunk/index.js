/** Given an array along with a chunk size, return a new array that contains
 * many subarrays where the length of each subarray is length `size`.
 *
 * @example
 * arrayChunk([0, 1, 2, 3], 2) === [[0, 1], [2, 3]]
 * arrayChunk([0, 1, 2, 3, 4], 2) === [[0, 1], [2, 3], [4]]
 * arrayChunk([0, 1, 2, 3, 4], 3) === [[0, 1, 2], [3, 4]]
 */

const arrayChunk = (array, size) => {
  // let arrayChunk = [];
  // for (let i = 0; i < array.length; i += size) {
  //   arrayChunk.push(array.slice(i, i + size));
  // }
  // return arrayChunk;

 
    let result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
    
};

module.exports = arrayChunk;
