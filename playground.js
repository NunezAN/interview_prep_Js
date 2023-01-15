const pyramid = (n) => {
  const colWidth = 2 * n - 1;
  const mid = Math.floor(colWidth / 2);
  for (let i = 0; i < n; i++) {
    let col = "";
    for (let j = 0; j < colWidth; j++) {
      if (j <= mid + i && j >= mid - i) {
        col = col + "#";
      } else {
        col = col + " ";
      }
    }
    console.log(col);
  }
};
console.log(pyramid(2));
