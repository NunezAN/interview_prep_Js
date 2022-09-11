const anagrams = (strA, strB) => {
  let charMapA = {};
  let charMapB = {};
  let anagram = false;
  for (let char of strA.toUpperCase()) {
    charMapA[char] = charMapA[char] ? charMapA[char] + 1 : 1;
  }
  for (let char of strB.toUpperCase()) {
    charMapB[char] = charMapB[char] ? charMapB[char] + 1 : 1;
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

console.log(anagrams("save", "vase"));
