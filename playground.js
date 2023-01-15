const maxCharacter = (str) => {
  let strMap = new Map();
  for (const char of str) {
    strMap.set(char, strMap.get(char) + 1 || 1);
  }
  let maxChar = "";
  let maxVal = 0;
  for (const [key, val] of strMap) {
    if (val > maxVal) {
      maxChar = key;
      maxVal = val;
    }
  }
  return maxChar;
};
console.log(maxCharacter("aabbbccd"));
