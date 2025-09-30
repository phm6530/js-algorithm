import { BinarySearchTree, Node } from "./tree-binarysearch.js";

//너비우선 탐색
const BST = new BinarySearchTree();
const arr = [1, 5, 4, 7, 10, 6, 77, 23];

for (const num of arr) BST.insert(num);

function BFS<T>(tree: BinarySearchTree<T>) {
  const Queue: Node<T>[] = []; // null 허용 안 함
  const result: T[] = [];

  if (!tree.root) throw new Error("undefined");

  Queue.push(tree.root);

  while (Queue.length) {
    const node = Queue.shift()!;
    result.push(node.val!);

    if (node.left) Queue.push(node.left);
    if (node.right) Queue.push(node.right);
  }

  return result;
}
