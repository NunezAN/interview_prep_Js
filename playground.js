const palindrome = (str) => {
  reverseStr = "";
  for (const char of str) {
    reverseStr = char + reverseStr;
  }
  return reverseStr === str;
};
console.log(palindrome("abba"));
