class hashTable<K, V> {
  constructor(
    private dic: number = 8,
    private keyMap: Array<Array<[K, V]>> = []
  ) {
    this.keyMap = new Array(dic);
  }

  set(key: K, value: V) {
    let index = this.hash(key);
    if (!this.keyMap[index!]) {
      this.keyMap[index!] = [];
    }
    this.keyMap[index!]!.push([key, value]);
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
      const val = char!.charCodeAt(0) - 96;
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

ht.set("test", "test");
ht.set("testzzf", "testzff");
ht.set("testzzf", "tetest");
ht.set("ㅅㅂ", "나 반환");
const get = ht.get("ㅅㅂ");
console.log(get);
