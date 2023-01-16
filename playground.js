const containsDuplicate = (nums) => {
  let dupeSet = new Set();
  for (let num of nums) {
    if (dupeSet.has(num)) {
      return true;
    } else {
      dupeSet.add(num);
    }
  }
  return false;
};
console.log(containsDuplicate([1, 2, 2, 5]));
