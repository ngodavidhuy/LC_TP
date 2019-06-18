/* 
Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

 

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
 

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter

*/

/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  let commons = [];
  const count = new Array(26).fill(Number.MAX_SAFE_INTEGER);
  
  for (let str of A) {
    let subsetCount = new Array(26).fill(0);

    for (let i = 0; i < str.length; i++) subsetCount[str.charCodeAt(i) - 97]++;
    for (let i = 0; i < 26; i++) count[i] = Math.min(subsetCount[i], count[i]);
  }



  for (let i = 0; i < 26; i++) {
    while (count[i]-- > 0) commons.push(String.fromCharCode(i + 97));
  }

  return commons;
};



console.log(commonChars(["bella","label","roller"]))