class hashTable {
  constructor(private dic: number = 8) {}

  // Hash Table
  hash(key: string) {
    let total = 0;
    for (const char of key) {
      const val = char.charCodeAt(0) - 96;
      total = (total + val) % this.dic;
    }
    return total;
  }
}

const ht = new hashTable();
console.log(ht.hash("hashtable"));
