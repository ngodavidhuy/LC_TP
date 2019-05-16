/* 
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?
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
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var reverseList = function(head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy.next;

  while (current.next !== null) {
    let temp = dummy.next;
    dummy.next = current.next;
    current.next = current.next.next;
    dummy.next.next = temp;
  }

  return dummy.next;
};

// let test = new ListNode(1);
// test.next = new ListNode(2);
// test.next.next = new ListNode(3);
// console.log(reverseList(test));

// function reverseList(head) {
//   if (!head || !head.next) {
//       return head;
//   }
//   var newHead = reverseList(head.next);
//   head.next.next = head;
//   head.next = null;
//   return newHead;
// }

function reverseList(head) {
  let prev = null, next;
  while(head) {
    next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }
  return prev;
}

let test = new ListNode(1);
test.next = new ListNode(2);
test.next.next = new ListNode(3);
console.log(reverseList(test));

