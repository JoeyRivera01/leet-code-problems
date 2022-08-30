/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
    const romanNumeralMap = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10,
        V: 5,
        I: 1
    }
    
    
    let i = 0;
    while (i < s.length) {
        let currentVal = romanNumeralMap[s[i]];
        let nextVal = 0
        if (i + 1 < s.length) {
            nextVal = romanNumeralMap[s[i + 1]];
        }
        if (nextVal > currentVal) {
            sum += (nextVal - currentVal);
            i += 2;
        } else {
            sum += currentVal;
            i++;
        }
    }

    return sum;
};