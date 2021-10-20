/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums, min = Infinity) {
    nums.sort((a, b) => a - b);
    let n = nums.length, i = 0, j = n - 4;
    
    while (0 <= j && j < n) {
        min = Math.min(min, nums[j++] - nums[i++]);
    }
    return min < Infinity ? min : 0;
}

