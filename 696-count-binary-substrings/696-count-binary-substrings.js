/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    // approach - group by character
    let groups = [];
    let t = 0;
    groups[0] = 1;
    for (let i = 1; i < s.length; i++) {
        if (s[i-1] !== s[i]) {
            groups[++t] = 1;
        } else {
            groups[t]++;
        }
    }
    
    let ans = 0;
    for (let i = 1; i <= t; i++) {
        ans += Math.min(groups[i-1], groups[i]);
    }
    return ans;
};