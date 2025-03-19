//완전 기본 재귀
const countRecursion = (n: number) => {
  if (n <= 0) {
    console.log("끝");
    return;
  }
  console.log(n);
  n--;
  countRecursion(n);
};

countRecursion(5);
