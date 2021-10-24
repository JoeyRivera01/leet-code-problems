/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    let result = ''
    for(let i = 0; i < strs.length; i++) {
        result += strs[i] + '#^^#';
    }
    return result;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
    let result = s.split('#^^#');
    if (result.length > 1) {
        result.pop();
    }
    return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */