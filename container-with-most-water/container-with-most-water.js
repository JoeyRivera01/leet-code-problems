/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
  let max = 0;
  let left = 0, right = height.length - 1;
  while (left < right) {
    // calculate the current area and update the max area
    let currentMaxArea = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, currentMaxArea);
    // decide which pointer to move
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};