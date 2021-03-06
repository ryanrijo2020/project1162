xnose=0;
ynose=0;
function preload() {
  image1=loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}
function setup() {
canvas=createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.hide();
video.size(300,300);
posenet=ml5.poseNet(video,modeloaded);
posenet.on('pose',poses);

}
 function modeloaded() {
     console.log('posenet.intialized');
 }
 function poses(res) {
     if (res.length > 0) {
         console.log(res);
        console.log('nose x = '+ res[0].pose.nose.x);
        xnose=res[0].pose.nose.x-22;
        console.log('nose y = '+ res[0].pose.nose.y);
        ynose=res[0].pose.nose.y;
     }
 }
function draw() {
image(video,0,0,300,300);
image(image1,xnose,ynose,50,50);
}
function take_snapshot() {
save('clownyryan.jpeg');
}