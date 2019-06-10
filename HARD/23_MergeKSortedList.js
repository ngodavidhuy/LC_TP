/* 
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function MIN_HEAP_FUNC(a, b) {
  return a < b;
}

class Heap {
  constructor(compareFunc) {
    this.compareFunc = compareFunc;
    this.size = 0;
    this.heap = [];
  }

  getParent(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeft(i) {
    return i * 2 + 1;
  }

  getRight(i) {
    return i * 2 + 2;
  }

  getSize() {
    return this.size;
  }

  insert(val) {
    this.heap.push(val), this.size++;
    this.siftUp(this.size - 1, this.heap);
  }

  removeMax() {
    if (this.size === 0) return new Error('Empty Heap');
    this.swap(0, this.size - 1, this.heap);
    let valueToRemove = this.heap.pop();
    this.size--;
    this.siftDown(0, this.size - 1, this.heap);
    return valueToRemove;
  }

  siftUp(currentIdx, heap) {
    let parentIdx = this.getParent(currentIdx);
    while (currentIdx > 0) {
      if (this.compareFunc(heap[currentIdx], heap[parentIdx])) {
        this.swap(currentIdx, parentIdx, heap);
        currentIdx = parentIdx;
        parentIdx = this.getParent(currentIdx);
      } else {
        return;
      }
    }
  }

  siftDown(currentIdx, endIdx, heap) {
    let leftChild = this.getLeft(currentIdx);
    while (leftChild <= endIdx) {
      let rightChild = this.getRight(currentIdx) <= endIdx ? this.getRight(currentIdx) : -1;
      let idxToSwap;
      if (rightChild !== -1) {
        if (this.compareFunc(heap[rightChild], heap[leftChild])) {
          idxToSwap = rightChild;
        } else {
          idxToSwap = leftChild;
        }
      } else {
        idxToSwap = leftChild;
      }

      if (this.compareFunc(heap[idxToSwap], heap[currentIdx])) {
        this.swap(idxToSwap, currentIdx, heap);
        currentIdx = idxToSwap;
        leftChild = this.getLeft(currentIdx);
      } else {
        return;
      }
    }
  }

  swap(i, j, arr) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}


var mergeKLists = function(lists) {
  if (!lists || !lists.length) return null;

  let minHeap = new Heap(MIN_HEAP_FUNC);
  let mergedLL = new ListNode(0);

  for (let head of lists) {
    let node = head;
    while (node !== null) {
      minHeap.insert(node.val);
      node = node.next;
    }
  }

  let current = mergedLL;

  while (minHeap.getSize() > 0) {
    current.next = new ListNode(minHeap.removeMax());
    current = current.next;
  }


  return mergedLL.next;
};