function SelectSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i; //초기는 나 자신
    let swap = false;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) {
        minIdx = j;
        swap = true;
      }
    }
    if (!swap) break;
    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

console.log(SelectSort([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
