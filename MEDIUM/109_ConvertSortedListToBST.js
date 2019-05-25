/* 
Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:

Given the sorted linked list: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function sortedListToBST(head, tail = findTail(head)) {
    if (head === null || tail === null) return null;
    let medianPair = findMedian(head, tail);
    let node = new TreeNode(medianPair[1].val);
    node.left = sortedListToBST(head, medianPair[0]);
    console.log('WSUP', medianPair, head, tail);
    node.right = sortedListToBST(medianPair[1].next, tail);
    return node;
};

function findMedian(head, tail) {
  if (head === null || tail === null) return null;
  let fast = head, slow = head, prevSlow = null;
  while (fast !== tail) {
    fast = fast.next;
    if (fast !== tail) {
      fast = fast.next;
      prevSlow = slow;
      slow = slow.next;
    }
  }
  return [prevSlow, slow];
}

function findTail(head) {
  if (!head || !head.next) return head;
  let tail = head;
  while (tail.next !== null) {
    tail = tail.next;
  }

  return tail;
}

let linkedList = new ListNode(-10);
linkedList.next = new ListNode(-3);
linkedList.next.next = new ListNode(0);
linkedList.next.next.next = new ListNode(5);
linkedList.next.next.next.next = new ListNode(9);

console.log(sortedListToBST(linkedList, findTail(linkedList)));