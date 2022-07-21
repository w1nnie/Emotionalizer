import { Player, stringToDataUrl } from "textalive-app-api";
import loadSong from "./loadSong.js";
import resetChars from "./resetChars.js";
import newChar from "./newChar.js";
// import newVowel from "./newVowel.js";
import setUI from "./setUI.js";



// TextAlive Player を初期化
const player = new Player({
  // トークンは https://developer.textalive.jp/profile で取得したものを使う
  app: { token: "test" },
  mediaElement: document.querySelector("#media"),
  mediaBannerPosition: "bottom right",
  valenceArousalEnabled: true

  // オプション一覧
  // https://developer.textalive.jp/packages/textalive-app-api/interfaces/playeroptions.html
});

const overlay = document.querySelector("#overlay");
const bar = document.querySelector("#bar");
const textContainer = document.querySelector("#text");
const seekbar = document.querySelector("#seekbar");
const paintedSeekbar = seekbar.querySelector("div");
const currentLyric = document.querySelector("#currentLyric");
const phraseEl = document.querySelector("#phrase p");
const playImg = document.querySelector("#playImg");

let c;
let lyrics = "";
let lyricsAlley = [];
let count = 0;
let playCount = 0;

player.addListener({
  /* APIの準備ができたら呼ばれる */
  onAppReady(app) {
    lyrics = loadSong(app, player);
    lyricsAlley = lyrics.split(',')
  },

  /* 楽曲が変わったら呼ばれる */
  onAppMediaChange() {
    console.log("onAppMediaChange");
    // 画面表示をリセット
    overlay.className = "";
    bar.className = "";
    count = 0;
    c = resetChars(c,textContainer);
  },

  /* 楽曲情報が取れたら呼ばれる */
  onVideoReady(video) {
    console.log("onVideoReady")
    // 楽曲情報を表示
    document.querySelector("#artist span").textContent =
      player.data.song.artist.name;
    document.querySelector("#song span").textContent = player.data.song.name;

    // 最後に表示した文字の情報をリセット
    c = null;
  },

  /* 再生コントロールができるようになったら呼ばれる */
  onTimerReady() {
    console.log("onTimerReady");
    overlay.className = "disabled";
    document.querySelector("#control > #play").className = "";
    document.querySelector("#control > #stop").className = "";
    

  },

  /* 再生位置の情報が更新されたら呼ばれる */
  onTimeUpdate(position) {
    // シークバーの表示を更新
    paintedSeekbar.style.width = `${
      parseInt((position * 1000) / player.video.duration) / 10
    }%`;
    console.log(position);

    // 歌詞情報がなければこれで処理を終わる
    if (!player.video.firstChar) {
      return;
    }

    // 巻き戻っていたら歌詞表示をリセットする
    if (c && c.startTime > position + 1000) {
      count = 0;
      c = resetChars(c, textContainer);
    }

    // 現在の感情値を取得
    let currentVA = player.getValenceArousal(player.timer.position);
    document.querySelector("#valence").textContent = Math.round(1000 * currentVA.v) / 1000;
    document.querySelector("#arousal").textContent = Math.round(1000 * currentVA.a) / 1000;

    // 250ms先に発声される文字を取得
    let current = c || player.video.firstChar;
    
    while (current && current.startTime < position + 250) {
      // 新しい文字が発声されようとしている
      if (c !== current) {
        // newChar(current, player, textContainer);
        // console.log(lyricsAlley[count]);
        currentLyric.textContent = lyricsAlley[count];
        count = count + 1;
        c = current;
      }
      current = current.next;
    }
  },

  /* 楽曲の再生が始まったら呼ばれる */
  onPlay() {
    let p = player.video.firstPhrase;
    while (p && p.next) {
      p.animate = animatePhrase;
      p = p.next;
    }

  },

  /* 楽曲の再生が止まったら呼ばれる */
  onPause() {
  }
});

function animatePhrase(now, unit) {
  if(unit.contains(now+500)) {
    phraseEl.textContent = unit.text;
  }
}

function playButton() {
  playCount = playCount + 1;
  if (playCount % 2 == 1) {
    playImg.style.opacity = 0;
    playImg.style.pointerEvents = "none";
  } else {
    playImg.style.opacity = 1;
    playImg.style.pointerEvents = "auto";
  }
}
function stopButton() {
  count = 0;
  phraseEl.textContent = "";
  playCount = 0;
  playImg.style.opacity = 1;
  playImg.style.pointerEvents = "auto";
}

window.playButton = playButton;
window.stopButton = stopButton;

setUI(player, c, textContainer, seekbar);

