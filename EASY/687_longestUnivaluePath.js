/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var longestUnivaluePath = function(root) {
  let longestPath = 0;
  
  function dfs(root) {
      if (!root) return [null, 0];
     
      let left = dfs(root.left);
      let right = dfs(root.right);
      
      left[1] = (left[0] === root.val ? left[1] + 1 : 0);
      right[1] = (right[0] === root.val ? right[1] + 1 : 0);

      longestPath = Math.max(longestPath, left[1] + right[1]);
      return left[1] > right[1] ? [root.val, left[1]] : [root.val, right[1]]
  }
  
  dfs(root);
  return longestPath;
};

      // let current = [
      //     root.val,
      //     (left[0] === root.val ? left[1] + 1 : 0) +
      //     (right[0] === root.val ? right[1] + 1 : 0)
      // ];

      // console.log(current, longestPath);

// let tree = new TreeNode(5);
// tree.left = new TreeNode(4);
// tree.right = new TreeNode(5);
// tree.left.left = new TreeNode(1);
// tree.left.right = new TreeNode(1);
// tree.right.right = new TreeNode(5);

// function TreeNode(val) {
//   this.val = val;
//   this.left = this.right = null;
// }

// var longestUnivaluePath = function(root) {
//   let res = 0;
//   var postorder = function(root) {
//       if (root == null) return 0;
//       let l = postorder(root.left);
//       let r = postorder(root.right);
//       if (root.left != null) l = (root.val == root.left.val ? l+1 : 0);
//       if (root.right != null) r = (root.val == root.right.val ? r+1 : 0);
//       res = Math.max(res, l + r);
//       return Math.max(l, r);
//   }
//   postorder(root);
//   return res;
// };


// let tree = new TreeNode(5);
// tree.left = new TreeNode(4);
// tree.right = new TreeNode(5);
// tree.left.left = new TreeNode(1);
// tree.left.right = new TreeNode(1);
// tree.right.right = new TreeNode(5);

let tree = new TreeNode(1);
tree.right = new TreeNode(1);
tree.right.right = new TreeNode(1);
tree.right.right.left = new TreeNode(1);
tree.right.right.right = new TreeNode(1);
tree.right.right.right.right = new TreeNode(1);
tree.right.right.right.right.right = new TreeNode(1);
tree.right.right.right.right.right.right = new TreeNode(1);

console.log(longestUnivaluePath(tree));