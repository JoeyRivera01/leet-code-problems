/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x.toString();
    let left = 0, right = num.length - 1;
    
    while (left < right) {
        if (num[left] !== num[right]) {
            return false;
        }
        left++
        right--;
    }
    return true;
};