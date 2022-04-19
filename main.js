status="";

function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    }

    function start(){
        objectDetector=ml5.objectDetector('cocossd',modelLoaded);
        document.getElementById("status").innerHTML="status: Objects detected"
    }

    function modelLoaded(){
        console.log("modelLoaded");
        status= true;
    }

    function draw(){
        image(video,0,0,400,300 );
    
    }