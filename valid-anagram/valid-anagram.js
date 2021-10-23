/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    const charCountMap = new Map();
    
    // count each char in both strings
    for (let char of s) {
        charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }
    
    for (let char of t) {
        // doesn't have the character
        if (!charCountMap.has(char)) return false;
        if (charCountMap.get(char) === 0) return false; 
        else {
            charCountMap.set(char, charCountMap.get(char) - 1);
        }
    }
    return true;
};