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
 * @return {number[][]}
 */
let levels = [];

const levelOrder = function(root) {
    if (levels.length !== 0) {
        levels = [];
    }
    if (root === null) return levels;
    bfs(root, 0);
    return levels;
};

const bfs = function(node, level) {
    // start the current level
    if (levels.length === level) {
        levels.push([]);
    }
    // fulfil the current level
    levels[level].push(node.val);
    
    // process child nodes for the next level
    if (node.left !== null) {
        bfs(node.left, level + 1);
    }
    if (node.right !== null) {
        bfs(node.right, level + 1);
    }
}