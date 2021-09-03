x = 0;
y = 0;

function preload() {
    most = loadImage('https://i.postimg.cc/mhxw6YRK/unnamed.png');
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
        console.log('moustache x=' + results[0].pose.nose.x);
        console.log('moustache y= ' + results[0].pose.nose.y);
        x = results[0].pose.nose.x - 19;
        y = results[0].pose.nose.y + 7;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(most, x, y, 80, 80);
}

function take_snapshot() {
    save('moustache_filter_selfie.png');
}