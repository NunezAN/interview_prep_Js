const anagrams = (strA, strB) => {
  let charMapA = new Map();
  for (const char of strA.toLowerCase().split(" ").join("")) {
    const count = charMapA.get(char);
    charMapA.set(char, count + 1 || 1);
  }
  
  let charMapB = new Map();

  for (const char of strB.toLowerCase().split(" ").join("")) {
    const count = charMapB.get(char);
    charMapB.set(char, count + 1 || 1);
  }
  if (charMapA.size !== charMapB.size){
    return false;
  }
  console.log(charMapA.size,charMapB.size);
  for (const [char, count] of charMapA) {
    if(charMapA.has(char)){
      if(charMapB.get(char) !== count){
        return false;
      }
    }
  }
  return true;
};
console.log(anagrams("act", "cats"));
