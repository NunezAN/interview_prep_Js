/** Return true if a given string is a palindrome and return false if it
 * is not. Palindromes are strings that form the exact same string when reversed.
 * Make sure to include spaces and punctuation when determining if the given
 * string is a palindrome.
 *
 * @example
 * palindrome('abba') === true
 * palindrome('abcba') === true
 * palindrome('frontend') === false
 */

const palindrome = (str) => {
  // reverseStr = str.split("").reduce((accumulator,current)=> current+accumulator);
  // return (str === reverseStr);
  // let palindrome = true;
  // for(let i=0; i<=Math.floor(str.length/2);i++){
  //     if(str[i] !== str[str.length -1 -i]){
  //         palindrome = false;
  //         return palindrome;
  //     }
  // }
  // return palindrome;
  
  return(str ===(str.split("").reverse().join("")));
};

module.exports = palindrome;
