// collectStrings
// 객체를 받아들이고 문자열에 해당하는 모든 값의 배열을 반환하는
// collectStrings라는 함수를 작성합니다.

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

type argObj = { [key: string]: any | argObj };

function collectStrings(obj: argObj) {
  let strArr: string[] = [];

  function recursion(obj: argObj) {
    for (const [_, value] of Object.entries(obj)) {
      if (typeof value === "string") strArr.push(value);
      else if (typeof value === "object" && !Array.isArray(value))
        recursion(value);
    }
  }
  recursion(obj);

  return strArr;
}

const test = collectStrings(obj); // ["foo", "bar", "baz"])
console.log(test);

export {};
