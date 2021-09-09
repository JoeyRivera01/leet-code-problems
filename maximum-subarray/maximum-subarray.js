/**
 * @param {number[]} nums
 * @return {number}
 */

// Time complexity: O(N), where N is the length of nums.
// We iterate through every element of nums exactly once.
// Space complexity: O(1)
// No matter how long the input is, we are only ever using 2 variables: currentSubarray and maxSubarray.
var maxSubArray = function(nums) {
  let currentSubarray = nums[0];
  let maxSubarray = nums[0];
  
  for (let i = 1; i < nums.length; i++){
    let num = nums[i];
    currentSubarray = Math.max(num, currentSubarray + num);
    maxSubarray = Math.max(maxSubarray, currentSubarray);
  }
  
  return maxSubarray;
};