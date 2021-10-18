/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
// Time: O(n)
// Space: O(n)
var validateStackSequences = function(pushed, popped) {
    // approach greedy
    let n = pushed.length;
    let stack = [];
    
    let j = 0;
    for (let ele of pushed) {
        stack.push(ele);
        while (stack.length !== 0 && j < n && stack[stack.length - 1] === popped[j]) {
            let popped = stack.pop();
            j++
        } 
    }
    
    return j === n;
};