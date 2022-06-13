export default function loadSong(app, player){
    console.log("onAppReady");
    if (app.managed) {
    document.querySelector("#control").className = "disabled";
    }
    if (!app.songUrl) {
    document.querySelector("#media").className = "disabled";

    // Loading Memories / せきこみごはん feat. 初音ミク
    player.createFromSongUrl("https://piapro.jp/t/RoPB/20220122172830");

    convertCSVtoArray();


    // 青に溶けた風船 / シアン・キノ feat. 初音ミク
    // player.createFromSongUrl("https://piapro.jp/t/9cSd/20220205030039");

    // 歌の欠片と / imo feat. MEIKO
    // player.createFromSongUrl("https://piapro.jp/t/Yvi-/20220207132910");

    // 未完のストーリー / 加賀（ネギシャワーP） feat. 初音ミク
    // player.createFromSongUrl("https://piapro.jp/t/ehtN/20220207101534");

    // みはるかす / ねこむら（cat nap） feat. 初音ミク
    // player.createFromSongUrl("https://piapro.jp/t/QtjE/20220207164031");

    // fear / 201 feat. 初音ミク
    // player.createFromSongUrl("https://piapro.jp/t/GqT2/20220129182012");
    }
}

function convertCSVtoArray(){
    let request = new XMLHttpRequest();
    let filename = "../assets/loading_memories_lyrics.csv";
    request.open("GET", filename, true);
    request.send(null);
    request.onload = () => {
        console.log(request.responseText);
    }
  }