const reverseInt = (int) => {
  const arrName = int.toString().split("").reverse().join("");
  return parseInt(arrName);
}
console.log(reverseInt(4321));
