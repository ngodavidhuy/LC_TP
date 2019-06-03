/* 
Given a string that consists of only uppercase English letters, you can replace any letter in the string with another letter at most k times. Find the length of a longest substring containing all repeating letters you can get after performing the above operations.

Note:
Both the string's length and k will not exceed 104.

Example 1:

Input:
s = "ABAB", k = 2

Output:
4

Explanation:
Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input:
s = "AABABBA", k = 1

Output:
4

Explanation:
Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let chars = new Array(26).fill(0);
  let start = 0, maxLength = 0, maxCount = 0;

  for (let end = 0; end < s.length; end++) {
    chars[s.charCodeAt(end) - 65]++;
    maxCount = Math.max(maxCount, chars[s.charCodeAt(end) - 65]);
    if (end - start + 1 - maxCount > k) {
      chars[s.charCodeAt(start) - 65]--;
      start++;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
};

console.log(characterReplacement("AABABBA", 1));
console.log(characterReplacement("ABAB", 2));