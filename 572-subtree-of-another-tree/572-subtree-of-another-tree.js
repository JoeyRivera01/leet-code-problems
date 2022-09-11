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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    // traverse the binary tree after check if equal if subroot is found
    if (!root) return !subRoot;
    return _bfs(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const _bfs = (node1, node2) => {
    if (!node1 || !node2) return !node1 && !node2;
    if (node1.val !== node2.val) return false;
    
    return _bfs(node1.left, node2.left) && _bfs(node1.right, node2.right)
}
