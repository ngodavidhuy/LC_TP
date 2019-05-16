/* 
Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.


Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]
*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people = people.sort((a, b) => {
      return a[0] !== b[0] ? b[0] - a[0] : a[1] - b[1];
    });
    // for (let i = 0; i < people.length - 1; i++) {
    //   for (let j = i + 1; j < people.length; j++) {
    //     let person = people[i];
    //     let other = people[j];
    //     if (person[1] === other[1] && person[0] > other[0]) {
    //       swap(i, j, people);
    //     } else if (person[1] > other[1]) {
    //       swap(i, j, people);
    //     }
    //   }
    // }
    return people;
};

function swap(i, j, arr) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

console.log(reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]))

// console.log([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]].sort((a, b) => a[0] - b[0]));