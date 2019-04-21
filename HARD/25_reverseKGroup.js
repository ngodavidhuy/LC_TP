/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
};

function reverseKGroup(head, k) {
  let oldHead = head;
  let newHead = getNewHead(oldHead, k);
  let lastGroup = null;
  head = newHead;
  while (newHead) {
    lastGroup = reverse(oldHead, newHead, lastGroup);
    oldHead = oldHead.next;
    newHead = getNewHead(oldHead, k);
  }
  return head;
};

function getNewHead(node, k, count = 1) {
  let current = node;
  while (current && count !== k) {
    current = current.next, count++;
  }
  return current === null ? node : current;
}

function reverse(startNode, endNode, lastGroup) {
  let insertBeforeNode = endNode.next;
  let current = startNode;
  let temp;

  while (current !== endNode) {
      temp = current.next;
      endNode.next = current;
      current.next = insertBeforeNode;
      insertBeforeNode = current;
      current = temp;
  }

  if (lastGroup) lastGroup.next = current;
  return startNode;
}

let linkedList = new ListNode(1);
linkedList.next = new ListNode(2);
linkedList.next.next = new ListNode(3);
linkedList.next.next.next = new ListNode(4);
linkedList.next.next.next.next = new ListNode(5);

// console.log(linkedList);

console.log(reverseKGroup(linkedList, 2));