/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // if needle is an empty string, return zero
    if (needle.length === 0) return 0;
    
    // iterate over the haystack string
    for (var i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
           let substring = haystack.substring(i, i + needle.length);
            if (substring === needle) {
                return i;
            }
        }
    }
    return -1;
};