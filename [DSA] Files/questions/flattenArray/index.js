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
  const result = []

  const flattenArray = (nums) => {
    for(elem of nums){
      if(Array.isArray(elem)){
        flattenArray(elem);
      }
      else{
        result.push(elem);
      }
    }
  }

  flattenArray(nums)

  return result


 };

module.exports = flatten; 