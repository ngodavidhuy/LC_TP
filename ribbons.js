// O(NK LOG(K)) TIME | O(1) SPACE
function maxLengthOfMinCuts(arr, min) {
  if (!arr || !arr.length) return 0;
  let left = 1, right = Math.max(...arr), maxLength = 0, mid;

  while (left < right) {
    mid = Math.floor((left + right) / 2);

    let sum = arr.reduce((a, b) => {
      return a + Math.floor(b / mid)
    }, 0);

    if (sum >= min && mid > maxLength) {
      maxLength = mid;
    } else if (sum < min) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return maxLength;
}

console.log(maxLengthOfMinCuts([1,3,5,6,9], 5));
console.log(maxLengthOfMinCuts([12,20,50], 12));
console.log(maxLengthOfMinCuts([2,9,36], 10));

