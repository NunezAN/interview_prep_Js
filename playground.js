const anagrams = (strA, strB) => {
  const charMapA = new Map();
  const charMapB = new Map();
  let anagram = false;
  for (let char of strA.toUpperCase()) {
    if (char !== " ") {
      charMapA.set(char, charMapA.get(char) + 1 || 1);
    }
  }
  for (let char of strB.toUpperCase()) {
    if (char !== " ") {
      charMapB.set(char, charMapB.get(char) + 1 || 1);
    }
  }
  if (charMapA.size === charMapB.size) {
    for (const [key, val] of charMapA) {
      let valB = charMapB.get(key);
      if (val !== valB || !charMapB.has(key)) {
        return false;
      } else {
        anagram = true;
      }
    }
  }
  return anagram;
};

console.log(anagrams("save", "vase"));
