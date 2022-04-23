function preload() {
}
function setup() {
    canvas=createCanvas(600,400);
    canvas.position(630,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
    canvas=createCanvas(800,600);
    canvas.position(630,250);
}
function draw() {
    image(video,225,150,350,300);
    tint(tint_color);
}
function take_snapshot() {
    save('student_name.png');
}