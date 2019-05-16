/* 
Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
Follow up:
Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
 
// var isPalindrome = function(head) {
//     if (!head) return head;
//     let len = 0;
//     let firstNode = head, secondNode = null;
//     let firstHalfTotal = 0, secondHalfTotal = 0;

//     while (firstNode) {
//       firstNode = firstNode.next, len++;
//     }

//     let mid = Math.floor(len / 2);
//     let secondHalfIdx = len % 2 === 0 ? mid  : mid + 1;
//     firstNode = head;
//     secondNode = head;

//     for (let i = 0; i < secondHalfIdx; i++) {
//       secondNode = secondNode.next;
//     }

//     for (let i = 1; i <= mid; i++) {
//       firstHalfTotal += i * firstNode.val;
//       secondHalfTotal += (mid + 1 - i) * secondNode.val;
//       firstNode = firstNode.next, secondNode = secondNode.next;
//     }

//     return firstHalfTotal === secondHalfTotal;
// };

function isPalindrome(head) {
  if (!head|| !head.next) return true;

  let length = getLength(head);
  let firstNode = head, midNode = head;
  let mid = Math.floor(length / 2);
  let midNodeIdx = length % 2 === 0 ? mid - 1 : mid;

  for (let i = 0; i < midNodeIdx; i++) {
    midNode = midNode.next;
  }

  reverse(midNode);
  firstNode = head;
  midNode = midNode.next;

  while (midNode !== null) {
    if (firstNode.val !== midNode.val) return false;
    firstNode = firstNode.next, midNode = midNode.next;
  }

  return true;
}

function getLength(node) {
  let length = 0;
  while (node) {
    node = node.next;
    length++;
  }
  return length;
} 

function reverse(head) {
  let node = head.next;
  while (node.next !== null) {
    let temp = head.next;
    head.next = node.next;
    node.next = head.next.next;
    head.next.next = temp;
  }
}

let test = new ListNode(0);
test.next = new ListNode(1);
test.next.next = new ListNode(1);
test.next.next.next = new ListNode(0);

let other = new ListNode(0);
other.next = new ListNode(1);
other.next.next = new ListNode(2);
other.next.next.next = new ListNode(1);
other.next.next.next.next = new ListNode(0);

let alternate = new ListNode(1);
alternate.next = new ListNode(3);
alternate.next.next = new ListNode(2);
alternate.next.next.next = new ListNode(4);
alternate.next.next.next.next = new ListNode(3);
alternate.next.next.next.next.next = new ListNode(2);
alternate.next.next.next.next.next.next = new ListNode(1);


console.log(isPalindrome(test));
console.log(isPalindrome(other));
console.log(isPalindrome(alternate));
