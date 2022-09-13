/** Given a sentence, capitalize the first letter of each word and
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

const capitalize = (str) => {
  const strArray = str.split("");
  let start = 0;
  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i + 1] === " " || i === strArray.length - 1) {
      strArray[start] = strArray[start].toUpperCase();
      start = i + 2;
    }
  }
  return strArray.join("");
};

module.exports = capitalize;
