/* 
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, return the ordering of courses you should take to finish all courses.

There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.

Example 1:

Input: 2, [[1,0]] 
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished   
             course 0. So the correct course order is [0,1] .
Example 2:

Input: 4, [[1,0],[2,0],[3,1],[3,2]]
Output: [0,1,2,3] or [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both     
             courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. 
             So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3] .
Note:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.

*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
// O(V+E) TIME | O(V+E) SPACE
function findOrder(courses, prerequisites) {
  let graph = createCourseGraph(courses, prerequisites);
  return getOrderedCourses(graph);
};

function createCourseGraph(courses, prerequisites) {
  let graph = new CourseGraph(courses);
  for (let [c, p] of prerequisites) {
    graph.addEdge(c, p);
  }
  return graph;
}

function getOrderedCourses(graph) {
  let orderedCourses = [];
  const { nodes } = graph;
  while (nodes.length) {
    let current = nodes.pop();
    let containsCycle = dfsVisit(current, orderedCourses);
    if (containsCycle) return [];
  }

  return orderedCourses;
}

function dfsVisit(node, orderedCourses) {
  if (node.getState() === 'VISITED') return false;
  if (node.getState() === 'VISITING') return true;
  node.setState('VISITING');
  for (let prereqNode of node.prereqs) {
    let containsCycle = dfsVisit(prereqNode, orderedCourses);
    if (containsCycle) return true;
  }
  node.setState('VISITED');
  orderedCourses.push(node.course);
  return false;
}

class CourseGraph {
  constructor(courses) {
    this.nodes = [];
    this.graph = {};
    for (let i = 0; i < courses; i++) {
      this.addNode(i);
    }
  }

  addEdge(prereq, course) {
    let prereqNode = this.getNode(prereq);
    let courseNode = this.getNode(course);
    prereqNode.prereqs.push(courseNode);
  }

  getNode(course) {
    return this.graph[course];
  }

  addNode(course) {
    if (!this.graph[course]) {
      this.graph[course] = new CourseNode(course);
      this.nodes.push(this.graph[course]);
    }
  }


}

class CourseNode {
 constructor(course) {
   this.course = course;
   this.states = {
     'UNVISITED': 'UNVISITED',
     'VISITING': 'VISITING',
     'VISITED': 'VISITED',
   };
   this.state = 'UNVISITED';
   this.prereqs = [];
 }

 addPrereq(node) {
   this.prereqs.push(node);
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
}

console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));