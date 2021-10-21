/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target, memo = {}) {
    if (target in memo) return memo[target];
    if (target === 0) return 1;
    let count = 0;
    
    for (let num of nums) {
        let remainder = target - num;
        if (remainder >= 0) {
            count += combinationSum4(nums, remainder, memo);
            memo[target] = count;
        }
    }
    
    return count;
};