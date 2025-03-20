// flatten
// 배열의 배열을 받아들이고 모든 값이 평활화(flattened)된 새 배열을 반환하는
// flatten이라는 재귀(recursive ) 함수를 작성합니다.

type RecursionArg = number | RecursionArg[];

function flatten(arg: RecursionArg[]) {
  let result: number[] = [];
  // 재귀로 평탄화
  function recursive(arr: RecursionArg[]) {
    arr.forEach((e) => {
      if (typeof e === "number") result.push(e);
      else if (Array.isArray(e)) recursive(e);
      else {
        return null as never;
      }
    });
  }
  recursive(arg);
  return result;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
