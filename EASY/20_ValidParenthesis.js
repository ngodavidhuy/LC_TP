/* 
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (s.length % 2 !== 0) return false;
  let stack = [];
  let closingBrackets = {
    ")": "(",
    "}": "{",
    "]": "[" 
  }

  for (let paren of s) {
    if (!closingBrackets[paren]) {
      stack.push(paren);
    } else {
      if (stack[stack.length - 1] !== closingBrackets[paren]) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));


console.log(isValid("(){}[]"));

console.log(isValid("((()))[]"));

amanaplanacanalpanama