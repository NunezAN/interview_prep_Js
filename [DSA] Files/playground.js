const maxCharacter = (str) => {
  const charMap = new Map();
  let maxChar = "";
  let maxCount = 0;
  for (char of str) {
    const count = charMap.get(char);
    charMap.set(char, count + 1 || 1);
    if (maxCount < charMap.get(char)) {
      maxCount = charMap.get(char);
      maxChar = char;
    }
  }
  return maxChar;
};
console.log(maxCharacter("aabbbccd"));
