/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
    // top down dynamic programming: memoization
    let wordsPresent = new Set(words);
    // key is word, value is longest possible sequence
    let memo = {};
    let ans = -Infinity;
    
    for (let word of words) {
        ans = Math.max(ans, dfs(wordsPresent, memo, word));
    }
    
    return ans;
    
    function dfs(wordsPresent, memo, currentWord) {
        if (memo[currentWord] !== undefined) return memo[currentWord];
        
        let maxLength = 1;
        
        for (let i = 0; i < currentWord.length; i++) {
            let newWord = currentWord.substring(0, i) + currentWord.substring(i + 1);
            
            if (wordsPresent.has(newWord)) {
                let currentLength = 1 + dfs(wordsPresent, memo, newWord);
                maxLength = Math.max(maxLength, currentLength);
            }  
        }
        memo[currentWord] = maxLength;
        
        return maxLength;
    }
};