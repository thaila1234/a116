noseX = 0
noseY = 0

function preload(){
    oculos = loadImage("https://i.postimg.cc/xCxKhB9K/oculos-removebg-preview.png")
}

function setup(){
    canvas = createCanvas(350,250);
    canvas.center();
    canvas.position(500, 170);
    video = createCapture(VIDEO);
    video.size(250, 500);
    video.position(500, 50);
    video.hide()
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 350, 250)
    //fill(255, 0, 0)
    //stroke(255, 0, 0)
    //circle(noseX, noseY, 50)
    image(oculos, noseX, noseY, 85, 90)
}

function modelLoaded(){
    console.log("poseNet inicializado")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("narizX" + results[0].pose.nose.x)
        noseX = results[0].pose.nose.x-25
        noseY = results[0].pose.nose.y-25
    }

}