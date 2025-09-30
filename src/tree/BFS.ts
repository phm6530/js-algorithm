import { BinarySearchTree } from "./tree-binarysearch.js";

const BST = new BinarySearchTree();

const arr = [1, 5, 4, 7, 10, 6, 77, 23];

for (const num of arr) BST.insert(num);

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

function Havery() {
  for (let i = 0; i < 100000000; i++) {
    console.log("많은 연");
  }
}
