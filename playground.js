const capitalize = (str) => {
  const strArray = str.split("");
  let start = 0;
  for (let i = 0; i < strArray.length; i++) {
    if ((strArray[i + 1] === " ") || (i===strArray.length - 1)) {
      console.log("in");
      strArray[start] = strArray[start].toUpperCase();
      start = i + 2;
    }
    console.log(i, start);
  }
  return strArray;
};
console.log(capitalize("coding is awesome"));
