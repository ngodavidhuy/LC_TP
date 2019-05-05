/* 
Given an n-ary tree, return the preorder traversal of its nodes' values.

For example, given a 3-ary tree:

Return its preorder traversal as: [1,3,5,6,2,4].


Note:

Recursive solution is trivial, could you do it iteratively?
*/

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */

 // RECURSIVE
var preorder = function(node, output = []) {
  if (!node) return [];
  output.push(node.val);
  if (node.children) node.children.forEach(child => preorder(child, output));
  return output;
};