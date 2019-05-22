/* 
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: 2, [[1,0]] 
Output: true
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: 2, [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.
Note:

The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

 // O(V+E) TIME | O(V+E) SPACE
function canFinish(courses, prerequisites) {
  let graph = createCourseGraph(courses, prerequisites);
  let orderedCourses = getOrderedCourses(graph);
  return orderedCourses.length === courses;
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
  orderedCourses.push(node);
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

console.log(canFinish(2, [[1,0]]));