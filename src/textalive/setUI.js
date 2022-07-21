import resetChars from "./resetChars.js";

export default function setUI(player,  c, textContainer, seekbar){

    /* 再生・一時停止ボタン */
    document.querySelector("#control > #play").addEventListener("click", (e) => {
    e.preventDefault();
    if (player) {
        if (player.isPlaying) {
        player.requestPause();
        } else {
        player.requestPlay();
        }
    }
    return false;
    });

    /* 停止ボタン */
    document.querySelector("#control > #stop").addEventListener("click", (e) => {
    e.preventDefault();
    if (player) {
        player.requestStop();

        // 再生を停止したら画面表示をリセットする
        c = resetChars(c, textContainer);
    }
    return false;
    });

    /* シークバー */
    seekbar.addEventListener("click", (e) => {
    e.preventDefault();
    if (player) {
        player.requestMediaSeek(
        (player.video.duration * e.offsetX) / seekbar.clientWidth
        );
    }
    return false;
    });

}