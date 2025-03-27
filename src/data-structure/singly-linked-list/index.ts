class Node {
  constructor(public val: string | null, public next: Node | null = null) {}
}

class SinglyLinkedList {
  constructor(
    public head: Node | null = null, // 연결 리스트의 시작 노드를 참조
    public tail: Node | null = null, // 마지막 노드를 참조 (추가 시 갱신)
    public length: number = 0 // 노드의 개수
  ) {}

  push(val?: string | null) {
    const newNode = new Node(val ?? null);
    if (!this.head) {
      this.head = newNode; // 최상위 노드 참조
      this.tail = this.head; // 첫번째만 최상위 노드 참조
    } else {
      if (this.tail) {
        this.tail.next = newNode; // 이건 참조에 추가해서 Next로 반영
      }
      this.tail = newNode; //이건 참조를 새 인스턴스로 덮어씌워서 맨끝 생성
    }

    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null; // 빈 리스트일 경우 null 반환

    const lastContent = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return lastContent;
    }

    let secondLast = this.head;
    while (secondLast.next !== this.tail) {
      secondLast = secondLast.next!;
    }

    this.tail = secondLast; //두번째 테일을 마지막으로 넣음
    this.tail.next = null; //null처리
    this.length--;
    return lastContent; // 마지막 콘텐츠 반환
  }
}

const list = new SinglyLinkedList();

list.push("1");

console.log(list.pop());
console.log(list);

let obj = {
  value: 1,
  outer: {
    inner: 1,
  },
  number: 1,
};

let copy = { ...obj };
obj.number = 2;
obj.outer.inner = 123;
console.log(copy);

export {};
