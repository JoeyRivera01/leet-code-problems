/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// approach: sliding window
var characterReplacement = function(s, k) {
    let left = 0, right = 0;
    let maxCharCount = 0;
    // char and count
    const visited = {};
    
    while (right < s.length) {
        const char = s[right];
        visited[char] = (visited[char] || 0) + 1;
        
        if (visited[char] > maxCharCount) maxCharCount = visited[char];
        if (right - left + 1 - maxCharCount > k) {
            
            visited[s[left]]--;
            left++;
        }
        
        right++;
    }
    
    return right - left;
};


