/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    let n = nums.length;
    
    if (n === 0) return 0;
    
    let dp = new Array(n+1);
    
    // base cases
    dp[n] = 0;
    dp[n - 1] = nums[n - 1];
    
    // dp table calc
    for (let i = n - 2; i >= 0; i--) {
        dp[i] = Math.max(dp[i + 1], dp[i + 2] + nums[i]);
    }
    
    return dp[0];
};