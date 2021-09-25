/**
 * @param {string} s
 * @return {boolean}
 */

const isValid = function(s) {
    const stack = [];
    const map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    
    for (let i = 0; i < s.length; i++) {
        let el = s[i];
        
        if (map[el]) {
            stack.push(map[el]);
        } else {
            if (el !== stack.pop()) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};