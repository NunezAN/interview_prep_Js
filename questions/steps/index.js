/** Print out steps based on a given positive integer N.
 * For each line, print out the character '#' to demonstrate
 * a step and make sure to use spaces to fill in the line.
 *
 * @example
 * steps(2)
 *  '# '
 *  '##'
 * steps(3)
 *  '#  '
 *  '## '
 *  '###'
 * steps(4)
 *  '#   '
 *  '##  '
 *  '### '
 *  '####'
 */

const steps = (n) => {
  // for (let i = 0; i < n; i++) {
  //     let str = "";
  //     for (let y = 0; y < n; y++) {
  //       if (y > i) {
  //         str = str + " ";
  //       } else {
  //         str = str + "#";
  //       }
  //     }
  //     console.log(str);
  //   }
  for (let i = 0; i < n; i++) {
    for (let i = 0; i < n; i++) {
      let row = "";
      for (let j = 0; j < n; j++) {
        if (j <= i) {
          row += "#";
        } else {
          row += " ";
        }
      }
      console.log(row);
    }
  }
};

module.exports = steps;
