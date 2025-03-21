function insertSort(arr: number[]) {
  for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i + 1]; // 항상 바꿔야 할 값을 temp에 일단 넣고
    let cur = i; // 현재 idx 반영

    while (cur >= 0) {
      if (arr[cur] > temp) {
        arr[cur + 1] = arr[cur];
        cur--;
      } else {
        break;
      }
    }

    arr[cur + 1] = temp; // 여기서만 삽입!
  }

  return arr;
}

console.log(insertSort([10, 1, 2]));
