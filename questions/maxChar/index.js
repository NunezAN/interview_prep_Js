/** Given a string, find the character that is used the 
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

const maxCharacter = (str) => {
    let strMost = [null, 0];
    const strNoDuplicates = [...new Set(str)];
    strNoDuplicates.forEach((elem) => {
      count = 0;
      str.split("").forEach((elemStr) => elemStr === elem && count++);
      if (count > strMost[1]) {
        strMost[0] = elem;
        strMost[1] = count;
      }
      return elem;
    });
    return strMost[0];
};

module.exports = maxCharacter;
