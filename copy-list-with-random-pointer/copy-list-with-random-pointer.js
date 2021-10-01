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
// approach iterative
// time complexity O(n)
// space complexity O(1)

const copyRandomList = (head) => {
    // edge case
    if (head === null) return head;
    let curr = head;
    
    // create and weave the duplicate nodes into the linked list and reassign next pointers
    while (curr !== null) {
        let tmp = curr.next;
        curr.next = new Node(curr.val, tmp, null);
        curr = tmp;
    }
    
    curr = head;
    // assign random pointers to newly created nodes
    while (curr !== null) {
        if (curr.random !== null) {
            curr.next.random = curr.random.next
        }
        curr = curr.next.next;
    }
    
    curr = head;
    let copyHead = head.next;
    // unweave the linked list by reassigning next pointers
    while (curr !== null) {
        let tmp = curr.next.next;
        let copy = curr.next;
        curr.next = tmp;
        if (tmp !== null) {
            copy.next = tmp.next
        }
        curr = tmp;
    }
    
    return copyHead;
}





