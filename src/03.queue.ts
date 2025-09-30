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

  peek(idx: number) {
    try {
      const cnt = this.list.cnt();
      return this.list.getNodeAt(cnt - idx - 1);
    } catch (err) {
      const error = err as Error;
      console.log(error.message);
    }
  }

  print() {
    this.list.print();
  }
}

const fifo = new Queue<number>();

fifo.enQueue(0);
fifo.enQueue(1);
fifo.enQueue(2);

const pick = fifo.peek(0);
console.log("Pick : ", pick);

// print,
fifo.print();
