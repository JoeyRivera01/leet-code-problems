/**
 * @param {number[]} nums
 * @return {boolean}
 */
// Approach: Dynamic Programming Top-down
// Time complexity O(n^2)
// Spance complexity O(n)

var canJump = function(nums) {
    let size = nums.length;
    let memo = new Array(size).fill('UNKNOWN'); 
    memo[size - 1] = 'GOOD';
 
    function canJumpFromPosition(position, nums) {
        if (memo[position] !== 'UNKNOWN') {
            return memo[position] === 'GOOD' ? true : false;
        }
        
        let furthestJump = Math.min(size - 1, position + nums[position]);
        for (let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
            if (canJumpFromPosition(nextPosition, nums)) {
                memo[position] = 'GOOD'
                return true;
            }
        }
        
        memo[position] = 'BAD';
        return false;
    }
    
    return canJumpFromPosition(0, nums);
};