/* 
In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

 

Example 1:

Input: N = 2, trust = [[1,2]]
Output: 2
Example 2:

Input: N = 3, trust = [[1,3],[2,3]]
Output: 3
Example 3:

Input: N = 3, trust = [[1,3],[2,3],[3,1]]
Output: -1
Example 4:

Input: N = 3, trust = [[1,2],[2,3]]
Output: -1
Example 5:

Input: N = 4, trust = [[1,3],[1,4],[2,3],[2,4],[4,3]]
Output: 3
 

Note:

1 <= N <= 1000
trust.length <= 10000
trust[i] are all different
trust[i][0] != trust[i][1]
1 <= trust[i][0], trust[i][1] <= N
*/

/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
// var findJudge = function(N, trust) {
//   let graph = {};
//   let townJudge;

//   for (let i = 1; i <= N; i++) {
//     graph[i] = [];
//   }

//   for (let relation of trust) {
//     graph[relation[0]].push(relation[1]);
//   }

//   for (let suspect in graph) {
//     if (graph[suspect].length === 0) townJudge = suspect;
//   }

//   if (!townJudge) return -1;

//   for (let person in graph) {
//     if (person !== townJudge) {
//       if (graph[person].indexOf(Number(townJudge)) === -1) return -1;
//     }
//   }
  
//   return townJudge;
// };

var findJudge = function(N, trust) {
  var graph = new Map();
  for (let i = 1; i <= N; i ++) graph.set(i, 0);
  for (let [v, e] of trust) {
    graph.set(v, graph.get(v) - 1)
    graph.set(e, graph.get(e) + 1) 
  }
  for (let [key, value] of graph) {
    if (value === N - 1) return key
  }

  return -1
};

// console.log(findJudge(2, [[1,2]]));

// console.log(findJudge(3, [[1,3], [2,3]]));

console.log(findJudge(4, [[1,3],[1,4],[2,3],[2,4],[4,3]]));