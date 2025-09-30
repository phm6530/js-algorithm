export class Node<T> {
  constructor(public data: T, public next: Node<T> | null = null) {}
}

export class LinkedList<T> {
  constructor(private head: Node<T> | null = null, public count = 0) {}

  print() {
    let arr = [];
    let curNode = this.head;

    while (curNode) {
      arr.push(curNode.data);
      curNode = curNode.next;
    }

    return arr;
  }

  tail() {}

  insertAt(idx: number, data: T) {
    const newNode = new Node(data);

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let node = this.head;

      for (let i = 0; i < idx - 1; i++) {
        if (!!node && "next" in node) {
          node = node.next;
        }
      }

      newNode.next = node!.next;
      node!.next = newNode;
    }

    this.count++;
  }

  private getNodeAt(idx: number): Node<T> {
    if (idx < 0 || idx >= this.count) {
      throw new Error("idx out of range");
    }
    let cur = this.head as Node<T>;
    for (let i = 0; i < idx; i++) cur = cur.next as Node<T>;
    return cur;
  }

  clean() {
    this.head = null;
    this.count = 0;
  }

  deleteAt(idx: number) {
    if (idx === 0) {
      this.head = this.head!.next;
    } else {
      const nidx = idx < 0 ? this.count + idx : idx;
      const prev = this.getNodeAt(nidx - 1)!;
      prev.next = prev.next ? prev.next.next : null;
    }
    this.count--;
  }
}

const list = new LinkedList();
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(0, 99);
list.insertAt(1, 1000);

// console.log(list.count);
list.insertAt(1, 1);

list.deleteAt(1);
const confirms = list.print();
// if (typeof confirm === "arr") {
//   console.log(confirm);
// }
