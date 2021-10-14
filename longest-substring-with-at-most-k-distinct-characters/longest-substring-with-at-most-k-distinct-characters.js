/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function(s, k) {
    let maxSubLen = -Infinity;
    let charCountMap = new Map();
    let start = 0, end = 0;
    
    // iterate over each character in string and increment end
    while (end < s.length) {
         // add the current character to map or increment its count
        if (charCountMap.has(s[end])) {
            charCountMap.get(s[end]).val++;
        } else {
            charCountMap.set(s[end], {val: 1});
        }
        // while the map length is greater than k
        while (charCountMap.size > k) {
            // decrement the count of the character at start from charCountMap
            charCountMap.get(s[start]).val--;
            // if char count of the character at start is 0
            if (charCountMap.get(s[start]).val === 0) {
                // delete the character from the map
                charCountMap.delete(s[start]);
            }
            // increment the start
            start++;
        }
            
        // set the maxSubLen to the max of the previousMaxSub length or the length of the current substring
        maxSubLen = Math.max(maxSubLen, end - start + 1);
    
        end++;
    }
       
    return maxSubLen;
};