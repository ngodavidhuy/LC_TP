/* 
Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

    1
   / \
  2   5
 / \   \
3   4   6
The flattened tree should look like:

1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var flatten = function(root) {
  let lastNode = null;
  let helper = function(node) {
    if (node.right) { helper(node.right); };
    if (node.left) { helper(node.left); };
    if (lastNode) {
      node.right = lastNode;
      node.left = null;
    }
    lastNode = node;
  }

  if (root) { helper(root); }
  return lastNode;
};

// other version

let flatten = function(root) {
  if (!root) return;
  
  flatten(root.right);
  let right = root.right;
  if (root.left) {
    flatten(root.left);
    let lastLeft = root.left;
    while (lastLeft.right) {
      lastLeft = lastLeft.right;
    }
    root.right = root.left;
    lastLeft.right = right;
    root.left = null;
  }
}

let testTree = new TreeNode(1);
testTree.left = new TreeNode(2);
testTree.left.left = new TreeNode(3);
testTree.left.right = new TreeNode(4);
testTree.right = new TreeNode(5);
testTree.right.right = new TreeNode(6);

// console.log(testTree);
console.log(flatten(testTree));

