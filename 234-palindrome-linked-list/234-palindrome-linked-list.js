/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let revHead = null;
    let slow = fast = head;
    
    while(fast && fast.next !== null) {
        fast = fast.next.next;
        
        // reversing
        let tmp = slow.next;
        slow.next = revHead;
        revHead = slow;
        slow = tmp;
    }
    
    // if fast is not null we have odd elements so skip 1 in the middle
    if(fast !== null) slow = slow.next

    while(revHead && revHead.val === slow.val){
        revHead = revHead.next
        slow = slow.next
    }

    return revHead === null
};
