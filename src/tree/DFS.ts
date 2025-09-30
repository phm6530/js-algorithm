import { BinarySearchTree, Node } from "./tree-binarysearch.js";

const BST = new BinarySearchTree();

const arr = [6, 3, 4, 7, 10, 6, 77, 23];

for (const num of arr) BST.insert(num);

function DFS<T>(tree: BinarySearchTree<T>) {
  let arr: Array<T> = [];
  function traverse(tree: Node<T>) {
    arr.push(tree.val!);
    if (tree.left) traverse(tree.left);
    if (tree.right) traverse(tree.right);
  }

  if (!tree.root) {
    throw new Error("tree가 생성 x");
  }
  traverse(tree.root);
  return arr;
}

const result = DFS(BST);
console.log(result);
