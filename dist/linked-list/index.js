"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    data;
    next;
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
//Linked List..
class linkedList {
    count = 0;
    head = null;
    constructor() { }
    // Print
    printAll() {
        let currentNode = this.head;
        let arr = [];
        while (currentNode) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        console.log(arr, `count: ${this.count}`);
    }
    // Link List
    insertAt(idx, data) {
        let newNode = new Node(data);
        if (idx === 0) {
            newNode.next = this.head; // idx가 0이면 새로운 노드 next에 기존의 헤드를 반영시킴
            this.head = newNode; // 그다음 헤드에 newNode로 head를 갱신함
        }
        else {
            let curNode = this.head; // 노드 리스트임
            for (let i = 0; i < idx - 1; i++) {
                curNode = curNode.next;
            }
            newNode.next = curNode.next;
            curNode.next = newNode;
        }
        this.count++;
    }
    //삭제
    deleteAt(idx) {
        if (idx >= this.count || idx < 0) {
            throw new Error("잘못 된 요청 ");
        }
        let prevNode = this.head; // 처음은 전체 노드를 초기화시킴
        if (idx === 0) {
            this.head = prevNode?.next;
        }
        else {
            for (let i = 0; i < idx - 1; i++) {
                prevNode = prevNode?.next;
            }
            prevNode.next = prevNode?.next.next ?? null; // 맨뒤를 위해 null도 반영
        }
        this.count--;
    }
    size() {
        return this.count;
    }
}
let list = new linkedList();
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(1, 99);
list.deleteAt(0);
list.printAll();
