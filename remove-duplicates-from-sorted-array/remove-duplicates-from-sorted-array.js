/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currValue = nums[0];
    let currIndex = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > currValue) {
            nums[currIndex] = nums[i];
            currValue = nums[i];
            currIndex++; 
        }
    }
    
    return currIndex;
};