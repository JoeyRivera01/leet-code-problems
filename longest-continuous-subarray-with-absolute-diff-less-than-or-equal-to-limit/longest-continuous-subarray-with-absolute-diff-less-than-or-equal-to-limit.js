/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let maxSub = -Infinity;
    let n = nums.length;
    
    for (let i = 0; i < n; i++) {
        let subArray = [];
        for (let j = i; j < n; j++) {
            subArray.push(nums[j]);
            let min = Math.min(...subArray);
            let max = Math.max(...subArray);
            
            if (Math.abs(max - min) <= limit) {
                maxSub = Math.max(maxSub, subArray.length);
            }
        }
    }
    return maxSub;
    
};




































var longestSubarray = function(nums, limit) {
 
    let count = 0;
    let result = 0;
    let current = [];
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    
    for (let index = 0; index< nums.length; index++) {
        
        current.push(nums[index]);
        
        if (current.length < result) {
            continue;
        }
        
        min = Math.min(min, nums[index]);
        max = Math.max(max, nums[index]);
        
        let diff = Math.abs(max-min);
        
        if (diff <= limit) {
            count = current.length;
        } else {
            let ele = current.shift();
            
            if (ele === min) {
                min = Math.min(...current);
            } else if (ele === max) {
                max = Math.max(...current);
            }
            
        }
        
        
        result = Math.max(result, count);
    }
    
    
    return result;
};