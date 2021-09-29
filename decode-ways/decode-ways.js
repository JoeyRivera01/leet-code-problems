/**
 * @param {string} s
 * @return {number}
 */

var numDecodings = function(s) {
    if (s[0] === '0') {
        return 0;
    }
    
    let size = s.length;
    let oneBack = 1, twoBack = 1;
    
    for (let i = 0; i < size; i++) {
        let current = 0;
        if (s[i] !== '0') {
            current += oneBack;
        }
        
        let twoDigit = Number(s.substring(i - 1, i + 1));
        if (twoDigit >= 10 && twoDigit <= 26) {
            current += twoBack;
        }
        twoBack = oneBack;
        oneBack = current;
    }
    return oneBack;
};
