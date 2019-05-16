function uniqueLetterString(S, memo = new Map()) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    for (let j = i + 1; j <= S.length; j++) {
      count += countUnique(S.slice(i, j), memo);
    }
  }

  return count;
}

function countUnique(substr, memo) {
  substr = substr.split('').sort();
  if (memo.has(substr)) return memo.get(substr);

  let frequency = {};

  for (let char of substr) {
    frequency[char] === undefined ? frequency[char] = 1 : frequency[char] += 1;
  }

  let uniqueCount = Object.entries(frequency).filter(e => e[1] === 1).length;
  memo.set(substr, uniqueCount);
  return uniqueCount;
}

function uniqueLetterString(S, memo = new Map()) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    for (let j = i; j <= S.length; j++)
      count += countUnique(S.slice(i, j), memo);
  }

  return count;
}

function countUnique(substr, memo) {
  substr = substr.split('').sort();
  if (memo.has(substr)) return memo.get(substr);

  let frequency = {};
  let count = 0;

  for (let char of substr) {
    frequency[char] === undefined ? frequency[char] = 1 : frequency[char] += 1;
  }

  for (let char in frequency) {
    if (frequency[char] === 1) count++;
  }

  memo.set(substr, count);
  return count;
}



console.log(uniqueLetterString('ABCB'))