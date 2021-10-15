/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// Time: O(L)
// Space: O(1)
var removeNthFromEnd = function(head, n) {
    let hare = head, curr = head;
    
    while (n--) {
        hare = hare.next;
    }
    
    while (hare && hare.next) {
        curr = curr.next;
        hare = hare.next;
    }
    
    if (!hare) {
        head = head.next;
    } else {
        curr.next = curr.next ? curr.next.next : null;
    }
    
    return head;
};