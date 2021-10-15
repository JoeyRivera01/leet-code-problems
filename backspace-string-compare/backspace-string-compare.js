/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Time: O(n + m)
// Space: O(n + m)
var backspaceCompare = function(s, t) {
    let strArr1 = [], strArr2 = [];

    for (let char of s) {
        if (char !== '#') {
            strArr1.push(char);
        } else {
            strArr1.pop();
        }
    }
    
    for (let char of t) {
        if (char !== '#') {
            strArr2.push(char);
        } else {
            strArr2.pop();
        }
    }
    
    return strArr1.join('') === strArr2.join('');
};