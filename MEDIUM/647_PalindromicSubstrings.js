// O(S^3) TIME | O(S) SPACE
function countPalindromicSubstrings(string) {
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      let substring = string.slice(i, j + 1);
      count += checkPalindrome(substring);
    }
  }

  return count;
}

function checkPalindrome(substring) {
  let leftIdx = 0;
  let rightIdx = substring.length - 1;

  while (leftIdx < rightIdx) {
    if (substring[leftIdx] !== substring[rightIdx]) return 0;
    leftIdx++, rightIdx--;
  }

  return 1;
}

// O(S^2) TIME | O(1) SPACE
var countSubstrings = function(s) {
  let count = 0;
  
  for (let i = 0; i < s.length; i++) {
      expand(i, i);
      expand(i, i + 1);
  }
  
  function expand(start, end) {
      while (start >= 0 && end < s.length) {
          if (s[start] === s[end]) {
              count++, start--, end++;
          } else {
              return;
          }
      }
  }
  
  return count;
};

console.log(checkPalindrome('racecar'))
console.log(countPalindromicSubstrings('abc'));
console.log(countPalindromicSubstrings('aaa'));

