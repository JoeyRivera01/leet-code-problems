/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// approach: bfs - check to see if left and right node is equal to p and q
var lowestCommonAncestor = function(root, p, q) {
    let parentVal = root.val;
    let pVal = p.val;
    let qVal = q.val;
    
    if (pVal > parentVal && qVal > parentVal) {
        // if both targets are greater than split
        return lowestCommonAncestor(root.right, p, q);
    } else if (pVal < parentVal && qVal < parentVal) {
        // if both targets are less than split
        return lowestCommonAncestor(root.left, p, q);
    } else {
        // we found the split
        return root;
    }
};