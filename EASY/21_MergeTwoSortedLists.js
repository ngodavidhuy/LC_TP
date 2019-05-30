/* 
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;

  while (l1 !== null || l2 !== null) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        current.next = l1;
        l1 = l1.next;
      } else {
        current.next = l2;
        l2 = l2.next;
      }
    } else if (l1) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }

    current = current.next;
  }

  return dummy.next;
};

let L1 = new ListNode(1);
L1.next = new ListNode(2);
L1.next.next = new ListNode(4);

let L2 = new ListNode(1);
L2.next = new ListNode(3);
L2.next.next = new ListNode(4);

console.log(mergeTwoLists(L1, L2));