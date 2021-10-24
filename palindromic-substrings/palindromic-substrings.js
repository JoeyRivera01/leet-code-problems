/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i += 1) {
        helpers(s, i, i) // found all single and odd number length pal
        helpers(s, i, i + 1) // found all even number length pal 
    }
    
    return count;
    
    function helpers(s, low, high) {
        while (low >= 0 && high <= s.length && s[low] === s[high]) {
            count += 1;
            low -= 1;
            high += 1;
        }
    }
};
