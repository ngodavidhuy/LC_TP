/* 
Given an array of items [
  [1ab echo box hammer alexa], 
  [12d echo box desk], 
  [1hs 235 285 92], 
  [b23 kindle box], 
  [a12 kindle box], 
  [21p 159 295 199]
] 
  Sort the array such that prime items are sorted first and non-prime items 
  are in the order it originated from in the original input. 
  Prime items are entries which contain a string and non-primes are ones with numbers only. 
  If the strings match, sort by the next word in line, or the first indicator.
*/

function sortAmazon(items) {
  if (!items || !items.length) return [];
  let primeHeap = new Heap(PRIME_COMPARISON);
  let nonPrimeHeap = new Heap(NON_PRIME_COMPARISON);
  let sortedItems = [];

  for (let item of items) {
    let processOrder = item.split(' ');
    let isNaN = Number.isNaN(parseInt(processOrder[processOrder.length - 1]));
    if (isNaN) {
      primeHeap.insert(processOrder);
    } else {
      nonPrimeHeap.insert(processOrder);
    }
  }

  let nextOrder;

  while (primeHeap.size > 0) {
    nextOrder = primeHeap.removeMax();
    sortedItems.push(nextOrder.join(' '));
  }

  while (nonPrimeHeap.size > 0) {
    nextOrder = nonPrimeHeap.removeMax();
    sortedItems.push(nextOrder.join(' '));
  }

  return sortedItems;
}

function PRIME_COMPARISON(a, b)  {
  let length = a.length < b.length ? a.length: b.length;
  
  for (let i = 1; i < length; i++) {
      if (a[i] === b[i]) {
          continue;
      } else {
          return b[i] > a[i];
      }
  }
  
  return b[0] > a[0];
}

//
function NON_PRIME_COMPARISON(a, b) {
  let length = a.length < b.length ? a.length: b.length;
  
  for (let i = 1; i < length; i++) {
      if (parseInt(a[i]) === parseInt(b[i])) {
          continue;
      } else {
          return parseInt(b[i]) > parseInt(a[i]);
      }
  }
  
  return b[0] > a[0];
}



class Heap {
  constructor(compareFunc) {
    this.compareFunc = compareFunc;
    this.size = 0;
    this.heap = []
  }

  getParent(currentIdx) {
    return Math.floor((currentIdx - 1) / 2);
  }

  getLeft(currentIdx) {
    return currentIdx * 2 + 1;
  }

  getRight(currentIdx) {
    return currentIdx * 2 + 2;
  }

  insert(item) {
    this.heap.push(item);
    this.size++;
    this.siftUp(this.size - 1, this.heap);
  }

  removeMax() {
    if (this.size === 0) return new Error('Empty Heap');
    this.swap(0, this.size - 1, this.heap);
    let itemToRemove = this.heap.pop();
    this.size--;
    this.siftDown(0, this.size - 1, this.heap);
    return itemToRemove;
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
    [heap[i], heap[j]] = [heap[j], heap[i]]
  }
}

// console.log(sortAmazon([
//   ['1ab echo box hammer alexa'], 
//   ['12d echo box desk'], 
//   ['1hs 235 285 92'], 
//   ['b23 kindle box'], 
//   ['a12 kindle box'], 
//   ['21p 159 295 199']
// ]));


console.log(sortAmazon([
  '1ab echo box hammer alexa', 
  '12d echo box desk', 
  '1hs 235 285 92', 
  'b23 kindle box', 
  'a12 kindle box', 
  '21p 159 295 199'
]));

// const testHeap = new Heap(AMAZON_COMPARISON);
// testHeap.insert(['1ab', 'echo', 'box', 'hammer', 'alexa']);
// testHeap.insert(['12d', 'echo', 'box', 'desk']);
// testHeap.insert(['b23', 'kindle', 'box']);
// testHeap.insert(['a12', 'kindle', 'box']);
// console.log(testHeap);
// console.log('a12' > 'b23');
// console.log(testHeap.removeMax());
// console.log(testHeap);
// console.log(testHeap.removeMax());
// console.log(testHeap);


// console.log(Number('hi'))
/* 
Given 2 sets of arrays and a maximum travel distance of a drone, 
find the highest distance that is less than or equal to the max distance based off 
of 1 distance forward, and 1 distance back. The 2 arrays are: 

Forward point

[
  [1,100], 
  [2,300], 
  [3,400]
]

Return points 

[
  [1,200], 
  [2,300]
]

Max distance drone can travel: 600.

Output is [[3,1],[2,2]]
*/

/* 
O(NM) TIME | O(NM) SPACE
*/
function findMaxRoutes(forwardRoutes, backRoutes, maxDistance) {
  if (!forwardRoutes.length || !backRoutes.length || !maxDistance) return [];

  let routes = {};
  let maxSoFar = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < forwardRoutes.length; i++) {
    let fRoute = forwardRoutes[i];
    for (let j = 0; j < backRoutes.length; j++) {
      let bRoute = backRoutes[j];
      let distance = fRoute[1] + bRoute[1];
      if (!routes[distance]) {
        routes[distance] = [[fRoute[0], bRoute[0]]];
      } else {
        routes[distance].push([fRoute[0], bRoute[0]]);
      }

      if (distance <= maxDistance && distance > maxSoFar) maxSoFar = distance;
    }
  }

  return maxSoFar === Number.MIN_SAFE_INTEGER ? [] : routes[maxSoFar];
}


// O(N + M) TIME | O(N) SPACE
function findMaxRoutes(forwardRoutes, backRoutes, maxDistance) {
    let possibleRoutes = new Map();
    let maxRoutes = [];
    let maxSoFar = Number.MIN_SAFE_INTEGER;
    let fStart = 0, fEnd = forwardRoutes.length - 1;
    let bStart = 0, bEnd = backRoutes.length - 1;

    while (fStart < forwardRoutes.length && bEnd >= 0) {
      let [fLocation, fDistance] = forwardRoutes[fStart];
      let [bLocation, bDistance] = backRoutes[bEnd];
      let totalDistance = fDistance + bDistance;

      if (totalDistance <= maxDistance) {
        possibleRoutes.set(`${fLocation}_${bLocation}`, totalDistance);
        if (maxSoFar < totalDistance) {
          maxSoFar = totalDistance
        }
        fStart++;
      } else {
        bEnd--;
      }
    }

    while (bStart < backRoutes.length && fEnd >= 0) {
      let [fLocation, fDistance] = forwardRoutes[fEnd];
      let [bLocation, bDistance] = backRoutes[bStart];
      let totalDistance = fDistance + bDistance;

      if (totalDistance <= maxDistance) {
        possibleRoutes.set(`${fLocation}_${bLocation}`, totalDistance);
        if (maxSoFar < totalDistance) {
          maxSoFar = totalDistance
        }
        bStart++;
      } else {
        fEnd--;
      }
    }

    for (let [k, v] of possibleRoutes) {
      if (v === maxSoFar) {
        let tuple = k.split('_').map(Number);
        maxRoutes.push(tuple);
      }
    }

    return maxRoutes;
  }

  // console.log(findMaxRoutes([
  //   [1,100], 
  //   [2,300], 
  //   [3,400]
  // ], [
  //   [1,200], 
  //   [2,300]
  // ], 600));
  
  // console.log(findMaxRoutes([
  //   [1,50], 
  //   [2,100], 
  //   [3,300]
  // ], [
  //   [1,150], 
  //   [2,400]
  // ], 600));