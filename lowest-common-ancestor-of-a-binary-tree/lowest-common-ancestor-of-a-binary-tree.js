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
var lowestCommonAncestor = function(root, p, q) {
    let LCA = null;

    function dfs(node, p, q) {
        if (!node) return false;
        let left = dfs(node.left, p, q) ? 1 : 0;
        let right = dfs(node.right, p, q) ? 1: 0;
        let mid = (node === p || node === q) ? 1 : 0;
        
        if (mid + left + right >= 2) {
            LCA = node;
        }
        
        // return true if any one of the flags were set to 1
        return (mid + left + right > 0);
    }
    
    dfs(root, p, q);
    return LCA;
};