/* 
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
// var lengthOfLongestSubstring = function(S) {
//     if (!S.length) return 0;

//     let longest = 1, start = 0, end = 1;
//     let seen = new Map();
//     seen.set(S[0], 0);

//     while (end < S.length) {
//       let char = S[end];

//       if (!seen.has(char)) {
//         seen.set(char, end);
//       } else {
//         while (S[start] !== char) {
//           seen.delete(S[start]);
//           start++;
//         }
//         start = seen.get(char) + 1;
//         seen.set(char, end);
//       }

//       longest = Math.max(longest, end - start + 1);
//       end++;
//     }

//     return longest;
// };

var lengthOfLongestSubstring = function(S) {
  let start = 0, max = 0;
  let seen = new Map();

  for (let i = 0; i < S.length; i++) {
    let char = S[i];
    if (seen.get(char) >= start) start = seen.get(char) + 1;
    seen.set(char, i);
    max = Math.max(max, i - start + 1);
  }

  return max;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));

console.log(lengthOfLongestSubstring("abba"));

console.log(lengthOfLongestSubstring("uqinntq"));