/* 
Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

Example 1:

Input: 1->2->3->3->4->4->5
Output: 1->2->5
Example 2:

Input: 1->1->1->2->3
Output: 2->3
*/

// O(N) TIME | O(1) SPACE
function deleteDuplicates (head) {
  if (!head || !head.next) return head;

  let first = head;
  let second = first.next;
  let dupeExists;

  while (second !== null) {
    let shouldReplaceHead = head.val === second.val;

    if (second.next) {
      dupeExists = second.val === second.next.val;
    } else {
      dupeExists = false;
    }
    
    if (shouldReplaceHead && dupeExists) {
      second = second.next;
    } else if (shouldReplaceHead) {
      head = second.next;
      first = head;
      if (head === null) return null;
      second = first.next;
    } else if (dupeExists) {
      second = second.next;
    } else if (first.next !== second && second.next === null) {
      first.next = null;
      return head;
    } else if (first.next !== second && second.next) {
      first.next = second.next;
      second = first.next;
    } else {
      first = second;
      second = second.next;
    }
  }

  return head;
}

function deleteDuplicates(head) {
  if (!head || !head.next) return head;

  let dummy = new ListNode(0);
  dummy.next = head;
  head = dummy;

  while (head.next && head.next.next) {
    if (head.next.val === head.next.next.val) {
      let val = head.next.val;
      while (head.next !== null && head.next.val === val) {
        head.next = head.next.next;
      }
    } else {
      head = head.next;
    }
  }

  return dummy.next;
}

console.log()