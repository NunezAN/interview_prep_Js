const stringifyId = (arr) => {
  resultSet = new Set();
  arr.forEach((elem) => {
    resultSet.add(elem.id.toUpperCase());
  });
  return [...resultSet];
};
console.log(
  stringifyId([
    { id: "ABC", name: "David" },
    { id: "abc", name: "Bragg" },
    { id: "CBA", name: "Bragg" },
  ])
);
