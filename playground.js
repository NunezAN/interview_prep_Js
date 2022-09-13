const pyramid = (n) => {
  columnWidth = 2 * n - 1;
  for (let row = 0; row < n; row++) {
    let pyramidColumn = "";
    for (let column = 0; column <= columnWidth; column++) {
      middle = Math.floor(columnWidth / 2);
      if (column>= middle -row && column <= middle + row) {
        pyramidColumn = pyramidColumn + "#";
      } else {
        pyramidColumn = pyramidColumn + " ";
      }
    }
    console.log(pyramidColumn);
  }
};
console.log(pyramid(3));
