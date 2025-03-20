isPalindrome;
// 전달된 문자열이 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인 경우 true 를
// 반환하는 isPalindrome이라는 재귀(recursive) 함수를 작성하시오.
// 팔린드롬이 아닐 경우 false 를 반환합니다

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false

function isPalindrome(str: string) {
  function recursion(leftP: number, rightP: number) {
    if (str[leftP] !== str[rightP]) return false;
    if (leftP >= rightP) return true; // right 가 순회완료되면
    // 포인터 변형
    return recursion(leftP + 1, rightP - 1);
  }
  return recursion(0, str.length - 1);
}
