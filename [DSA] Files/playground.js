const capitalize = (str) => {
  let capString = [];
  for (char of str.split(" ")) {
    capString.push(char.slice(0, 1).toUpperCase() + char.slice(1, char.length));
  }
  return capString.join(" ");
};
console.log(capitalize("coding is awesome"));
