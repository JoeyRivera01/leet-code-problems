/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let map = {};
    for (let num of nums) {
        map[num] = true;
    }
    for (let i = 0; i < nums.length; i++) {
        if (map[i] === undefined) {
            return i;
        }
    }
    return nums.length;
};