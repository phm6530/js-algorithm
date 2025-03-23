// 퀵 정렬..

// 헬퍼함수 필요
function pivot(arr: number[], start = 0, end = arr.length): number {
  const pivotPoint = arr[start]; // 피벗 포인트
  let swapIdx = start;

  for (let i = start + 1; i < end; i++) {
    if (pivotPoint > arr[i]) {
      swapIdx++;
      [arr[i], arr[swapIdx]] = [arr[swapIdx], arr[i]];
    }
  }

  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
}

function quickSort(arr: number[], left = 0, right = arr.length): number[] {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);

    // 왼쪽 부분 정렬
    quickSort(arr, left, pivotIndex);

    // 오른쪽 부분 정렬
    quickSort(arr, pivotIndex + 1, right);
  }

  return arr;
}
const arr: number[] = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(quickSort(arr));

export {};
