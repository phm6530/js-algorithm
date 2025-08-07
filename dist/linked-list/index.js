class Node {
    data;
    next;
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
class linkedList {
    head;
    count;
    constructor(head = null, count = 0) {
        this.head = head;
        this.count = count;
    }
    size() {
        return this.count;
    }
    printAll() {
        let arr = [];
        let curNode = this.head;
        while (!!curNode) {
            arr.push(curNode.data);
            curNode = curNode.next;
        }
        return arr;
    }
    insertLast(data) {
        this.insertNode(this.count, data);
    }
    insertNode(idx, data) {
        if (idx < 0 || data === null) {
            throw new Error("누락된 데이터가 있습니다.");
        }
        const newNode = new Node(data);
        // 초기갈음 ok
        if (idx === 0) {
            newNode.next = this.head;
            this.head = newNode;
        }
        else {
            let node = this.head;
            //연결할게필요함 - 중간삽입  ok
            for (let i = 0; i < idx - 1; i++) {
                node = node.next;
            }
            newNode.next = node.next;
            node.next = newNode;
        }
        this.count++;
    }
    // 삭제
    deleteNode(idx) {
        if (idx < 0 || idx >= this.count) {
            throw new Error("값이 잘못된듯");
        }
        let prev = this.head;
        let deleteNode = null;
        if (idx === 0) {
            this.head = this.head.next; // 다음꺼로 초기화 해버림
            deleteNode = prev;
        }
        else {
            for (let i = 0; i < idx - 1; i++) {
                prev = prev.next;
            }
            deleteNode = prev?.next;
            prev.next = prev?.next?.next ?? null;
        }
        this.count--;
        return deleteNode;
    }
    deleteLast() {
        return this.deleteNode(this.count - 1);
    }
    getNode(idx) {
        if (idx < 0 || this.count <= idx) {
            throw new Error("잘못 입력함 ");
        }
        let curNode = this.head;
        for (let i = 0; i < idx; i++) {
            curNode = curNode.next;
        }
        return curNode;
    }
}
export { linkedList };
