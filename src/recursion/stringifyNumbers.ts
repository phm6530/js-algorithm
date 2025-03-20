// stringifyNumbers
// 객체를 받아 숫자인 모든 값을 찾아
// 문자열로 변환하는 StringifyNumbers라는 함수를 작성하시오. 재귀(Recursion) 함수는
// 이 문제를 해결하는 좋은 방법이 될 것입니다!

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

type argObj = {
  [key: string]: any;
};
function stringifyNumbers(obj: argObj): argObj {
  let newObj: argObj = {}; // 새로운 객체 생성

  for (const key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString(); // 숫자를 문자열로 변환
    } else if (typeof obj[key] === "object") {
      newObj[key] = stringifyNumbers(obj[key]); // 재귀적으로 처리
    } else {
      newObj[key] = obj[key]; // 변경하지 않는 값은 그대로 복사
    }
  }

  return newObj;
}
console.log(stringifyNumbers(obj));

export {};
/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
export {};
