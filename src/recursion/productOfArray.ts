// 숫자 배열을 받아 모든 숫자의 곱을 반환하는 productOfArray라는 함수를 작성하시오.

function productOfArray(arr: number[]): number {
  if (arr.length === 1) return arr[0];
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
