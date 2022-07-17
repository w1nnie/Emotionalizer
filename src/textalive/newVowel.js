export default function newVowel(){
    let vowel = [];
    convertCSVtoArray();
}

function convertCSVtoArray(){
    let request = new XMLHttpRequest();
    request.open("GET", filename, false);
    try {
        request.send(null);
    } catch (err) {
        console.log(err)
    }
    console.log(request.responseText);
}