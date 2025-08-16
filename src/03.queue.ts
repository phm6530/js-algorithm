import { DoubleLinkedList } from "./02.twinLInked-list.js";

class Queue<T> {
  constructor(private list: DoubleLinkedList<T> = new DoubleLinkedList()) {}

  enQueue(data: T) {
    return this.list.insertAt(0, data);
  }

  deQueue() {
    return this.list.deleteAt(this.list.count - 1);
  }

  print() {
    console.log(this.list.count);
    this.list.printList();
  }
}

const fifo = new Queue();
fifo.enQueue(1);
fifo.enQueue(2);
fifo.deQueue();
fifo.deQueue();

fifo.print();
