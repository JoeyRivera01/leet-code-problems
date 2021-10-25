/**
 * @param {string[]} sentence
 * @param {number} rows
 * @param {number} cols
 * @return {number}
 */
var wordsTyping = function(sentence, rows, cols) {
    // keep track of max char count
    let sentenceCount = 0;
    let currentRowsRemaining = rows;
    let currentColsRemaining = cols;
    let idx = 0;
    
    
    while (currentRowsRemaining > 0) {
        let currentWord = sentence[idx];
        while (currentWord.length <= currentColsRemaining) {
            currentColsRemaining -= currentWord.length + 1;
            idx++;
            if (idx === sentence.length) {
                idx = 0;
                sentenceCount++;
            }
            currentWord = sentence[idx];
        }
        currentColsRemaining = cols;
        currentRowsRemaining--;
    }
    
    return sentenceCount;
};

console.log(wordsTyping(["a", "bcd", "e"], 3 ,6))