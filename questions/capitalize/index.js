/** Given a sentence, capitalize the first letter of each word and
 * return the capitalized sentence.
 *
 * @example
 * capitalize('coding is awesome') === 'Coding Is Awesome'
 * capitalize('a green apple') === 'A Green Apple'
 * capitalize('i love frontend simplified') === 'I Love Frontend Simplified'
 */

const capitalize = (str) => {
    const strArray = str.split(" ");
    let result = [];
    for (let word of strArray) {
      firstLetter = word[0].toUpperCase();
      restWord = word.slice(1);
      result.push(firstLetter + restWord);
    }
    return result.join(" ");
};

module.exports = capitalize;
