/** Print out steps for a pyramid based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate a step
 * and make sure to use spaces to fill in the line.
 *
 * @example
 * pyramid(2) -> 3
 *  ' # '
 *  '###'
 * pyramid(3) -> 5
 *  '  #  '
 *  ' ### '
 *  '#####'
 * pyramid(4) -> 7
 *  '   #   '
 *  '  ###  '
 *  ' ##### '
 *  '#######'
 */

const pyramid = (n) => {
  // columnWidth = 2 * n - 1;
  // for (let row = 0; row < n; row++) {
  //   let pyramidColumn = "";
  //   for (let column = 0; column <= columnWidth; column++) {
  //     middle = Math.floor(columnWidth / 2);
  //     if (column>= middle -row && column <= middle + row) {
  //       pyramidColumn = pyramidColumn + "#";
  //     } else {
  //       pyramidColumn = pyramidColumn + " ";
  //     }
  //   }
  //   console.log(pyramidColumn);
  // }
  columnWidth = 2 * n - 1;
  const mid = Math.floor(columnWidth / 2);
  for (let row = 0; row < n; row++) {
    colString = "";
    for (let col = 0; col < columnWidth; col++) {
      if (col <= mid + row && col >= mid - row) {
        colString += `#`;
      } else {
        colString += ` `;
      }
    }
    console.log(colString);
  }
};

module.exports = pyramid;
