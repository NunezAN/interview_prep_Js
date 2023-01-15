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
  const intStr = int.toString().split("").reverse().join("");
  let result = parseInt(intStr);
  if (int < 0) {
    result *= -1;
  }
  return result;
};

module.exports = reverseInteger;
