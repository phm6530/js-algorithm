function selectSort(arr: number[]) {
  for (let cur = 0; cur < arr.length; cur++) {
    let minIdx = cur; //최소를 담는다
    for (let j = cur + 1; j < arr.length; j++) {
      if (arr[cur] > arr[j]) {
        minIdx = j;
      }
    }
    [arr[cur], arr[minIdx]] = [arr[minIdx], arr[cur]];
  }

  return arr;
}

console.log(selectSort([1, 6, 3, 7, 2, 10]));
