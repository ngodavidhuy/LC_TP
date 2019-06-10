/* 
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let combinations = [];
  generateSets(combinations, "", 0, 0, n);
  return combinations;
};

var generateSets = function(combinations, buffer, opening, closing, max) {
if (buffer.length === max * 2) {
  combinations.push(buffer);
  return;
}

  if (opening < max) {
    generateSets(combinations, buffer + "(", opening + 1, closing, max);
  }

  if (closing < opening) {
    generateSets(combinations, buffer + ")", opening, closing + 1, max);
  }
}

// var isValid = function(combo) {
//   let stack = [];
//   for (let i = 0; i < combo.length; i++) {
//     if (combo[i] === "(") {
//       stack.push("(");
//     } else {
//       if (stack[stack.length - 1] !== "(") return false;
//       stack.pop();
//     }
//   }
//   return stack.length === 0;
// }

console.log(generateParenthesis(3));