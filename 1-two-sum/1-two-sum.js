/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const complementMap = {};
    for (let i = 0; i < nums.length; i++) {
        if (complementMap[target - nums[i]] != undefined) {
            return [complementMap[target - nums[i]], i];
        } else {
            complementMap[nums[i]] = i;
        }
    }
};