// 배열과 콜백을 받아들이는 someRecursive 라는 재귀(recursive) 함수를 작성하시오.
// 이 함수는 배열의 단일 값이 콜백에 전달될 때 true를 반환하면 true를 반환합니다.
// 그렇지 않으면 false를 반환합니다.

// SAMPLE INPUT / OUTPUT

function someRecursive(arr: number[], cb: (val: number) => boolean) {
  function recursive(arrArg: number[]) {
    if (arrArg.length === 0) return false;
    if (cb(arrArg[0])) return true; //문제없으면 true
    return recursive(arrArg.slice(1));
  }
  return recursive(arr);
}

const isOdd = (val: number) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
someRecursive([4, 6, 8], (val) => val > 10); // false
