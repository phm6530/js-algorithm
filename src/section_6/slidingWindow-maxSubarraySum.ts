// Sliding Window - maxSubarraySum
// 정수의 배열과 숫자가 주어졌을 때,
// 함수에 전달된 숫자의 길이를 가진 하위 배열의 최대 합을 구하는 maxSubarraySum이라는 함수를 작성하세요.
// 하위 배열은 원래 배열의 연속적인 요소로 구성되어야 한다는 점에 유의하세요.
// 아래 첫 번째 예제에서 [100, 200, 300]은 원래 배열의 하위 배열이지만 [100, 300]은 그렇지 않습니다.
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(arr: number[], length: number) {
  if (arr.length < length) return null;

  let max = 0;
  let sum = 0;
  let idx = 0;

  while (idx + length <= arr.length) {
    //  Inital Max
    if (idx === 0) {
      for (let i = 0; i < length; i++) sum += arr[i];
      max = sum;
    } else {
      sum -= arr[idx - 1];
      sum += arr[idx + length - 1];
      max = max > sum ? max : sum;
    }
    idx++;
  }
  return max;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
