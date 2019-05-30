/* 
Given a singly linked list L: L0→L1→…→Ln-1→Ln,
reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

You may not modify the values in the list's nodes, only nodes itself may be changed.

Example 1:

Given 1->2->3->4, reorder it to 1->4->2->3.
Example 2:

Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
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
 * @return {void} Do not return anything, modify head in-place instead.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
function reverseList(node) {
  if (!node || !node.next) return node;

  let current = node.next;

  while (current.next !== null) {
    let temp = node.next;
    node.next = current.next;
    current.next = current.next.next;
    node.next.next = temp;
  }

  return node.next;
};

function findBeforeMid(head) {
  let slow = head, fast = head;

  while (fast.next !== null) {
    fast = fast.next;
    if (fast.next !== null) {
      fast = fast.next;
      slow = slow.next;
    }
  }

  return slow;
}

function reorderList(head) {
  if (!head || !head.next) return;

  let beforeMidNode = findBeforeMid(head);
  reverseList(beforeMidNode);

  let p1 = head, p2 = beforeMidNode.next;

  while(p1 !== beforeMidNode) {
    beforeMidNode.next = p2.next;
    p2.next = p1.next;
    p1.next = p2;
    p1 = p2.next;
    p2 = beforeMidNode.next;
  }

  return head;
};





let L1 = new ListNode(1);
L1.next = new ListNode(2);
L1.next.next = new ListNode(3);
L1.next.next.next = new ListNode(4);
L1.next.next.next.next = new ListNode(5);
L1.next.next.next.next.next = new ListNode(6);

console.log(reorderList(L1).next.next.next);