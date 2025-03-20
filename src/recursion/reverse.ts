// for문으로는 O(n)
// 재귀로도 O(n)
function reverse(str: string) {
  let resultStr: string[] = []; // 결과

  function recursion(s: string) {
    if (s.length === 0) return; //길이가 없으며 Return 시켜버리기
    resultStr.push(s[s.length - 1]);
    recursion(s.slice(0, s.length - 1));
  }

  recursion(str);
  return resultStr.join("");
}

console.log(reverse("awesome")); // 'emosewa'
// reverse("rithmschool"); // 'loohcsmhtir'
