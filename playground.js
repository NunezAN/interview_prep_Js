const reverseString = (str) => {
  let result = "";
  for(const char of str){
    result = char+result;
  }
  return result;
};
console.log(reverseString('david'));
