import { BinarySearchTree, Node } from "./tree-binarysearch.js";

//너비우선 탐색
const BST = new BinarySearchTree();
const arr = [1, 5, 4, 7, 10, 6, 77, 23];

for (const num of arr) BST.insert(num);

function BFS<T>(tree: BinarySearchTree<T>) {
  const Queue: Node<T>[] = [];
  const result: T[] = [];
  if (tree.root) Queue.push(tree.root);

  while (Queue.length) {
    const current = Queue.shift()!;
    result.push(current.val!);

    if (current?.left) Queue.push(current.left);
    if (current?.right) Queue.push(current.right);
  }

  return result;
}
