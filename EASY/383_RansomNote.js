/* 
Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Note:
You may assume that both strings contain only lowercase letters.

canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */

 /* 
 'a', 'b' -> false
 '', '' -> true
 'aa', 'aab' -> true
 'aaa', 'aa' -> false
 'abcd', 'abc' -> false
 */

// O(M + N) TIME | O(N) SPACE
var canConstruct = function(ransomNote, magazine) {
    if (ransomNote.length > magazine.length) return false;

    let charFreq = {};
    
    for (let char of magazine) {
      !charFreq[char] ? charFreq[char] = 1 : charFreq[char]++;
    }

    for (let char of ransomNote) {
      if (!charFreq[char]) return false;
      charFreq[char]--;
    }

    return true;
};

console.log(canConstruct('a', 'b')); // FALSE
console.log(canConstruct('aaa', 'aa')); // FALSE
console.log(canConstruct('aa', 'aaa')); // FALSE

console.log(canConstruct('a', 'a')); // TRUE
console.log(canConstruct('racecars', 'sracecar')); //TRUE
console.log(canConstruct('abcdef', 'fedbca')); // TRUE
