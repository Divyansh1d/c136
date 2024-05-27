function setup(){
    video=createCapture(VIDEO);
    video.size(600, 550);

    canvas=createCanvas(600, 550);
    canvas.position(560, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function draw(){
    background('black');
    textSize(difference);
    fill("red");
    text('DIVYANSH',30,200);
}

function modelLoaded(){
    console.log('posenet model is downloaded')
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.y;
    difference=floor(leftWristX-rightWristX);
}