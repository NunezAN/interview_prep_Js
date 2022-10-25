const pyramid = (n) => {
  columnWidth = 2 * n - 1;
  const mid = Math.floor(columnWidth / 2);
  for (let row = 0; row < n; row++) {
    colString = "";
    for (let col = 0; col < columnWidth; col++) {
      if(col <= mid+row && col >= mid-row){
        colString += `#`;
      }
      else{
        colString += ` `;
      }
    }
    console.log(colString);
  }
};
console.log(pyramid(4));
