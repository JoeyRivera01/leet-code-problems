/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    nums1.forEach((num) => {
        let idx = nums2.indexOf(num) + 1;
        for (; idx < nums2.length; idx++) {
            if (num < nums2[idx]) {
                ans.push(nums2[idx]);
                return;
            }
        }
        ans.push(-1);
    })
    return ans;
};