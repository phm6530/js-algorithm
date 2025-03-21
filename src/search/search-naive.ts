//연속되면 인덱스 반환하면됨,

function naiveSearch(texts: string, findText: string) {
  for (let i = 0; i <= texts.length - findText.length; i++) {
    for (let j = 0; j < findText.length; j++) {
      if (!(texts[i + j] === findText[j])) break;
      if (j === findText.length - 1) return i;
    }
  }

  return false; // 아예없으면  false 반환
}

console.log(naiveSearch("dabc", "abc"));
