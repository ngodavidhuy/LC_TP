/* 
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3
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
var deleteDuplicates = function(head) {
  if (!head) return null;

  let f = head;
  let s = f.next;

  while (s) {
    let isDupe = f.val === s.val;

    if (isDupe && s.next === null) {
      f.next = null;
      return head;
    } if (!isDupe && f.next !== s) {
      f.next = s;
      f = s;
      s = s.next;
    } else if (isDupe) {
      s = s.next;
    } else {
      f = s;
      s = s.next;
    }

  }

  return head;
};

var deleteDuplicates = function(head) {
  if (!head) return head;

  let f = head;
  let s = f.next;

  while (s) {
    if (f.val !== s.val) {
      f.next = s;
      f = s;
    }
    s = s.next;
  }

  f.next = null;
  return head;
};