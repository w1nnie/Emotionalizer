/**
 * 歌詞表示をリセットする
 * Reset lyrics view
 */
export default function resetChars(c, textContainer) {
  c = null;
  while (textContainer.firstChild)
    textContainer.removeChild(textContainer.firstChild);
    console.log("resetChar");
  return c;
}