/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // approach: use a stack to push expected chars to pop
        // if expected char is not correct, return false
    if (s == null || s.length <= 1) return false;
    
    const charMap = {
        '{' : '}',
        '(' : ')',
        '[' : ']'
    }
    const expectedCharStack = [];
    
    for (let char of s) {
        if (charMap[char] != undefined) {
            expectedCharStack.push(charMap[char]);
        } else {
            let expectedChar = expectedCharStack.pop();
            if (expectedChar !== char) return false;
        }
    }
    
    
    return expectedCharStack.length === 0;
};