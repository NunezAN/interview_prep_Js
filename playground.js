const capitalize = (str) => {
  const strArr = str.split(" ");
  const result = [];
  for (let word of strArr) {
    result.push(word[0].toUpperCase() + word.slice(1, word.length));
  }
  console.log(result);
  return result.join(" ");
};
console.log(capitalize("coding is awesome"));
