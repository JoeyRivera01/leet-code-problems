/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function(head) {
  let pmap = new Map(), dummy = {},
      curr = head, copy = dummy;
  while (curr) {
    let newNode = new Node(curr.val, null, null);           // Create the new copied node
    pmap.set(curr, newNode);                                // Make the association in our map
    copy.next = newNode, copy = newNode, curr = curr.next   // Move forward for the next node
  }
  curr = head, copy = dummy.next;                           // Reset back to the start 
  while (curr) {
    copy.random = pmap.get(curr.random);                    // Update the .random attribute
    curr = curr.next, copy = copy.next;                     // Move forward for the next node
  }
  return dummy.next;
};