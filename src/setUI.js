import resetChars from "./resetChars.js";

export default function setUI(player, bar, c, textContainer, seekbar){

    /* 再生・一時停止ボタン */
    document.querySelector("#control > a#play").addEventListener("click", (e) => {
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
    document.querySelector("#control > a#stop").addEventListener("click", (e) => {
    e.preventDefault();
    if (player) {
        player.requestStop();

        // 再生を停止したら画面表示をリセットする
        bar.className = "";
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