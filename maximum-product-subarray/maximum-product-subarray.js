/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let prevMax = nums[0];
    let prevMin = nums[0];
    let result = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        let currMax = Math.max(num * prevMax, num, num * prevMin);
        let currMin = Math.min(num * prevMin, num, num * prevMax);
        
        prevMax = currMax;
        prevMin = currMin;
        
        result = Math.max(currMax, result);
    }
    
    return result;
};

