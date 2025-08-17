import { DoubleLinkedList } from "./02.twinLInked-list.js";

class Queue<T> {
  constructor(private list: DoubleLinkedList<T> = new DoubleLinkedList()) {}

  enQueue(data: T) {
    this.list.insertAt(0, data);
  }

  deQueue() {
    return this.list.deleteAt(this.list.cnt() - 1);
  }

  clean() {
    this.list.clean();
  }

  print() {
    this.list.print();
  }
}

const fifo = new Queue<number>();
fifo.enQueue(0);
fifo.enQueue(1);
fifo.enQueue(2);
fifo.clean();

// print
fifo.print();
