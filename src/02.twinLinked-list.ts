class Node<T> {
  constructor(
    public data: T,
    public next: Node<T> | null = null,
    public prev: Node<T> | null = null
  ) {}
}

class DoubleLinkedList<T> {
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

      this.tail!.next = newNode;
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
}

const list = new DoubleLinkedList<number>();
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);

console.log(list.printList());
