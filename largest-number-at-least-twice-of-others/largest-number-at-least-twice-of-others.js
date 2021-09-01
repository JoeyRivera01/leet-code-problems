/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function(nums) {
  let result = 0;
  let first = -Infinity;
  let second = -Infinity;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
      result = i;
    } else if (nums[i] > second) {
      second = nums[i];
    }
  }
  return first >= second * 2 ? result : -1;
};