/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/*
Time complexity: O(N), where N is number of nodes, since we visit each node not more than 2 times.

Space complexity: O(H), where HH is a tree height, to keep the recursion stack. In the average case of balanced tree, the tree height H = \log NH=logN, in the worst case of skewed tree, H = NH=N.
*/


var maxPathSum = function(root) {
    let maxSum = -Infinity;
    const maxGain = (node) => {
        // base case - if node is null, then max gain is zero
        if (node === null) {
            return 0;
        }
        let leftGain = Math.max(maxGain(node.left), 0);
        let rightGain = Math.max(maxGain(node.right), 0);
        
        let priceNewPath = node.val + leftGain + rightGain;
        maxSum = Math.max(maxSum, priceNewPath);
        
        return node.val + Math.max(leftGain, rightGain);
    }
    
    maxGain(root);
    return maxSum;
};