/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var constructFromPrePost = function(pre, post) {
  if (!pre.length) return null;
  if (pre.length === 1) return new TreeNode(pre[0]);

  let val = pre[0];
  let leftIdx = post.indexOf(pre[1]);

  let root = new TreeNode(val);
  root.left = constructFromPrePost(pre.slice(1, leftIdx + 2), post.slice(0, leftIdx + 1));
  root.right = constructFromPrePost(pre.slice(leftIdx + 2), post.slice(leftIdx + 1));

  return root;
};

console.log(constructFromPrePost([1,2,4,5,3,6,7],[4,5,2,6,7,3,1]));