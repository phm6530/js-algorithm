// nestedEvenSum
// nestedEvenSum이라는 재귀 함수를 작성하시오.
// 중첩된(nested) 객체를 포함할 수 있는 객체에서 모든 짝수의 합계를 반환하는 함수입니다.

// 포함가능의 number 타입체크해야겟네
type argObj = {
  [key: string]: argObj | number | string | boolean;
};

function nestedEvenSum(obj: argObj) {
  let sum = 0;

  function recursion(obj: argObj) {
    for (let key in obj) {
      const value = obj[key];

      if (typeof value === "number" && value % 2 === 0)
        sum += value; //짝수 + 처리
      else if (typeof value === "object") recursion(value);
    }
  }

  recursion(obj);
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10
