/* 
Given an undirected graph, return true if and only if it is bipartite.

Recall that a graph is bipartite if we can split it's set of nodes into two independent subsets A and B such that every edge in the graph has one node in A and another node in B.

The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.  Each node is an integer between 0 and graph.length - 1.  There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

Example 1:
Input: [[1,3], [0,2], [1,3], [0,2]]
Output: true
Explanation: 
The graph looks like this:
0----1
|    |
|    |
3----2
We can divide the vertices into two groups: {0, 2} and {1, 3}.
Example 2:
Input: [[1,2,3], [0,2], [0,1,3], [0,2]]
Output: false
Explanation: 
The graph looks like this:
0----1
| \  |
|  \ |
3----2
We cannot find a way to divide the set of nodes into two independent subsets.
 

Note:

graph will have length in range [1, 100].
graph[i] will contain integers in range [0, graph.length - 1].
graph[i] will not contain i or duplicate values.
The graph is undirected: if any element j is in graph[i], then i will be in graph[j].
*/

/**
 * @param {number[][]} graph
 * @return {boolean}
 */

function isBipartite(graph) {
  let constructedGraph = createGraph(graph);
  let evens = [];
  let odds = [];
  for (let node of constructedGraph.getNodes()) {
    if (node.getState() === 'UNVISITED') {
      let groups = getBipartiteGroups(node);
      if (groups === null) return false;
      evens.push(...groups[0]);
      odds.push(...groups[1]);
    }
  }

  return [evens, odds];
};

function createGraph(array) {
  let graph = new Graph(array);
  for (let i = 0; i < array.length; i++) {
    let edges = array[i];
    for (let e of edges) {
      graph.addEdge(i, e);
    }
  }
  return graph;
}

function getBipartiteGroups(startNode) {
  let queue = [startNode];
  let oddNodes = [];
  let evenNodes = [];

  startNode.setLevel(0);
  startNode.setState('VISITING');

  while (queue.length) {
    let current = queue.shift();
    if (current.getLevel() % 2 === 0) {
      evenNodes.push(current);
    } else {
      oddNodes.push(current);
    }

    for (let neighbor of current.getNeighbors()) {
      if (neighbor.getState() === 'UNVISITED') {
        neighbor.setLevel(current.getLevel() + 1);
        queue.push(neighbor);
        neighbor.setState('VISITING');
      } else if (neighbor.getLevel() === current.getLevel()) {
        return null;
      }
    }
    current.setState('VISITED');
  }

  return [evenNodes, oddNodes];
}

class Graph {
  constructor(vertices) {
    this.nodes = [];
    this.graph = {};
    for (let i = 0; i < vertices.length; i++) {
      this.addNode(i);
    }
  }

  addEdge(n1, n2) {
    let from = this.getNode(n1);
    let to = this.getNode(n2);
    from.neighbors.push(to);
  }

  getNode(node) {
    return this.graph[node];
  }

  getNodes() {
    return this.nodes;
  }

  addNode(node) {
    if (!this.graph[node]) {
      this.graph[node] = new Node(node);
      this.nodes.push(this.graph[node]);
    }
  }

  
}

class Node {
  constructor(data) {
    this.data = data;
    this.states = {
      'UNVISITED': 'UNVISITED',
      'VISITING': 'VISITING',
      'VISITED': 'VISITED',
    };
    this.state = 'UNVISITED';
    this.level = -1;
    this.neighbors = [];
  }

  setLevel(level) {
    this.level = level;
  }

  getLevel() {
    return this.level;
  }

  setState(state) {
    if (this.states[state] !== undefined) {
      this.state = state;
    }
    return;
   }
  
   getState() {
     return this.state;
   }

  getNeighbors() {
    return this.neighbors;
  }
}
// console.log(isBipartite([[1],[0],[4],[4],[2,3]]));
console.log(isBipartite([[1,3], [0,2], [1,3], [0,2]]));
// console.log(isBipartite([[1,2,3], [0,2], [0,1,3], [0,2]]));
// console.log(isBipartite([[1],[0,3],[3],[1,2]]));
// console.log(isBipartite([[3],[2,4],[1],[0,4],[1,3]]));

