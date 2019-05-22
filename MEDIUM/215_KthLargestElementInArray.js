/* 
Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5
Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4
Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// function findKthLargest(nums, k) {
//   return findKthLargestHelper(nums, nums.length - k, 0, nums.length - 1);
// };

// function findKthLargestHelper(arr, target, start, end) {
//   let randomIdx = Math.floor(Math.random() * (end - start + 1) + start);
//   let pivotIdx = partition(arr, start, end, randomIdx);

//   if (pivotIdx === target) {
//     return arr[pivotIdx];
//   } else if (pivotIdx > target) {
//     return findKthLargestHelper(arr, target, start, pivotIdx - 1);
//   } else {
//     return findKthLargestHelper(arr, target, pivotIdx + 1, end);
//   }
// }

// function partition(arr, start, end, randomIdx) {
//   swap(start, randomIdx, arr);
//   let less = start;
//   for (let i = start + 1; i <= end; i++) {
//     if (arr[i] <= arr[start]) {
//       swap(i, ++less, arr);
//     }
//   }

//   swap(start, less, arr);
//   return less;
// }

// function swap(i, j, arr) {
//   [arr[i], arr[j]] = [arr[j], arr[i]];
// }



function findKthLargest(nums, k) {
  let minHeap = new Heap(MIN_HEAP_FUNC);

  for (let n of nums) {
    minHeap.insert(n);
  }

  let i;
  console.log(minHeap);
  for (i = nums.length - 1; i >= nums.length - k; i--) {
    if (i === nums.length - k) {
      console.log(i);
      return minHeap.heap[i];
    }
    minHeap.remove(i);
  }
}

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

  isValid(i) {
    return i >= 0 && idx < this.size;
  }

  peek() {
    if (this.size === 0) return new Error('Empty Heap');
    return this.heap[0];
  }

  insert(value) {
    this.heap.push(value), this.size++;
    this.siftUp(this.size - 1, this.heap);
  }

  remove(i) {
    if (this.size === 0) return new Error('Empty Heap');
    this.swap(i, this.size - 1, this.heap);
    let valueToRemove = this.heap.pop();
    this.size--;
    if (i > 0 && this.compareFunc(this.heap[i], this.heap[this.getParent(i)])) {
      this.siftUp(i, this.heap);
    } else {
      this.siftDown(i, this.size - 1, this.heap);
    }

    return valueToRemove;
  }

  siftUp(currentIdx, heap) {
    let parentIdx = this.getParent(currentIdx);

    while (currentIdx > 0) {
      if (this.compareFunc(heap[currentIdx], heap[parentIdx])) {
        this.swap(parentIdx, currentIdx, heap);
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
      const rightChild = this.getRight(currentIdx) <= endIdx ? this.getRight(currentIdx) : -1;
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

console.log(findKthLargest([3,2,1,5,6,4], 2));
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4));
console.log(findKthLargest([1], 1));

