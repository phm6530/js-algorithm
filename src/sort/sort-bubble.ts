function bubbleSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swap = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }

    if (!swap) {
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 * 버블정렬은 조건없이 섞여있는 배열을 정리할때 좋음
 * 다만 정렬할게없어도 계쏙 바꾸기떄문에 최적화 구문 넣어주면 매우 효과적임
 */
