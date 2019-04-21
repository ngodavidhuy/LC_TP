/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} N
 * @return {TreeNode[]}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function allPossibleFBT(N, cache = {}) {
  let possibilites = [];
  if (N < 1 || N % 2 === 0) return possibilites;
  if (N === 1) return [new TreeNode(0)];

  let root;

  for (let i = 1; i <= N - 2; i += 2) {
    let leftSubTrees = cache[i] !== undefined ? cache[i] : allPossibleFBT(i, cache);
    let rightSubTrees = cache[N - 1 - i] !== undefined ? cache[N - 1 - i] : allPossibleFBT(N - 1 - i, cache);

    cache[i] = leftSubTrees;
    cache[N - 1 - i] = rightSubTrees;

    for (let l of leftSubTrees) {
      for (let r of rightSubTrees) {
        root = new TreeNode(0);
        root.left = l;
        root.right = r;
        possibilites.push(root);
      }
    }
  }

  return possibilites;
}




// function allPossibleFBT(N) {
//   let possibilities = [];
//   if (N < 1 || N % 2 === 0) return possibilities;
//   if (N === 1) return [new TreeNode(0)];

//   let root = new TreeNode(0);
//   let node = root;
//   explorePossibilities(root, node, 1, N, possibilities);
//   return possibilities;
// };

// function explorePossibilities(root, node, count, total, possibilities) {
//   node.left = new TreeNode(0);
//   node.right = new TreeNode(0);
//   count += 2;
//   console.log('hi', count);
//   if (count === total) {
//     possibilities.push(JSON.parse(JSON.stringify(root)));
//     node.left = null;
//     node.right = null;
//     return;
//   }
//   console.log(count);
//   explorePossibilities(root, node.left, count, total, possibilities);
//   console.log(count);
//   explorePossibilities(root, node.right, count, total, possibilities);
//   console.log(count);
// }

console.log(allPossibleFBT(7, {}));