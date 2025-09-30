// import { LinkedList, Node } from "./01.linked-list.js";

// class Stack<T> {
//   constructor(public list: LinkedList<T>) {}
//   pop() {
//     return this.list.deleteAt(-1);
//   }

//   push(data: T) {
//     return this.list.insertAt(this.list.count - 1, data);
//   }

//   clean() {
//     return this.list.clean();
//   }
// }

// const list = new LinkedList<number>();
// list.insertAt(0, 0);
// list.insertAt(1, 1);
// list.insertAt(2, 2);
// list.insertAt(0, 99);
// list.insertAt(1, 1000);

// const confirms = list.print();
// console.log(confirms);

// const stack = new Stack<number>(list);
// stack.push(2);
// const confirmss = list.print();
// console.log(confirmss);

// function solution(s, skip, index) {
//   const skipSet = new Set(skip);

//   const validChars = [];
//   for (let i = 0; i < 26; i++) {
//     const char = String.fromCharCode(97 + i);
//     if (!skipSet.has(char)) {
//       validChars.push(char);
//     }
//   }

//   const charToIndex = new Map();
//   validChars.forEach((char, idx) => {
//     charToIndex.set(char, idx);
//   });

//   return s
//     .split("")
//     .map((char) => {
//       const currentIndex = charToIndex.get(char);
//       const newIndex = (currentIndex + index) % validChars.length;
//       return validChars[newIndex];
//     })
//     .join("");
// }
// function solution(s: string) {
//   let arr = [];

//   const chars = s.split("").map((char) => char);

//   let target = "";
//   let count = 0;

//   chars.forEach((char, idx) => {
//     const first = target.slice(0, 1);
//     const length = target.split("").length;
//     const same = Math.max(0, length - count);

//     if (idx && count === same) {
//       arr.push(target);
//       target = char;
//       count = 1;
//       return;
//     } else if (target.length === 0 || first === char) {
//       count++;
//     }
//     target += char;
//   });

//   if (target.length > 0) arr.push(target);

//   return arr.length;
// }
// solution("abracadabra");

function solution(s: string) {
  let balance = 0;
  let i = 0;
  const arr = s.split("");

  while (arr.length > i) {
    if (balance < 0) {
      return false;
    }
    arr[i] === "(" ? balance++ : balance--;
    i++;
  }
  return balance === 0 ? true : false;
}
