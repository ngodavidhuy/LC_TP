/* 
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];

var findAnagrams = function(s, p) {
  let output = [];
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  let targetAnagram = findAnagramCode(p, primes);
  let current;
  
  for (let i = 0; i <= s.length - p.length; i++) {
      current = findAnagramCode(s.slice(i, i + p.length), primes);
      if (current === targetAnagram) output.push(i);
  }

  return output;
};

function findAnagramCode (str, primes) {
  let total = 1;
  for (let i = 0; i < str.length; i++) {
      let key = str[i].charCodeAt() - 97;
      total *= primes[key];
  }
  return total;
}

// s: "cbaebabacd" p: "abc"

console.log(findAnagrams('cbaebabaczdabcd', 'abcd'));
console.log(findAnagrams('abab', 'ab'));
// console.log(findAnagrams('op', 'by'));

// console.log(findAnagramCode('op', primes));
// console.log(findAnagramCode('by', primes));

console.log(findAnagrams('kzexfqiudtwvpjnhgocasbmlrykzexfqiudtwvpjnhgo', 'ykzexfqiudtwvpjnhgocasbmlr'));

/// "ykzexfqiudtwvpjnhgocasbmlr"
