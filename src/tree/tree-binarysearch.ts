// 이진트리
// 삽입 O(log N)
// 검색 O(log N)

class Node<T> {
  constructor(
    public val: T | null = null,
    public left: Node<T> | null = null,
    public right: Node<T> | null = null
  ) {}
}

class BinarySearchTree<T> {
  constructor(public root: null | Node<T> = null) {}

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

  find(val: T) {
    // 기준점
    let curNode = this.root;

    if (!curNode || curNode.val === null) return undefined;
    while (curNode) {
      if (curNode.val === val) {
        return curNode;
      }

      if (curNode.val! < val) {
        curNode = curNode.right;
      } else {
        curNode = curNode.left;
      }
    }

    return undefined;
  }
}

export { BinarySearchTree };
