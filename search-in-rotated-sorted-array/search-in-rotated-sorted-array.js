/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const search = function(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = Math.floor((right + left) / 2);
        // base case
        if (target === nums[mid]) {
            return mid;
        }
        // check to see if the left side is sorted
        if (nums[left] <= nums[mid]) {
            // target is on the left
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1;
            } else {
                // target is on the right
                left = mid + 1;
            }
        // otherwise, right array is sorted 
        } else {
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}