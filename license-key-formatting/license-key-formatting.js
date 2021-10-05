/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

// You are given a license key represented as a string s that consists of only alphanumeric characters and dashes. The string is separated into n + 1 groups by n dashes. You are also given an integer k.

// We want to reformat the string s such that each group contains exactly k characters, except for the first group, which could be shorter than k but still must contain at least one character. Furthermore, there must be a dash inserted between two groups, and you should convert all lowercase letters to uppercase.

// Return the reformatted license key.

var licenseKeyFormatting = function(s, k) {
    // set string to lower case
    // replace all hyphens
    let str = s.replaceAll('-', '').toUpperCase();
    let arr = str.split('');
        
    for (let i = arr.length - 1 - k; i >= 0; i -= k) {
        arr[i] = arr[i] + '-';
    }
    
    return arr.join('');
    
};