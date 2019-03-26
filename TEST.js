function validAnagram(s1, s2){
  // add whatever parameters you deem necessary - good luck!
  if (s1.length !== s2.length) return false;
  
  const charFreq = {};
  
  for (let char of s1) {
    !charFreq[char] ? charFreq[char] = 1 : charFreq[char]++;
  }
  
  for (let char of s2) {
    if (!charFreq[char]) {
      return false;
    } else {
      charFreq[char]--;
    }
  }

  return true;
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));
console.log(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana'));
console.log(validAnagram('qwerty', 'qeywrt'));
console.log(validAnagram('texttwisttime', 'timetwisttime'));



