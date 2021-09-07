/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function(nums, k) {
  nums.sort((a,b) => a-b);
  let start = 0;
  let end = nums.length - 1;
  let result = -1;
  
  while (start < end) {
    let sum = nums[start] + nums[end];
    if (sum > result && sum < k) {
      result = sum;
      console.log(result)
      
    }
    sum >= k ? end-- : start++;
  }
  return result;
};