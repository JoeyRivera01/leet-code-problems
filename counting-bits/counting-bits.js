/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    function popCount(num) {
        let count;
        for (count = 0; num !== 0; count++) {
            num &= num - 1;
        }
        return count;
    }
    
    const ans = new Array(n + 1).fill(0);
    for (let i = 0; i <= n; i++) {
        ans[i] = popCount(i);
    }
    return ans;
};