const arrayChunk = (array, size) => {
  let arrayChunk = [];
  for (let i = 0; i < array.length; i += size) {
    arrayChunk.push(array.slice(i, i + size));
  }
  return arrayChunk;
};

console.log(arrayChunk([0, 1, 2, 3, 4], 2));
