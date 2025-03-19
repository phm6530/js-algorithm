// Sliding Window - findLongestSubstring
// 문자열을 받아 모든 고유 문자가 포함된 가장 긴 하위 문자열의 길이를 반환하는
// findLongestSubstring이라는 함수를 작성하세요.
// Time Complexity - O(n)

function findLongestSubstring(str: string) {
  let maxLengths = 0;
  let left = 0;
  let only = new Set(); // O(1)로 찾기위해서

  //right의 길이다 다차면 종료
  for (let r = 0; r < str.length; r++) {
    //현재 값이 존재하면 왼쪽부터 차근 삭제함
    while (only.has(str[r])) {
      only.delete(str[left]);
      left++;
    }
    only.add(str[r]); //자료 추가
    maxLengths = Math.max(maxLengths, r - left + 1); // 길이 갱신
  }
  return maxLengths;
}

findLongestSubstring(""); // 0
console.log(findLongestSubstring("rithmschool"));
findLongestSubstring("rithmschool"); // 7
findLongestSubstring("thisisawesome"); // 6
findLongestSubstring("thecatinthehat"); // 7
findLongestSubstring("bbbbbb"); // 1
findLongestSubstring("longestsubstring"); // 8
findLongestSubstring("thisishowwedoit"); // 6
