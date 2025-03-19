// 빈도수 세기- validAnagram
// 두 개의 문자열이 주어졌을 때,
// 두 번째 문자열이 첫 번째 문자열의 애너그램인지 확인하는 함수를 작성합니다.
// 애너그램은 다른 글자의 글자를 재배열하여 형성된 단어, 구 또는 이름입니다. (예시: cinema -> iceman)
//Time Complexity - O(n)

function validAnagram(arg1: string, arg2: string) {
  // 없으면 false
  if (arg1.length !== arg2.length) {
    return false;
  }

  let hashMap: { [key: string]: number } = {};

  //  hashMap 생성
  for (let i = 0; i < arg1.length; i++) {
    hashMap[arg1[i]] = (hashMap[arg1[i]] || 0) + 1; // 갯수 해시맵
  }

  //
  for (let i = 0; i < arg2.length; i++) {
    if (!hashMap[arg2[i]]) {
      return false;
    }

    hashMap[arg2[i]] = hashMap[arg2[i]] - 1;
  }
  return true;
}

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
//안내: 문자열에 소문자만 포함되어 있다고 가정해도 됩니다.
