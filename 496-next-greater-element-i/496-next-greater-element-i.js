/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let greaterElMap = {};
    
    // pre-process nums2 into stack and map
    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            greaterElMap[stack.pop()] = nums2[i];
        }
        stack.push(nums2[i]);
    }
    
    // set any elements with no greater els to the right as -1
    while (stack.length > 0) {
        greaterElMap[stack.pop()] = -1;
    }
    
    return nums1.map((num) => greaterElMap[num]);
};