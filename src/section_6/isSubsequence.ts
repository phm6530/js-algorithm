// 다중 포인터 - isSubsequence
// 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는
// isSubsequence라는 함수를 작성합니다. 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고
// 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.

// 솔루션에는 최소한 다음과 같은 복잡성이 있어야 합니다:

// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(argFirst: string, argSecond: string) {
  let firstIdx = 0;
  let secondIdx = 0;

  while (secondIdx < argSecond.length) {
    if (argFirst[firstIdx] === argSecond[secondIdx]) firstIdx++;
    if (firstIdx === argFirst.length) return true;
    secondIdx++;
  }

  return false;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
