/**
 * @param {string} text
 * @return {string}
 */
var reorderSpaces = function(text) {
    let spaceCount = 0;
    const words = [];
    let word = "";
    
    for (const char of text) {
        if (char === " ") {
            if (word != "") words.push(word);
            word = "";
            spaceCount++;
        }
        else {
            word += char;
            
        }
    }
    
    if (word != "") words.push(word);

    const counts = Math.floor(spaceCount / (words.length - 1));
    
    let res = "";
    
    for (let i = 0; i < words.length; i++) {
        if (i !== 0) {
            res += " ".repeat(counts);
            spaceCount -= counts;
        }
        
        res += words[i];
    
    }
    
    return res + " ".repeat(spaceCount);
};

