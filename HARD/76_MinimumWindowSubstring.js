/* 
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// O(M + N) TIME | O(M + N) SPACE
var minWindow = function(s, t) {
    let dict = {};
    for (let char of t) !dict[char] ? dict[char] = 1 : dict[char]++;

    let counter = t.length, l = 0, r = 0, start = 0, end = 0, distance = Infinity;

    while (r < s.length) {
      if (dict[s[r++]]-- > 0) counter--;
      while (counter === 0) {
        if (r - l < distance) {
          distance = r - l;
          start = l, end = r;
        }
        if (dict[s[l++]]++ === 0) counter++;
      }
    }

    console.log(dict);
    return distance === Infinity ? "" : s.substring(start, end);
};

// function minWindow(s, t) {
//   let dict = {};
//   for (let char of t) !dict[char] ? dict[char] = 1 : dict[char]++;

//   let count = t.length;   // remaining matching count

//   let l = 0;
//   let r = 0;

//   let start = 0;
//   let minLen = Infinity;

//   while (r < s.length) {
//     if (dict[s[r++]]-- > 0) count--;

//     while (count === 0) {   // valid
//       if (r - l < minLen) {
//         minLen = r - l;
//         start = l;
//       }

//       if (dict[s[l++]]++ === 0) count++; // make it invalid
//     }
//   }

//   console.log(dict);

//   return minLen === Infinity ? '' : s.substr(start, minLen);
// }

console.log(minWindow("ADOBECODEBANC", "ABC"))