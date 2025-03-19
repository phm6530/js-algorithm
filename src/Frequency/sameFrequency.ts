// 빈도수 세기 - sameFrequency
// sameFrequency라는 함수를 작성하세요. 두 개의 양의 정수가 주어졌을 때, 두 숫자의 자릿수가 같은 빈도를 갖는지 구합니다.
// 여러분의 솔루션은 반드시 다음과 같은 복잡성을 가져야 합니다.:

// Time: O(N)
// 예시 인풋:

function sameFrequency(a: number, b: number) {
  const first = a.toString();
  const second = b.toString();

  if (first.length !== second.length) {
    return false;
  }

  let hashMap: { [key: string]: number } = {};

  for (let i = 0; i < first.length; i++) {
    hashMap[first[i]] = (hashMap[first[i]] ?? 0) + 1;
  }

  for (let i = 0; i < second.length; i++) {
    if (!hashMap[second[i]]) {
      return false;
    }
    hashMap[second[i]] = hashMap[second[i]] - 1;
  }

  return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
