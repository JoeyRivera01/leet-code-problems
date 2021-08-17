/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const numsMap = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (numsMap[nums[i]] !== undefined) {
            return true;
        } else {
            numsMap[nums[i]] = true;
        }
    }
    
    return false;
};