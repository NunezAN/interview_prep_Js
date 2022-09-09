const maxCharacter = (str) => {
  const charMap = {};
  let maxChar = null;
  let maxCount = 0;
  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] = charMap[char] + 1;
    }
    if (maxCount < charMap[char]) {
      maxCount = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
};

console.log(maxCharacter("foo 111123"));
