const capitalize = (str) => {
  const strArray = str.split(" ");
  let result = [];
  for (let word of strArray) {
    firstLetter = word[0].toUpperCase();
    restWord = word.slice(1);
    result.push(firstLetter + restWord);
  }
  return result.join(" ");
};
console.log(capitalize("coding is awesome"));
