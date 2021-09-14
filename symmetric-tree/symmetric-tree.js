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
 * @return {boolean}
 */
const isSymmetric = function(root) {
    // O(n) because we traverse the entire tree once, where n in the number of nodes.
    // O(n) because the recursive stack would have to hold a linear tree in the worst case.
    return isMirror(root, root);
};

const isMirror = function(t1, t2) {
    if (t1 === null && t2 === null) return true;
    if (t1 === null || t2 === null) return false;
    return (t1.val === t2.val)
        && isMirror(t1.right, t2.left)
        && isMirror(t1.left, t2.right);
}