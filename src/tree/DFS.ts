import { BinarySearchTree, Node } from "./tree-binarysearch.js";

const BST = new BinarySearchTree();

const arr = [6, 3, 4, 7, 10, 6, 77, 23];

for (const num of arr) BST.insert(num);

function DFSinOrder<T>(tree: BinarySearchTree<T>) {
  let arr: Array<T> = [];
  function traverse(tree: Node<T>) {
    if (tree.left) traverse(tree.left);
    arr.push(tree.val!);
    if (tree.right) traverse(tree.right);
  }

  traverse(tree.root!);
  return arr;
}

// 전위
function DFSpreOrder<T>(tree: BinarySearchTree<T>) {
  let arr: Array<T> = [];
  function traverse(tree: Node<T>) {
    arr.push(tree.val!);
    if (tree.left) traverse(tree.left);
    if (tree.right) traverse(tree.right);
  }

  traverse(tree.root!);
  return arr;
}

//후위
function DFSPostOrder<T>(tree: BinarySearchTree<T>) {
  let arr: Array<T> = [];
  function traverse(tree: Node<T>) {
    if (tree.left) traverse(tree.left);
    if (tree.right) traverse(tree.right);
    arr.push(tree.val!);
  }

  traverse(tree.root!);
  return arr;
}

const result = DFSPostOrder(BST);
