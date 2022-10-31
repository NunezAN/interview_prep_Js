const maxWater = (heights) => {
  let l = 0;
  let r = heights.length - 1;
  let maxArea = 0;
  while (l < r) {
    const width = r - l;
    const height = Math.min(heights[l], heights[r]);
    const area = height * width;
    if (area > maxArea) {
      maxArea = area;
    }
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return maxArea;
};
console.log(maxWater([1, 5, 6, 3, 4, 2]) );
