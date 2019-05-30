/* 
Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Note:

You may assume the interval's end point is always bigger than its start point.
Intervals like [1,2] and [2,3] have borders "touching" but they don't overlap each other.
 

Example 1:

Input: [ [1,2], [2,3], [3,4], [1,3] ]

Output: 1

Explanation: [1,3] can be removed and the rest of intervals are non-overlapping.
 

Example 2:

Input: [ [1,2], [1,2], [1,2] ]

Output: 2

Explanation: You need to remove two [1,2] to make the rest of intervals non-overlapping.
 

Example 3:

Input: [ [1,2], [2,3] ]

Output: 0

Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/

// function eraseOverlapIntervals(intervals) {

  
//   let points = [];
//   let map = new Map();

//   for (let i = 0; i < intervals.length; i++) {
//     points.push(new Point(i, intervals[i][0], true));
//     points.push(new Point(i, intervals[i][1], false));
//   }

//   points = points.sort((a, b) => {
//     if (a.getLocation() === b.getLocation()) return a.checkIfStart() - b.checkIfStart();
//     return a.getLocation() - b.getLocation();
//   });

//   let currID = points[0].getID();
//   let currStart = points[0].getLocation();
//   let count = 0;

//   for (let i = 1; i < points.length; i++) {
//     let currPoint = points[i];
//     if (currPoint.checkIfStart() && currID !== currPoint.getID()) {

//       count++;
//     } else {
//       if (!currPoint.checkIfStart() && currPoint.getID === currID && i + 1 < points.length) {
//         currStart = points[i + 1].getLocation();
//         currID = points[i + 1].getID();
//       }
//     }
    
//   }

//   return ;
// }

function eraseOverlapIntervals(intervals) {
  if (!intervals.length) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  
  let end = intervals[0][1];
  let count = 1;

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= end) {
      end = intervals[i][1];
      count++;
    }
  }

  return intervals.length - count;
}

class Point {
  constructor(idx, location, isStart) {
    this.id = idx;
    this.location = location;
    this.isStart = isStart;
  }

  getID() {
    return this.id;
  }

  getLocation() {
    return this.location;
  }

  checkIfStart() {
    return this.isStart;
  }
}

console.log(eraseOverlapIntervals([ [1,2], [2,3], [3,4], [1,3] ]));

console.log(eraseOverlapIntervals([ [1,2], [1,2], [1,2] ]));

console.log(eraseOverlapIntervals([ [1,2], [2,3] ]))