/** Given an array filled with object ID's, return the
 * list of unique ID's in a string.
 *
 * @example
 * stringifyId([
 *  { id: 1 },
 *  { id: 2 },
 *  { id: 2 },
 *  { id: 3 },
 * ]) === '1, 2, 3'
 *
 * stringifyId([
 *  { id: 'ABC', name: 'David' },
 *  { id: 'abc', name: 'Bragg' },
 *  { id: 'CBA', name: 'Bragg' },
 * ]) === 'ABC, abc, CBA'
 */

const stringifyId = (arr) => {
  // let uniqueArray = [];
  // for(let i=0;i<arr.length;i++){
  //     if(!uniqueArray.includes(arr[i].id))
  //     {
  //         uniqueArray.push(arr[i].id);
  //     }
  // }
  // return uniqueArray.join(", ");

  // const idArray = arr.map(elem => elem.id);
  // const uniqueArray = [...new Set(idArray)];
  // return uniqueArray.join(", ");

  
    resultSet = new Set();
    arr.forEach((elem) => {
      resultSet.add(elem.id);
    });
    return [...resultSet].join(", ");
  
};

module.exports = stringifyId;
