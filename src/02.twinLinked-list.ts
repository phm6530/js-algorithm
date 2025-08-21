// Node
export class Node<T> {
  constructor(
    public data: T,
    public next: Node<T> | null = null,
    public prev: Node<T> | null = null
  ) {}
}

// Main
export class DoubleLinkedList<T> {
  constructor(
    private head: Node<T> | null = null,
    private tail: Node<T> | null = null,
    private count: number = 0
  ) {}

  cnt() {
    return this.count;
  }

  insertAt(idx: number, data: T) {
    const newNode = new Node(data);

    // first
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;

      if (newNode.next) {
        newNode.next.prev = newNode;
      }
    }

    // Last
    else if (idx === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;

      if (this.tail) {
        this.tail.next = newNode;
      }
    }

    // 중간 노드 삽입
    else {
      let node = this.head;
      for (let i = 0; i < idx - 1; i++) {
        if (node) node = node.next;
        else break;
      }

      // 새로운 노드에 prev, next 삽입
      newNode.next = node!.next;
      node!.next = newNode;
      newNode.prev = node;
      newNode.next!.prev = newNode;
    }

    // new Node의 Next가 없다면 새로운 테일에 newNode 반영
    if (newNode.next === null) {
      this.tail = newNode;
    }

    // insert Count 증가
    this.count++;
  }

  getNodeAt(idx: number) {
    if (idx < 0 || idx > this.count - 1) {
      throw new Error("잘못된 인덱스 번호 입니다.");
    }
    let getNode = this.head;
    if (idx === this.count - 1) {
      getNode = this.tail;
    } else {
      for (let i = 0; i < idx; i++) {
        getNode = getNode!.next;
      }
    }
    return getNode;
  }

  // delete
  deleteAt(idx: number) {
    let deleteNode: Node<T> | null = null;
    if (idx === 0) {
      deleteNode = this.head;
      this.head = this.head!.next;
      if (this.head) {
        this.head.prev = null;
      } else if (this.head === null) {
        this.tail = null;
      }
    } else if (idx === this.count - 1) {
      deleteNode = this.tail;
      this.tail = deleteNode!.prev;
      this.tail!.next = null;
    } else {
      deleteNode = this.getNodeAt(idx);
      deleteNode!.prev!.next = deleteNode!.next;
      deleteNode!.next!.prev = deleteNode!.prev;
    }

    if (deleteNode) {
      deleteNode.next = null;
      deleteNode.prev = null;
    }

    this.count--;
    return deleteNode;
  }

  clean() {
    this.head = null;
    this.tail = null;
    this.count = 0;
  }

  //Print
  print() {
    let arr: Array<T> = [];
    let curNode: Node<T> | null = this.head;

    while (curNode) {
      arr.push(curNode.data);
      curNode = curNode.next;
    }

    console.log(arr);
    console.log("head :", this.head?.data);
    console.log("Tail : ", this.tail?.data);

    return arr;
  }
}
