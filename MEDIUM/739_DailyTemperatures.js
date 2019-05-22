/* 
Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].
*/

/**
 * @param {number[]} T
 * @return {number[]}
 */
//
// var dailyTemperatures = function(T) {
//     if (!T || !T.length) return [];
//     let forcast = new Array(T.length).fill(0);
//     for (let i = T.length - 2; i >= 0; i--) {
//       for (let j = i + 1; j < T.length; j++) {
//         if (T[j] > T[i]) {
//           forcast[i] = j - i;
//           break;
//         }
//       }
//     } 
//     return forcast;
// };

var dailyTemperatures = function(T) {
  let forcast = new Array(T.length).fill(0);
  let stack = new Array(T.length);
  let top = -1;
  for (let i = 0; i < T.length; i++) {
    while (top > -1 && T[i] > T[stack[top]]) {
      let idx = stack[top--];
      forcast[idx] = i - idx;
    }
    stack[++top] = i;
  } 
  return forcast;
};

console.log(dailyTemperatures([]));
console.log(dailyTemperatures([72]));
console.log(dailyTemperatures([72, 72]));
console.log(dailyTemperatures([27, 30]));
console.log(dailyTemperatures([30, 27]));
console.log(dailyTemperatures([30, 20, 30]));
console.log(dailyTemperatures([70, 71, 72, 73, 74]));
console.log(dailyTemperatures([74,72,71,70]));


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));