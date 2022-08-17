song_1="";
song_2="";

leftWrist_x="";
rightWrist_x="";
leftWrist_y="";
rightWrist_y="";

function preload(){
    song_1=loadSound("Song_1.mp3");
    song_2=loadSound("Song_2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modalloaded);
    posenet.on('pose',gotResult);
}

function modalloaded(){
    console.log("Modal is Loaded");
}

function draw(){
    image(video,0,0,600,500)
}

function gotResult(results){
    if(results.length>0){
        console.log(results);
        leftWrist_x=results[0].pose.leftWrist.x;
        leftWrist_y=results[0].pose.leftWrist.y;
        rightWrist_x=results[0].pose.rightWrist.x;
        rightWrist_y=results[0].pose.rightWrist.y;
    }
}