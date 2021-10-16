/**
 * @param {string} num
 * @return {boolean}
 */
var isStrobogrammatic = function(num) {
    const rotatedArray = [];
    
    const rotationMap = {
        0: '0',
        1: '1',
        6: '9',
        8: '8',
        9: '6'
    }
    
    let numbers = num.split('');
    
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (!rotationMap[numbers[i]] === undefined) return false;
        rotatedArray.push(rotationMap[numbers[i]]);
    }
    
    for (let j = 0; j < numbers.length; j++) {
        console.log()
        if (numbers[j] !== rotatedArray[j]) return false;
    }
    
    return true;
};