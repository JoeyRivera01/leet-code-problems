/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^0-9a-zA-Z]/gi, '').toLowerCase();
    let reverseStr = str.split('').reverse().join('');
    console.log(str);
    console.log(reverseStr);
    if(str === reverseStr) {
        return true;
    } else {
        return false;
    }
};
