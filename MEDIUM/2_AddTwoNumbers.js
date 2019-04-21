/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
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
var addTwoNumbers = function(l1, l2) {
  let l3 = new ListNode();
  let tail = l3;
  let sum = 0;
  let carry = 0;

  while (l1 || l2 || sum) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }
    
    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    tail.next = new ListNode(sum);
    tail = tail.next;

    sum = carry;
    carry = 0;
  }

  return l3.next;
};

let list1 = new ListNode(2);
list1.next = new ListNode(4);
list1.next.next = new ListNode(3);

let list2 = new ListNode(5);
list2.next = new ListNode(6);
list2.next.next = new ListNode(4);

console.log(addTwoNumbers(list1, list2));


/* 
TIME COMPLEXITY:

  O(max(m,n)) depends on the longer linkedlist


SPACE COMPLEXITY:
  O(max(m,n) + 1) the length of the new list

*/
