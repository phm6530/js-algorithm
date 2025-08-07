import { linkedList } from "./linked-list/index.js";
class Stack {
    list;
    constructor(list = new linkedList()) {
        this.list = list;
    }
    pop() {
        return this.list.deleteNode(0)?.data;
    }
    push(data) {
        this.list.insertNode(0, data);
    }
    peek() {
        this.list.getNode(0);
    }
    isEmpty() {
        return this.list.size() === 0;
    }
    printStack() {
        return this.list.printAll();
    }
}
const stack = new Stack();
stack.push(0);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.printStack());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
