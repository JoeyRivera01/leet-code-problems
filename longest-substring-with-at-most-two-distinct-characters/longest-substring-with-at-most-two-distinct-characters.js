/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    if (s === '') return 0;
    if (s.length === 1) return 1;
    let maxSub = 0;
    let i = 0, j = 0;
    // key is char and len is last index seen  
    let map = new Map();
    
    while (j < s.length) {
        map.set(s[j], j);

        // if the map has 3 keys, delete the least recently seen char from map
        if (map.size >= 3) {
            let min = Infinity;
            let entries = map.entries()
            let targetChar = ''
            for (let [key, idx] of entries) {
                min = Math.min(min, idx);
                if (min === idx) {
                    targetChar = key; 
                }
            }
            // console.log('targetChar', targetChar);
            map.delete(targetChar);
            // console.log('min + 1', min+1);
            i = min + 1;
        }
        
        // set the maxSub to either the current substring val or prev maxSub
        maxSub = Math.max(maxSub, j - i + 1);
        // console.log('maxSub', maxSub)
        
        // increment j
        j++
    }
    return maxSub
};

// lengthOfLongestSubstringTwoDistinct('abc')