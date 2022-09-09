/** Given a string, find the character that is used the
 * maximum number of times.
 *
 * @example
 * maxCharacter('aabbbccd') === 'b'
 * maxCharacter('foo 111123') === '1'
 */

const maxCharacter = (str) => {
  // let strMost = [null, 0];
  // const strNoDuplicates = [...new Set(str)];
  // strNoDuplicates.forEach((elem) => {
  //   count = 0;
  //   str.split("").forEach((elemStr) => elemStr === elem && count++);
  //   if (count > strMost[1]) {
  //     strMost[0] = elem;
  //     strMost[1] = count;
  //   }
  //   return elem;
  // });
  // return strMost[0];

//   const charMap = {};
//   let maxChar = null;
//   let maxCount = 0;
//   for (let char of str) {
//     charMap[char] = charMap[char] ? charMap[char] + 1 : 1;

//     if (maxCount < charMap[char]) {
//       maxCount = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;

const charMap = new Map();
    let maxCharacter = "";
    let maxCount = 0;
    for(const char of str){
        const count = charMap.get(char);
        charMap.set(char, count+1 || 1);
        if(maxCount < charMap.get(char)){
            maxCharacter = char;
            maxCount = charMap.get(char);
        }
    }
    return maxCharacter;
};

module.exports = maxCharacter;
