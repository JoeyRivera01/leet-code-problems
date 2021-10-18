/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// approach: bfs, reassign properties of current node and then add to queue
var flipEquiv = function(root1, root2) {
    if (root1 === root2) return true;
    if (root1 === null || root2 === null || root1.val !== root2.val) return false;
    
    return (
        (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
        (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left))
    );
};