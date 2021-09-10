/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
    let diff = Infinity;
    let size = nums.length;
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < size && diff !== 0; i++) {
        let low = i + 1;
        let high = size - 1;
        while (low < high) {
            let sum = nums[i] + nums[low] + nums[high];
            if (Math.abs(target - sum) < Math.abs(diff)) {
                diff = target - sum;
            }
            if (sum < target) {
                low++;
            } else {
                high--;
            }
        }
    }
    return target - diff;
};