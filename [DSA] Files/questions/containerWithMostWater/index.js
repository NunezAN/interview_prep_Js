/** Container with Most Water **
 *
 * Given an array 'heights' which represents the heights of blocks
 * on a container, find the maximum area of water that can be stored
 * within these blocks.
 *
 * @example
 * maxWater([1, 5, 4, 3]) -> 6
 * maxWater([1, 5, 6, 3, 4, 2]) -> 12
 * maxWater([4, 3, 2, 1, 4]) -> 16
 *
 */

const maxWater = (heights) => {
  // let l=0;
  // let r=heights.length-1;
  // let maxArea=0;

  // while(l<r){
  //    const height = Math.min(heights[l],heights[r])
  //    const width = r-l;
  //    const area = height * width;

  //    if(area >maxArea){
  //       maxArea = area;
  //    }

  //    if(heights[l]<heights[r])
  //    {
  //       l++;
  //    }
  //    else{
  //       r--
  //    }
  // }

  // return maxArea;
  let l = 0;
  let r = heights.length - 1;
  let maxArea = 0;
  while (l < r) {
    let length = r - l;
    let height = Math.min(heights[l], heights[r]);
    let area = length * height;
    if (area > maxArea) maxArea = area;

    if (heights[l] < heights[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
};

module.exports = maxWater;
