/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
    let fastPointer = head
    let lagPointer = head
    if (fastPointer === null) return false
    
    while (fastPointer !== null) {
        lagPointer = lagPointer.next
    
        if (fastPointer.next === null) return false
        fastPointer = fastPointer.next.next
        if (fastPointer === lagPointer) return true
    }
    return false
};