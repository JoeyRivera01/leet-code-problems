var twoSum = function(nums, target) { 
    // Time: O(n)
    // Space: O(n)
    objMap = {};
    for (var i = 0; i < nums.length; i++) {
        let cur = nums[i];
        let x = target - cur;
        if (objMap[x] !== undefined) {
            return [objMap[x], i];
        } else {
            objMap[cur] = i;
        }
    } 
    
    return null;
};