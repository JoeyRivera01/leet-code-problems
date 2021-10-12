/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    let ranges = [],n = [lower-1,...nums, upper+1]
        for(let i=1;i<n.length;i++) {
            let diff = n[i]-n[i-1];
            if(diff < 2) continue;
            else if(diff == 2)
                ranges.push(`${n[i-1]+1}`);
            else if(diff>2)
                ranges.push(`${n[i-1]+1}->${n[i]-1}`);
        }
        return ranges;
};