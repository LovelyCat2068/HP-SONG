song = "";

function preload(){
    song = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 300, 300);
}

function pumpkinPasties(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}