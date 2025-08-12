class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  print() {
    let arr = [];
    let curNode = this.head;

    while (curNode) {
      arr.push(curNode.data);
      curNode = curNode.next;
    }
    return arr;
  }

  insertAt(idx, data) {
    const newNode = new Node(data);

    if (idx === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let node = this.head;

      for (let i = 0; i < idx - 1; i++) {
        node = node.next;
      }

      newNode.next = node.next;
      node.next = newNode;
    }

    this.count++;
  }

  getNode(idx) {
    let curNode = this.head;
    for (let i = 0; i < idx; i++) {
      curNode = curNode.next;
    }

    return curNode;
  }

  clean() {
    this.head = null;
  }

  deleteAt(idx) {
    if (idx === 0) {
      this.head = this.head.next;
    } else {
      let prevNode = this.head;

      for (let i = 0; i < idx; i++) {
        prevNode = prevNode.next;
      }
      prevNode.next = prevNode.next.next;
      return prevNode;
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
console.log(confirms);
// if (typeof confirm === "arr") {
//   console.log(confirm);
// }
