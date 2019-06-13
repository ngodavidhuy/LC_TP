/* 
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function.
*/


// WITH STACK O(N) TIME | O(N) SPACE
// var calculate = function(s) {
//   if (!s || !s.length) return 0;
//   s += '+';
//   const stack = [];
//   let op = '+';
//   let n = 0;
//   let total = 0;

//   for (let i = 0; i < s.length; i++) {
//     let c = s.charAt(i);

//     if (c >= '0' && c <= '9') {
//       n = n * 10 + parseInt(c);
//       continue;
//     }

//     if (c === ' ') continue;

    // if (op === '+') {
    //   stack.push(n);
    // } else if (op === '-') {
    //   stack.push(-n);
    // } else if (op === '*') {
    //   stack.push(stack.pop() * n);
    // } else if (op === '/') {
    //   stack.push(Math.floor(stack.pop() / n));
    // }

//     op = c;
//     n = 0;
//   }

//   while (stack.length) {
//     total += stack.pop();
//   }

//   return total;
// };

var calculate = function(s) {
  if (!s || !s.length) return 0;

  let prev = 0;
  let sum = 0;
  let op = '+';

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (c === ' ') continue;
    if (isDigit(c)) {
      let n = parseInt(c);
      while (i + 1 < s.length && isDigit(s.charAt(i + 1))) {
        n = n * 10 + parseInt(s.charAt(i + 1));
        i++;
      }

      if (op === '+') {
        sum += prev;
        prev = n;
      } else if (op === '-') {
        sum += prev;
        prev = -n;
      } else if (op === '*') {
        prev *= n;
      } else if (op === '/') {
        prev = Math.trunc(prev / n);
      }
    }  else {
      op = c;
    }
  }

  sum += prev;
  return sum;
};

function isDigit(c) {
  return c >= '0' && c <= '9';
}

debugger; calculate("3+2*2");

console.log(calculate("3+2*2"));
console.log(calculate(" 3/2 "));
console.log(calculate(" 3+5 / 2 "))
console.log(calculate("14-3/2"))

