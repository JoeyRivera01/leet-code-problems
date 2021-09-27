/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    if ((version1 === null && version2 === null) || 
        (version1.length === 0 && version2.length === 0) ||
       (version1 === version2)) {
        return 0;
    }
    
    // split the string on the dot
    let arr1 = version1.split('.')
    let arr2 = version2.split('.')
    
    let maxSize = Math.max(arr1.length, arr2.length);
    
    for (let i = 0; i < maxSize; i++) {
        let num1 = parseInt(arr1[i] || 0);
        let num2 = parseInt(arr2[i] || 0);
        
        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }
    return 0;
};