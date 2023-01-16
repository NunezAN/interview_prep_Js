const maxWater = (heights) => {
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
console.log(maxWater([1, 5, 6, 3, 4, 2]));
