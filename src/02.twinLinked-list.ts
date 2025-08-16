class Node<T> {
  constructor(
    public data: T,
    public next: Node<T> | null = null,
    public prev: Node<T> | null = null
  ) {}
}

export class DoubleLinkedList<T> {
  constructor(
    private head: Node<T> | null = null,
    private tail: Node<T> | null = null,
    public count = 0
  ) {}

  printList() {
    let arr: Array<T> = [];

    let curNode = this.head;
    while (curNode) {
      arr.push(curNode.data);
      curNode = curNode.next;
    }
    console.log(this.head);
    return arr;
  }

  insertAt(idx: number, data: T) {
    if (idx < 0 || data === undefined) {
      throw new Error("누락된 데이터가 있습니다.");
    }

    let newNode = new Node<T>(data);

    // Head
    if (idx === 0) {
      newNode.next = this.head;

      if (!!this.head) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (idx === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;
      if (this.tail) {
        this.tail.next = newNode;
      }
    } else {
      let node = this.head;

      for (let i = 0; i < idx - 1; i++) {
        node = node!.next;
      }

      newNode.next = node!.next;
      node!.next = newNode;
      newNode.prev = node;
    }

    if (newNode.next === null) {
      this.tail = newNode;
    }
    this.count++;
  }

  deleteAt(idx: number) {
    let deleteNode = null;

    if (idx === 0) {
      deleteNode = this.head;
      this.head = this.head!.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null; // 리스트가 완전히 비었을 때
      }
    } else if (idx === this.count - 1) {
      deleteNode = this.tail;
      this.tail = this.tail!.prev;
      if (this.tail) {
        this.tail.next = null;
      }
    } else {
      let prevNode = this.head;
      for (let i = 0; i < idx - 1; i++) {
        prevNode = prevNode!.next;
      }

      deleteNode = prevNode?.next;
      prevNode!.next = prevNode!.next!.next;
      prevNode!.next!.prev = prevNode;
    }
    console.log(this.count, "실행?");
    this.count--;

    // 삭제 노드 정리 -
    if (deleteNode) {
      deleteNode.next = null;
      deleteNode.prev = null;
    }

    return deleteNode;
  }
}
