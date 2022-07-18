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
let b, c;
let lyrics = "";
let lyricsAlley = [];
let count = 0;

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
    document.querySelector("#control > a#play").className = "";
    document.querySelector("#control > a#stop").className = "";
  },

  /* 再生位置の情報が更新されたら呼ばれる */
  onTimeUpdate(position) {
    // シークバーの表示を更新
    paintedSeekbar.style.width = `${
      parseInt((position * 1000) / player.video.duration) / 10
    }%`;

    // 現在のビート情報を取得
    let beat = player.findBeat(position);
    if (b !== beat) {
      if (beat) {
        requestAnimationFrame(() => {
          bar.className = "active";
          requestAnimationFrame(() => {
            bar.className = "active beat";
          });
        });
      }
      b = beat;
    }
    // console.log(b.startTime);

    // 歌詞情報がなければこれで処理を終わる
    if (!player.video.firstChar) {
      return;
    }

    // 巻き戻っていたら歌詞表示をリセットする
    if (c && c.startTime > position + 1000) {
      c = resetChars(c, textContainer);
    }

    // 現在の感情値を取得
    let currentVA = player.getValenceArousal(player.timer.position);
    document.querySelector("#varadius").textContent = Math.round(Math.sqrt(Math.pow(100*currentVA.v, 2) + Math.pow(100*currentVA.a, 2)));
    document.querySelector("#vatheta").textContent = Math.round(Math.atan2(currentVA.a, currentVA.v) * 180 / Math.PI);

    // 500ms先に発声される文字を取得
    let current = c || player.video.firstChar;
    
    while (current && current.startTime < position + 250) {
      // 新しい文字が発声されようとしている
      if (c !== current) {
        newChar(current, player, textContainer);
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
    const a = document.querySelector("#control > a#play");
    while (a.firstChild) a.removeChild(a.firstChild);
    a.appendChild(document.createTextNode("a"));
  },

  /* 楽曲の再生が止まったら呼ばれる */
  onPause() {
    const a = document.querySelector("#control > a#play");
    while (a.firstChild) a.removeChild(a.firstChild);
    a.appendChild(document.createTextNode("b"));
  }
});

setUI(player, bar, c, textContainer, seekbar);

