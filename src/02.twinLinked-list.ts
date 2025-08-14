class Node<T> {
  constructor(
    public data: T,
    public next: Node<T> | null = null,
    public prev: Node<T> | null = null
  ) {}
}

const isMissing = (v: unknown): v is null | undefined => v == null;

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
    console.log(this.head, this.tail);
    return arr;
  }
  insertAt(idx: number, data: T) {
    if (idx < 0 || data === undefined) {
      throw new Error("누락된 데이터가 있습니다.");
    }

    const newNode = new Node<T>(data);

    // Head
    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    }
  }
}

const list = new DoubleLinkedList<number>();
list.insertAt(0, 1);
list.insertAt(0, 0);

list.printList();
