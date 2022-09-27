/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    let i1 = -1, i2 = -1;
    let minDistance = words.length;
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word1) {
            i1 = i;
        } else if (words[i] === word2) {
            i2 = i;
        }
        
        if (i1 !== -1 && i2 != -1) {
            minDistance = Math.min(minDistance, Math.abs(i1 - i2));
        }
    }
    return minDistance;
};