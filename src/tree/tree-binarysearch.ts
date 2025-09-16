// 이진트리

class Node<T> {
  constructor(
    public val: T | null = null,
    public left: Node<T> | null = null,
    public right: Node<T> | null = null
  ) {}
}

class BinarySearchTree<T> {
  constructor(private root: null | Node<T> = null) {}

  insert(val: T) {
    let newNode = new Node(val);
    if (this.root === null) this.root = newNode;
    else {
      let curNode = this.root;

      while (1) {
        if (val === curNode.val) return undefined;

        if (val < curNode.val!) {
          if (curNode.left === null) {
            curNode.left = newNode;
            return this;
          }

          curNode = curNode.left;
        } else {
          if (curNode.right === null) {
            curNode.right = newNode;
            return this;
          }
          curNode = curNode.right;
        }
      }
    }
  }
}

export {};
