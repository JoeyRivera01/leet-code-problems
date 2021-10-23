/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = (head) => {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let tmp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = tmp;
    }
    return prev;
}























