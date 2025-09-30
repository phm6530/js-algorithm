class hashTable<K extends number, V> {
  constructor(
    private dic: number = 8,
    private keyMap: Array<Array<[K, V]>> = [],
    private insertArr: Array<[K, V]> = []
  ) {
    this.keyMap = new Array(dic);
  }

  values() {
    let arr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i]!.length; j++) {
          arr.push(this.keyMap[i]![j]![1]);
        }
      }
    }
    console.log(this.insertArr);
    return arr;
  }

  //존재하는지 체크
  // private _isExistVal(val: K | V) {
  //   for (let i = 0; i < this.keyMap.length; i++) {
  //     if (this.keyMap[i]) {
  //       for (let j = 0; j < this.keyMap[i]!.length; j++) {
  //         if (this.keyMap[i]![j]![0] === val) return true;
  //       }
  //     }
  //   }
  //   return undefined;
  // }

  set(key: K, value: V) {
    let index = this.hash(key);

    if (!this.keyMap[index!]) {
      this.keyMap[index!] = [];
    }

    for (let pair of this.keyMap[index]!) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }

    const pair: [K, V] = [key, value];
    this.keyMap[index!]!.push(pair);
    this.insertArr.push(pair);
  }

  get(key: K) {
    const idx = this.hash(key);
    if (this.keyMap[idx]) {
      for (let i = 0; i < this.keyMap[idx].length; i++) {
        const pair = this.keyMap[idx][i];
        if (pair && pair[0] === key) {
          return pair[1];
        }
      }
    }

    return undefined;
  }

  // Hash Table
  hash(key: K) {
    if (key === null || key === undefined) {
      throw new Error("key 누락 되었습니다.");
    }

    const string = key.toString();
    let total = 0;

    for (let i = 0; i < Math.min(string.length, 100); i++) {
      const char = string[i];
      const val = char!.charCodeAt(0);
      /**
       * 너무 작으면 분포 효과가 약하고, 너무 크면 연산 비용이 늘어나서 비효율적.
       * 31 소수 쓰는 이유
       */
      total = (total * 31 + val) % this.dic;
    }
    return total;
  }
}

const ht = new hashTable();

ht.set(0, "1등");
ht.set(1, "2등");
ht.set(2, "3등");
ht.set(3, "4등");
ht.set(1, "5등"); //중복

console.log(ht.values());

const obj = { 1: "test", 2: "test", 3: { deep: "value" } };
const newObj = { ...obj }; //얕은복사
newObj[1] = "ddd";
newObj[3].deep = "same";

newObj[1] === obj[1]; // false
newObj[3].deep === obj[3].deep; // true
