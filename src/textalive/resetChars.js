/**
 * 歌詞表示をリセットする
 * Reset lyrics view
 */
const phraseEl = document.querySelector("#phrase p");


export default function resetChars(c, textContainer) {
  c = null;
  while (textContainer.firstChild)
    textContainer.removeChild(textContainer.firstChild);
    phraseEl.textContent = "";
    console.log("resetChar");
  return c;
}