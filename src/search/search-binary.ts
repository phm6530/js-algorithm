// Binary Search 연습
// 정렬된 배열과 값을 받아들이고 값이 존재하는 경우 그 인덱스를 반환하는 binarySearch라는 함수를 작성합니다.
//
// 값이 존재하지 않으면 -1을 반환합니다.

// 이 알고리즘은 linearSearch 보다 더 효율적일 것입니다.
// 구현 방법은 여기에서 확인할 수 있습니다.

function binarySearch(arr: number[], findNum: number) {
  let low = 0;
  let high = arr.length - 1;

  //   if (arr[low] > findNum || arr[high] < findNum) return -1;

  while (low <= high) {
    const midIdx = Math.floor((low + high) / 2);
    if (findNum === arr[midIdx]) return midIdx;
    arr[midIdx] < findNum ? (low = midIdx + 1) : (high = midIdx - 1);
  }

  return -1;
}

// const tttt = binarySearch([1, 2, 3, 4, 5], 5); // 4
// console.log("????", tttt);

// const test = binarySearch([1, 2, 3, 4, 5], 3); // 2
// console.log(test);

// const tts = binarySearch([1, 2, 3, 4, 5], 6); // -1
// console.log(tts);
// binarySearch(
//   [
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//     99,
//   ],
//   10
// ); // 2
// binarySearch(
//   [
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//     99,
//   ],
//   95
// ); // 16
// binarySearch(
//   [
//     5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//     99,
//   ],
//   100
// ); // -1
