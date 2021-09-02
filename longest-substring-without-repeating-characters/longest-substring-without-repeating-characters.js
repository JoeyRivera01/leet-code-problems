/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  const indexMap = {};
  let left = 0, right = 0, result = 0;
  
  while (right < s.length) {
    let r = s[right];
    let index = indexMap[r];
    
    if (index !== undefined && index >= left && index < right) {
      left = index + 1;
    }
    
    result = Math.max(result, right - left + 1);
    
    indexMap[r] = right;
    right++;
  }
  return result;
};
