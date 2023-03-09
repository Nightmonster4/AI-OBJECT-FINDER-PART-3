objects = [];

function preload(){

}

function setup(){
   canvas = createCanvas(480, 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(600, 300);
}

function start(){
   objectdetector.detect(video, modelloaded);
   document.getElementById("status").innerHTML = "Status: Detecting Objects";
   document.getElementById("inputbox").value;
}

function modelloaded(){
   console.log("Model Loaded!");
   status = true;
}

function draw(){
   image(video, 0, 0, 480,300);
   if(status != ""){
      objectdetector.detect(video, gotresults);
       for(i=0; i<objects.length; i++){
         document.getElementById("status").innerHTML = "Status: Objects detected";
         document.getElementById("noofobjects").innerHTML = "Number of objects detected: "  + objects.length;
         fill("red");
         percent = floor(objects[i].confidence * 100);
         text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
         noFill();
         stroke("red");
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
       }
      }
}

function gotresults(resutlts){
   if(results){
      console.log(results);
      objects = results;
   }
   }