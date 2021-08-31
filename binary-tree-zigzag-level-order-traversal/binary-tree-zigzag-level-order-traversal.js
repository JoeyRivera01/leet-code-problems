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

const zigzagLevelOrder = function(root) {
  let result = [];
  // if root is undefined, return empty array
  if(!root) return result;

  let queue = [];
  // push the root onto the queue
  queue.push(root);
  let reverseOrder = true;

  // iterate through the queue
  while (queue.length > 0) {
    let currentSize = queue.length;
    let currentLevel = [];
    reverseOrder = !reverseOrder;

    for (let i = 0; i < currentSize; i++) {
      let currNode = queue.shift();
      currentLevel.push(currNode.val);

      if (currNode.left !== null) {
          queue.push(currNode.left);
      }

      if (currNode.right !== null) {
          queue.push(currNode.right);
      }
    }

    if (reverseOrder) {
      currentLevel.reverse();
    }
    result.push(currentLevel);
  }

  return result;
};