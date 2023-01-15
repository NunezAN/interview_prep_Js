const anagrams = (strA, strB) => {
  let charMapA = new Map();
  let charMapB = new Map();

  for (let str of strA.toUpperCase()) {
    charMapA.set(str, charMapA.get(str) + 1 || 1);
  }
  for (let str of strB.toUpperCase()) {
    console.log(str);
    charMapB.set(str, charMapB.get(str) + 1 || 1);
  }
  if (charMapA.size !== charMapB.size) return false;
  
  for (const [key, val] of charMapA) {
    const valB = charMapB.get(key);
    valB;
    if (val !== valB || !charMapB.has(key)) {
      return false;
    }
  }
  return true;
};
console.log(anagrams("save", "vase"));
