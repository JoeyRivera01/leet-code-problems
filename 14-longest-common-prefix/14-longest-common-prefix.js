/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // approach vertical scanning
    if (strs == null || strs.length == 0) return '';
    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== char) {
                return strs[0].substring(0, i);
            }
        }
    }
    
    return strs[0];
};