function gameGridCanvasSet(){
    gameGridCanvas = document.getElementById('gameGridCanvas');
    ctx = gameGridCanvas.getContext('2d');

    dpr = window.devicePixelRatio;


    gameGridCanvas.width = 300 * dpr;
    gameGridCanvas.height = 600 * dpr;

    ctx.strokeStyle = 'rgb(60, 60, 60)';

    for(var i = 1; i <= 9; i++){
        ctx.beginPath();
        ctx.moveTo(30 * i * dpr, 0);
        ctx.lineTo(30 * i * dpr, 600 * dpr);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(30 * i * dpr, 0);
        ctx.lineTo(30 * i * dpr, 600 * dpr);
        ctx.stroke();
    }

    for(var i = 1; i <= 19; i++){
        ctx.beginPath();
        ctx.moveTo(0, 30 * i * dpr);
        ctx.lineTo(300 * dpr, 30 * i * dpr);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, 30 * i * dpr);
        ctx.lineTo(300 * dpr, 30 * i * dpr);
        ctx.stroke();
    }
}
    
gameGridCanvasSet();



const SONGS = [
    "A_Fool's_Theme_-_Brian_Bolger.mp3",
    "Back_To_The_Future_Jellyfish_-_NoMBe.mp3",
    "Drown_Me_Out_-_VYEN.mp3",
    "Lazy_Walk_-_Cheel.mp3",
    "Pangelic_-_The_Mini_Vandals.mp3",
    "Poolside_Radio_-_Dyalla.mp3",
    "Sunday_Rain_-_Cheel.mp3",
    "Sunset_Dream_-_Cheel.mp3",
    "Wehrmut_-_Godmode.mp3",
    "Yoga_Style_-_Chris Haugen.mp3"
];

var bgmBtnPlay = document.getElementById('bgmPlay');
var bgmBtnLoop = document.getElementById('bgmLoop');
var bgmTitle = document.getElementById('bgmTitle');

var prefix = "./audio/";
var bgm = new Audio(prefix + SONGS[0]);
bgm.volume = 0.1;
bgm.currentTime = 0;
bgm.src = prefix + SONGS[0];

var nowPlaying = 0;
var isPlaying = false;
var isLoop = false;

function bgmTitleSet(){
    bgmTitle.innerHTML = SONGS[nowPlaying].split('_').join(' ');
}
bgmTitleSet();

function bgmBack(){
    nowPlaying = (nowPlaying - 1 + SONGS.length) % SONGS.length;
    bgm.src = prefix + SONGS[nowPlaying];
    bgm.currentTime = 0;
    if(isPlaying){
        bgm.play();
    }
    bgmTitleSet();
}

function bgmPlayPause(){
    if(isPlaying == true){
        //pause
        bgm.pause();
        isPlaying = false;
        bgmBtnPlay.id = "bgmPlay";
    }else{
        //play
        bgm.play();
        isPlaying = true;
        bgmBtnPlay.id = "bgmPause";
    }
}

function bgmNext(){
    nowPlaying = (nowPlaying + 1) % SONGS.length;
    bgm.src = prefix + SONGS[nowPlaying];
    bgm.currentTime = 0;
    if(isPlaying){
        bgm.play();
    }
    bgmTitleSet();
}

function bgmLoop(){
    if(isLoop == true){
        isLoop = false;
        bgmBtnLoop.id = "bgmLoop";
        bgm.loop = false;
    }else{
        isLoop = true;
        bgmBtnLoop.id = "bgmLoopOn";
        bgm.loop = true;
    }
}

bgm.addEventListener("ended", () => {
    bgmNext();
});

function toGameStart(){
    location.href = "./game.html";
}
function toConfig(){
    location.href = "./setting.html";
}
function toLine30(){
    location.href = "./line30.html";
}
function toMin2(){
    location.href = "./min2.html";
}