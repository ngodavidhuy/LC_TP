/* 
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
var removeNthFromEnd = function(head, n) {
  if (!head) return head;
  let dummy = new ListNode(0);
  dummy.next = head;
  let end = dummy;
  let beforeNthNode = dummy;

  for (let i = 0; i < n; i++) {
    end = end.next;
  }

  if (end.next === null) {
    dummy.next = dummy.next.next;
    return dummy.next;
  }

  while (end.next !== null) {
    end = end.next;
    beforeNthNode = beforeNthNode.next;
  }

  beforeNthNode.next = beforeNthNode.next.next;
  return dummy.next;
};

let L1 = new ListNode(1);
L1.next = new ListNode(2);
L1.next.next = new ListNode(3);
L1.next.next.next = new ListNode(4);
L1.next.next.next.next = new ListNode(5);

console.log(removeNthFromEnd(L1, 2).next)



