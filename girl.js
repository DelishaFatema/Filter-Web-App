x = 0;
y = 0;

function preload() {
    colr = loadImage('https://i.postimg.cc/bvvpFF6s/1c15f03b70953e6f79f22a6fcfda36bc.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("poseNet is Initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        console.log('lipstic x=' + results[0].pose.nose.x);
        console.log('lipstic y= ' + results[0].pose.nose.y);
        x = results[0].pose.nose.x - 19;
        y = results[0].pose.nose.y + 7;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(colr, x, y, 50, 50);
}

function take_snapshot() {
    save('lipstic_filter_selfie.png');
}