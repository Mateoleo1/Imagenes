
function preload(){

}
function setup(){
canvas=createCanvas(420,420);
canvas.center();
canvas.position(465,300);
video=createCapture(VIDEO);
video.size(420,420);
video.center();
video.hide();
video.position(205,205);
Classifier=ml5.imageClassifier("MobileNet",H)
}
function H(){
    console.log("LoadModel")
    }
    function draw(){
        image(video,0,0,420,420)
Classifier.classify(video,H2)
       }
    function H2(error,H1){
if(error){
console.log(error);
}
else if(H1){
    console.log(H1);
document.getElementById("Objeto").innerHTML=H1[0].label;
document.getElementById("Precision").innerHTML=H1[0].confidence;
}
}

