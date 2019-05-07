/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function backspaceCompare(s1, s2) {
  let b1 = 0, b2 = 0, i = s1.length - 1, j = s2.length - 1;

  while (i >= 0 || j >= 0) {
    if (s1[i] === "#") {
      b1++, i--;
    } else if (s2[j] === "#") {
      b2++, j--;
    } else if (b1 > 0) {
      b1--;
      if (i >= 0) i--;
    } else if (b2 > 0) {
      b2--;
      if (j >= 0) j--;
    } else {
      if (b1 === 0 && b2 === 0) {
        if (s1[i] === s2[j]) {
          i--, j--;
        } else {
          return false;
        }
      } 
    }
  }

  return i === j;
};

console.log(backspaceCompare('cfwe###', 'c'));

console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('a##c', '#a#c'));
