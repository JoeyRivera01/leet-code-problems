/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
    const ans = [];
    
    const backtrack = (ans, cur, open, close, max) => {
        // base case
        if (cur.length === max * 2) {
            ans.push(cur);
            return;
        }
        
        if (open < max) {
            cur += '(';
            backtrack(ans, cur, open + 1, close, max);
            cur = cur.substring(0, cur.length - 1)
        }
        
        if (close < open) {
            cur += ')';
            backtrack(ans, cur, open, close + 1, max);
            cur = cur.substring(0, cur.length - 1)
        }
    }
    
    
    backtrack(ans, '', 0, 0, n);
    return ans;
};