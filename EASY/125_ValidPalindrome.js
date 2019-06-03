/* 
Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */


var isPalindrome = function(s) {
  s = s.toLowerCase();
  let left = 0, right = s.length - 1;

  while (left < right) {
    if (!isAlphaNumeric(s[left])) {
      left++;
    } else if (!isAlphaNumeric(s[right])) {
      right--;
    } else if (s[left] === s[right]) {
      left++, right--;
    } else {
      return false;
    }
  }

  return true;
};

function isAlphaNumeric(char) {
  let charCode = char.charCodeAt(0);
  return charCode >= 48 && charCode <= 57 || charCode >= 97 && charCode <= 122;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));



