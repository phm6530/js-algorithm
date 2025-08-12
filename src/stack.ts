import { LinkedList, Node } from "./01.linked-list.js";

class Stack<T> {
  constructor(public list: LinkedList<T>) {}
  pop() {
    return this.list.deleteAt(-1);
  }

  push(data: T) {
    return this.list.insertAt(this.list.count - 1, data);
  }

  clean() {
    return this.list.clean();
  }
}

const list = new LinkedList<number>();
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(0, 99);
list.insertAt(1, 1000);

// console.log(list.count);
const confirms = list.print();
console.log(confirms);

const stack = new Stack<number>(list);
stack.push(2);
const confirmss = list.print();
console.log(confirmss);
