/* 
Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
Example 2:

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
NOTE: input types have been changed on April 15, 2019. Please reset to default code definition to get new method signature.
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// var merge = function(intervals) {

//   intervals = intervals.sort((a, b) => a[0] - b[0]);
//   let mergedIntervals = [];
//   let start, end;

//   for (let i = 0; i < intervals.length; i++) {
//     let interval = intervals[i];
//     if (start === undefined) {
//       start = interval[0], end = interval[1];
//     } else if (end < interval[0]) {
//       mergedIntervals.push([start, end]);
//       start = interval[0], end = interval[1];
//       if (i < intervals.length - 1) continue;
//     } else if (end > interval[1]) {
//         if (i < intervals.length - 1) continue;
//     } else if (end >= interval[0] && end < interval[1]) {
//       end = interval[1];
//     }

//     if (i === intervals.length - 1) mergedIntervals.push([start, end]);
//   }

//   return mergedIntervals;
// };

function merge(intervals) {
  if (!intervals || !intervals.length) return [];
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  let merged = [], start = intervals[0][0], end = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= end) {
      end = Math.max(end, intervals[i][1]);
    } else {
      merged.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    }
  }

  merged.push([start, end]);
  return merged;
}

console.log(merge([[1,2],[3,4],[5,6]]));

console.log(merge([[1,5],[3,5],[6,7]]));

console.log(merge([[1,5],[4,8],[7,12]]));

console.log(merge([[1,10],[2,5]]));

console.log(merge([[1,4],[4,5]]));

console.log(merge([[1,4],[0,4]]));