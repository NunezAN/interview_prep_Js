const steps = (n) => {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let y = 0; y < n; y++) {
      if (y > i) {
        str = str + " ";
      } else {
        str = str + "#";
      }
    }
    console.log(str);
  }
};
console.log(steps(3));
