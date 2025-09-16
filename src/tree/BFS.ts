import { BinarySearchTree } from "./tree-binarysearch.js";

const BST = new BinarySearchTree();
BST.insert(10);
BST.insert(5);
BST.insert(7);
BST.insert(3);

function BFS<T>(tree: BinarySearchTree<T>) {
  let queue = [],
    node = tree.root,
    result = [];
  queue.push(node);

  while (queue.length) {
    node = queue.shift()!;
    result.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return result;
}

console.log(BFS(BST));
