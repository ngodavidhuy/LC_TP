/* 
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(numbers) {
  let graph = createGraph(numbers);
  let longest = 0;

  for (let node of graph.getNodes()) {
    if (node.getState() === 'UNVISITED') {
      node.setState('VISITING');
      dfsVisit(node, 1);
      node.setState('VISITED');
    }
  }

  function dfsVisit(node, currentCount) {
    if (currentCount > longest) longest = currentCount;
    for (let neighbor of node.getNeighbors()) {
      if (neighbor.getState() === 'UNVISITED') {
        neighbor.setState('VISITING');
        currentCount++;
        dfsVisit(neighbor, currentCount);
        neighbor.setState('VISITED');
      }
    }
  }

  return longest;
};



function createGraph(numbers) {
  let graph = new Graph(numbers);

  for (let num of numbers) {
    let [pNeighbor1, pNeighbor2] = [num - 1, num + 1];
    graph.addEdge(num, pNeighbor1);
    graph.addEdge(num, pNeighbor2);
  }

  return graph;
}

class Graph {
  constructor(numbers) {
    this.nodes = [];
    this.graph = {};
    for (let num of numbers) {
      this.addNode(num);
    }
  }

  addNode(value) {
    if (!this.graph[value]) {
      this.graph[value] = new Node(value);
      this.nodes.push(this.graph[value]);
    }
  }

  addEdge(n1, n2) {
    let fromNode = this.getNode(n1);
    let toNode = this.getNode(n2);
    if (fromNode && toNode && (fromNode !== toNode)) fromNode.neighbors.push(toNode);
  }

  getNode(value) {
    return this.graph[value];
  }

  getNodes() {
    return this.nodes;
  }


}

class Node {
  constructor(value) {
    this.value = value;
    this.neighbors = [];
    this.states = {
      'VISITED': 'VISITED',
      'VISITING': 'VISITING',
      'UNVISITED': 'UNVISITED'
    };
    this.state = 'UNVISITED';
  }

  getData() {
    return this.data;
  }

  getState() {
    return this.state;
  }

  getNeighbors() {
    return this.neighbors;
  }

  setState(state) {
    if (this.states[state]!== undefined) {
      this.state = state;
    }
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }
}

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,0,1,-1]));