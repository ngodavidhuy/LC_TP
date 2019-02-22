/* 
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var partition = function(node, x) {
  let lessThan = new ListNode(0);
  let lessThanTail = lessThan;
  let greaterThan = new ListNode(0);
  let greaterThanTail = greaterThan;

  while (node) {
    let newNode = new ListNode(node.val);
    
    if (node.val < x) {
      lessThanTail.next = newNode;
      lessThanTail = lessThanTail.next;
    } else if (node.val >= x) {
      greaterThanTail.next = newNode;
      greaterThanTail = greaterThanTail.next;
    } 
    node = node.next;
  }

  lessThan = lessThan.next;
  greaterThan = greaterThan.next;

  if (lessThan && greaterThan) {
    lessThanTail.next = greaterThan;
    return lessThan;
  } else if (lessThan && !greaterThan) {
    return lessThan;
  } else {
    return greaterThan;
  }
  
};

let testList = new ListNode(1);
// testList.next = new ListNode(5);
// testList.next.next = new ListNode(3);
// testList.next.next.next = new ListNode(4)

console.log(partition(testList, 0));
