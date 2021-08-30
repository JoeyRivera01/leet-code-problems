/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = function(head) {
  const getIntersection = (head) => {
    let fastPointer = head
    let lagPointer = head

    while (fastPointer !== null && fastPointer.next !== null) {
      fastPointer = fastPointer.next.next;
      lagPointer = lagPointer.next;

      if (fastPointer === lagPointer) {
        return fastPointer;
      }
    }
    return null;
  }
  
  if (head === null) return null;
  
  let intersect = getIntersection(head);
  if (intersect === null) return null;
  
  let ptr1 = head;
  let ptr2 = intersect;
  
  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  
  return ptr1;
};