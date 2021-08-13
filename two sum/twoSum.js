/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

var twoSum = function(nums, target) {
  // Time: O(n)
  // Space: O(n)
  objMap = {};
  for (var i = 0; i < nums.length; i++) {
      let cur = nums[i];
      let x = target - cur;
      if (objMap[x] !== undefined) {
          return [objMap[x], i];
      } else {
          objMap[cur] = i;
      }
  }

  return null;
};