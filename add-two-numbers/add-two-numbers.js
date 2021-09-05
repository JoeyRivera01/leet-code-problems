/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
  let dummy = new ListNode();
  let cur = dummy;
  let carry = 0;
  
  while (l1 || l2 || carry) {
    let v1 = l1 !== null ? l1.val : 0;
    let v2 = l2 !== null ? l2.val : 0;
    
    let val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    // console.log(carry);
    val = val % 10;
    console.log(val);
    cur.next = new ListNode(val);
    
    cur = cur.next;
    if (l1 !== null) {
      l1 = l1.next !== null ? l1.next : null;
    }
    if (l2 !== null) {
      l2 = l2.next !== null ? l2.next : null;
    }
  }
  return dummy.next;
};