export class Node<T> {
  constructor(
    public data: T,
    public next: Node<T> | null = null,
    public prev: Node<T> | null = null
  ) {}
}

export class LinkedList<T> {
  constructor(
    private head: Node<T> | null = null,
    private tail: Node<T> | null = null,
    public count = 0
  ) {}
  insertAt(idx: number, data: T) {
    const newNode = new Node(data);

    if (idx === 0) {
      newNode.next = this.head;

      if (this.head != null) {
        this.head.prev = newNode;
      }
      this.head = newNode;
    } else if (idx === this.count) {
      newNode.next = null;
      newNode.prev = this.tail;

      if (this.tail) {
        this.tail.next = newNode;
      }
    } else {
      let node = this.head;

      for (let i = 0; i < idx - 1; i++) {
        if (!!node && "next" in node) {
          node = node.next;
        }
      }

      newNode.next = node!.next;
      node!.next = newNode;
      newNode.prev = node;

      // 다음께 존재한다면 현재 node를 다음 prev에 반영
      if (newNode.next) {
        newNode.next.prev = newNode;
      }
    }

    if (newNode.next === null) {
      this.tail = newNode;
    }

    this.count++;
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

  getNodeAt(idx: number): Node<T> {
    const nidx = idx < 0 ? this.count + idx : idx;
    if (nidx < 0 || idx >= this.count) {
      throw new Error("범위가 아님");
    }
    let node = this.head;

    for (let i = 0; i < nidx; i++) {
      node = node!.next;
    }

    return node as Node<T>;
  }

  clean() {
    this.head = null;
    this.count = 0;
  }

  deleteAt(idx: number) {
    if (this.count === 0) throw new Error("empty list");

    // ✅ (추가) 음수 인덱스 지원 및 정규화
    const nidx = idx < 0 ? this.count + idx : idx;
    console.log(nidx);

    if (nidx < 0 || nidx >= this.count) throw new Error("out of range");

    let deleteNode: Node<T> | null = null;

    if (nidx === 0) {
      deleteNode = this.head;
      this.head = this.head?.next ?? null;
      if (!this.head) this.tail = null;
      else this.head.prev = null;
    } else if (nidx === this.count - 1) {
      deleteNode = this.tail;
      if (this.tail?.prev) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        this.head = null;
        this.tail = null;
      }
    } else {
      // ✅ (핵심) 중간 삭제는 양방향 모두 갱신
      const target = this.getNodeAt(nidx); // 삭제 대상
      const prev = target.prev!; // 존재 보장
      const next = target.next; // null 가능

      prev.next = next;
      if (next) next.prev = prev;
      else this.tail = prev;

      deleteNode = target;
    }

    this.count--;
    if (deleteNode) {
      deleteNode.next = null;
      deleteNode.prev = null;
    }

    return deleteNode;
    // (선택) 고아 처리: 디버깅 편의
  }
}

const list = new LinkedList();
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
const deleteItem = list.deleteAt(-1);
if (deleteItem) deleteItem.next = new Node<number>(1);
console.log(deleteItem);
