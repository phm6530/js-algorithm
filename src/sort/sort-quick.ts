// 퀵 정렬..

// 헬퍼함수 필요
function pivot(arr: number[], start = 0, end = arr.length + 1) {
  const pivotPoint = arr[start]; // 피벗 포인트
  let swapIdx = start;

  for (let i = 1; i < arr.length; i++) {
    if (pivotPoint > arr[i]) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return arr;
}

function quickSort(arr: number[], start?: number, end?: number) {}

const arr: number[] = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(pivot(arr, 0, arr.length - 1));

export {};
