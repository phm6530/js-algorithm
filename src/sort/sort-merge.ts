// 합병정렬은 근데 O(N log^N)인데 넘어오는 배열이 이미 정렬이 되어있는 상태있어야함

function merge(...arrs: number[][]) {
  let result: number[] = [];

  let left = 0;
  let right = 0;

  while (left < arrs[0].length && right < arrs[1].length) {
    if (arrs[0][left] > arrs[1][right]) {
      result.push(arrs[0][left++]);
    } else {
      result.push(arrs[1][right++]);
    }
  }

  //  left가 아직  마무리안지었을때 감안
  while (left < arrs[0].length) {
    result.push(arrs[0][left++]);
  }

  //  right가 아직 마무리안지었을때 감안
  while (right < arrs[1].length) {
    result.push(arrs[1][right++]);
  }
  return result;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([2, 14, 100, 99, 6, 18]));

// console.log(mergeSort([1, 10, 50], [2, 14, 99, 100]));
