type Student = {
  name: string;
  score: number;
};

const arr: Student[] = [
  { name: "jbhn", score: 90 },
  { name: "amy", score: 95 },
  { name: "jab", score: 90 },
];

arr.sort((a, b) => {
  if (b.score === a.score) {
    function charDiff(a: string, b: string): number {
      return a.charCodeAt(0) === b.charCodeAt(0)
        ? charDiff(a.slice(1), b.slice(1))
        : a.charCodeAt(0) - b.charCodeAt(0);
    }

    return charDiff(a.name, b.name);
  }
  return b.score - a.score;
});
// 👉 정렬 결과:
// score 기준 내림차순 → 같으면 name 기준 오름차순
