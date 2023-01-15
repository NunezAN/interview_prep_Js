const arrayChunk = (array, size) => {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};
console.log(arrayChunk([0, 1, 2, 3], 2));
