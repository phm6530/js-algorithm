// capitalizeFirst
// capitalizeFirst라는 재귀 함수를 작성하시오.
// 문자열 배열이 주어지면 배열에 있는 각 문자열의 첫 글자를 대문자로 바꿔주는 함수입니다.

//이건 굳이 재귀?할필요없다 느껴짐...
// function capitalizeFirst(arg: string[]) {
//   return arg.map((e) => {
//     return e[0].toUpperCase() + e.slice(1);
//   });
// }

// 개인적으로 클로저 선호함 재귀에서 concat은가독성 구림
function capitalizeFirst(arg: string[]) {
  let result: string[] = [];

  function recusion(arr: string[]) {
    if (arr.length === 0) return []; // 종료 조건
    result.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    return recusion(arr.slice(1));
  }

  recusion(arg);
  return result;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
