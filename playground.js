const steps = (n) => {
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (j <= i) {
        row += "*";
      } else {
        row += " ";
      }
    }
    console.log(row);
  }
};
console.log(steps(4));
