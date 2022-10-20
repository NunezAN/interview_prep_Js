const stringifyId = (arr) => {
  const idArr = arr.map((elem) => elem.id);
  uniqueIds = [...new Set(idArr)];
  return uniqueIds.join(", ");
};
console.log(stringifyId([{ id: 1 }, { id: 2 }, { id: 2 }, { id: 3 }]));
