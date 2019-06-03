/* 
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function hash(word) {
  let key = 1;
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  for (let i = 0; i < word.length; i++) {
    key *= primes[word.charCodeAt(i) - 97];
  }
  return key;
}

function groupAnagrams(strs) {
  if (!strs) return [];

  let dict = {};

  for (let word of strs) {
    console.log(word);
    let key = hash(word);
    if (dict[key] === undefined) {
      dict[key] = [word];
    } else {
      dict[key].push(word);
    }
  }

  return Object.values(dict);
};




console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));