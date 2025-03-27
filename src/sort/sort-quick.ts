// 퀵 정렬..

// 헬퍼함수 필요
function pivot(
  arr: number[],
  start = 0, // 기본 시작 인덱스
  end = arr.length - 1 // 기본 종료 인덱스
) {
  const middle = Math.floor((start + end) / 2); // 중앙값 인덱스 계산
  const pivotPoint = arr[middle];

  // 피벗을 시작 위치로 이동
  [arr[middle], arr[start]] = [arr[start], arr[middle]];

  let idx = start + 1;

  for (let i = start + 1; i <= end; i++) {
    if (pivotPoint > arr[i]) {
      [arr[idx], arr[i]] = [arr[i], arr[idx]];
      idx++;
    }
  }

  // 피벗을 올바른 위치로 이동
  [arr[idx - 1], arr[start]] = [arr[start], arr[idx - 1]];

  return idx - 1;
}

const arr: number[] = [28, 41, 4, 11, 16, 1, 40, 14, 36, 37, 42, 18];

function quickSort(arr: number[], left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort(arr));

export {};
