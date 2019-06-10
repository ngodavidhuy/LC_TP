/* 
Given a non-empty array of integers, return the k most frequent elements.

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
Example 2:

Input: nums = [1], k = 1
Output: [1]
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


class Node {
  constructor(item, priority) {
    this.item = item;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.compareFunc = function MAX_PRIORTY(a, b) {
      return a.priority > b.priority;
    };
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

  insert(item, priority) {
    this.heap.push(new Node(item, priority));
    this.size++;
    this.siftUp(this.size - 1, this.heap);
  }

  removeMax() {
    if (this.size === 0) return new Error('Empty Heap');
    this.swap(0, this.size - 1, this.heap);
    let nodeToRemove = this.heap.pop();
    this.size--;
    this.siftDown(0, this.size - 1, this.heap);
    return nodeToRemove;
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

  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]];
  }
}

// var topKFrequent = function(nums, k) {
//   let map = new Map();

//   for (let n of nums) {
//     !map.has(n) ? map.set(n, 1) : map.set(n, map.get(n) + 1);
//   }

//   let maxPriorityQueue = new PriorityQueue();

//   for (let [k, v] of map) {
//     maxPriorityQueue.insert(k, v);
//   }

//   let output = [];

//   while (output.length < k) {
//     output.push(maxPriorityQueue.removeMax().item);
//   }

//   return output;
// };



// let test = new PriorityQueue(MAX_PRIORTY);

// test.insert(2,5);
// test.insert(3,6);
// console.log(test);
// console.log(test.removeMax())
// console.log(test);


function topKFrequent(nums, k) {
  let map = new Map();
  let buckets = new Array(nums.length + 1);
  let results = [];

  for (let n of nums) {
    !map.has(n) ? map.set(n, 1) : map.set(n, map.get(n) + 1);
  }

  for (let [k, v] of map) {
    if (!buckets[v]) {
      buckets[v] = [k];
    } else {
      buckets[v].push(k);
    }
  }

  for (let i = buckets.length - 1; i >= 0 && results.length < k; i--) {
    if (Array.isArray(buckets[i])) {
      results.push(...buckets[i]);
    }
  }

  return results;
}
console.log(topKFrequent([1,1,1,2,2,3], 2));