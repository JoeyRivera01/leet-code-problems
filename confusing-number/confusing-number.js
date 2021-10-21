/**
 * @param {number} n
 * @return {boolean}
 */
var confusingNumber = function(n) {
    const flippableNumbers = {
        0: 0,
        1: 1,
        6: 9,
        8: 8,
        9: 6
    }
    
    let numArr = n.toString().split('');
    if (numArr.some((num) => flippableNumbers[num] === undefined)) return false;
    
    let flippedArr = [...numArr].reverse().map((num) => flippableNumbers[num]);

    let flippedNum = Number(flippedArr.join(''));
    
    if (flippedNum !== n) {
        return true
    } else {
        return false;
    }
};
confusingNumber(89); // true
