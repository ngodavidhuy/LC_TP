/* 
Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

Example 1:

Input: "aacecaaa"
Output: "aaacecaaa"
Example 2:

Input: "abcd"
Output: "dcbabcd"

Input: "ab"
Output: "bab"

Input: "cecar"
Output: "racecar"

Input: "david"
Output: "divadavid"
*/

/**
 * @param {string} s
 * @return {string}
 */

// O(N^2) TIME | O(K) SPACE
var shortestPalindrome = function(s) {
    let toAppend = '';
    let start = findLongestSubstrPalindrome(s)[1];
    
    for (let i = start; i < s.length; i++) {
      toAppend = s[i] + toAppend;
    }

    return toAppend + s;
};

function findLongestSubstrPalindrome (s) {
  let palindrome = [0, 0];

  for (let i = Math.ceil(s.length / 2); i >= 0; i--) {
    palindrome = expand(i, i, s, palindrome);
    palindrome = expand(i - 1, i, s, palindrome);
    if (palindrome[0] === 0 && palindrome[1] !== 0) break;
  }

  return palindrome;
}

function expand(start, end, s, palindrome) {
  while (start >= 0 && end < s.length) {
    if (s[start] === s[end]) start--, end++;
    else return palindrome;
  }

  return (palindrome[1] - palindrome[0] < end - start && start + 1 === 0) ? palindrome = [start + 1, end] : palindrome;
}

// console.log(findLongestSubstrPalindrome('david'));
// console.log(findLongestSubstrPalindrome('racecar'));

// console.log(findLongestSubstrPalindrome('aacecaaa'));
// console.log(findLongestSubstrPalindrome('abcd'));
// console.log(findLongestSubstrPalindrome('ab'));
// console.log(findLongestSubstrPalindrome('cecar'));

console.log(shortestPalindrome('david'));
console.log(shortestPalindrome('aacecaaa'));
console.log(shortestPalindrome('abcd'));
console.log(shortestPalindrome('ab'));
console.log(shortestPalindrome('cecar'));
console.log(shortestPalindrome('racecar'));

console.log(shortestPalindrome('abb'));

// console.log(shortestPalindrome('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'));