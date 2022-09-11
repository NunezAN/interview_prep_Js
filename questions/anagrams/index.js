/** Given two strings, find out if they are anagrams of each other.
 * Two strings are anagrams if they both use the exact same characters
 * the same number of times. Spaces are not to be considered as characters.
 * Capital letters are to be considered the same as lower case letters.
 *
 * @example
 * anagrams('save', 'vase') === true
 * anagrams('C A T', 'act') === true
 * anagrams('frontend', 'simplified') === false
 */

const anagrams = (strA, strB) => {
  let charMapA = {};
  let charMapB = {};
  let anagram = false;
  for (let char of strA.toUpperCase()) {
    if (char !== " ") {
      charMapA[char] = charMapA[char] ? charMapA[char] + 1 : 1;
    }
  }
  for (let char of strB.toUpperCase()) {
    if (char !== " ") {
      charMapB[char] = charMapB[char] ? charMapB[char] + 1 : 1;
    }
  }
  if (Object.keys(charMapA).length === Object.keys(charMapB).length) {
    for (let elemA in charMapA) {
      for (let elemB in charMapB) {
        if (elemA === elemB) {
          if (charMapA[elemA] !== charMapB[elemB]) {
            anagram = false;
            return anagram;
          } else {
            anagram = true;
          }
        }
      }
    }
  }
  return anagram;
};

module.exports = anagrams;
