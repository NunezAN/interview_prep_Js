const reverseInt = (int) => {
  const intStr = int.toString().split("").reverse().join("");
  let result = parseInt(intStr);
  if (int < 0) {
    result *= -1;
  }
  return result;
};
console.log(reverseInt(-641));
