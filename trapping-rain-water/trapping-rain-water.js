/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let maxLeft = height[0];
  let maxRight = height[height.length-1];

  let i = 1;
  let j = height.length - 2;
  let total = 0;

  while(i <= j) {
    if (maxLeft <= maxRight) {
      if (maxLeft - height[i] > 0){ 
        total += maxLeft - height[i];
      }
      maxLeft = Math.max(height[i], maxLeft)
      i++;
    } else {
      if (maxRight - height[j] > 0) {
        total += maxRight - height[j];
      }
      maxRight = Math.max(height[j], maxRight)
      j--;
    }
  }
return total;
};