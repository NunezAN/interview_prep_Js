/** Reverse the ordering of the numbers of a given integer.
 *
 * @example
 * reverseInt(4321) === 1234
 * reverseInt(100) === 1
 * reverseInt(-641) === -146
 * reverseInt(-50) === -5
 */

const reverseInteger = (int) => {
  // reverseIntString = int.toString().split("").reverse().join("");
  // if(int < 0){
  //     reverseIntString = "-" + reverseIntString;
  // }
  // return parseInt(reverseIntString);
  let arrName = int.toString().split("").reverse().join("");
  if (int < 0) {
    arrName = "-" + arrName;
  }
  return parseInt(arrName);
};

module.exports = reverseInteger;
