
var ctracker;
let newFace;
let faces = [];
let img;
function setup() {
    img = loadImage("message.png");
    // setup camera capture
    var videoInput = createCapture();
    videoInput.size(400, 300);
    videoInput.position(0, 0);
    
    // setup canvas
    var cnv = createCanvas(windowWidth, windowHeight);
    cnv.position(0, 0);
    // setup tracker
    ctracker = new clm.tracker();
    ctracker.init(pModel);
    ctracker.start(videoInput.elt);
    noStroke();
}
let positions;
let letters=[];
function draw() {
    newFace = createGraphics(100,100);

    clear();

    // get array of face marker positions [x, y] format
    positions = ctracker.getCurrentPosition();
    // console.log(positions.length);
    stroke(0);
    strokeWeight(5);
    // for (var i=0; i<positions.length; i++) {
    drawPoints();
    // window.setTimeout(3000);
    // console.log(OCRAD(document.getElementById("defaultCanvas0")));
    // console.log("hi")
    // OCRAD(document.getElementById("defaultCanvas0")
    if(positions.length>20){

        OCRAD(document.getElementById("defaultCanvas0"), function(text){
        document.getElementById('transcription').className = "done"
        document.getElementById('transcription').innerText = text;
    }
        )}
    // for(let i = 0; i<faces.length;i++){
    //     console.log("running");
    //     translate(100,0);
    //     // image(faces[i],100,100);
    //     push();
    //     if(OCRAD(faces[i.length]==1)){
    //         letters.push(faces[i]); 
    //         console.log("fpounda a lter");
    //     }
    //     pop();
    // }
    
}

function drawPoints(){
            
    beginShape();
    for (var i=0; i<positions.length-66 ; i++) {
        let randPos = Math.floor(random(71));
        // let nx=map(positions[randPos][0],0,windowWidth,0,200)
        // let ny=map(positions[randPos][1],0,windowHeight,0,200);
        // newFace.beginShape();
        // newFace.vertex(nx, ny);
        // newFace.endShape();
        // faces.push(newFace);
        
        vertex(positions[randPos][0], positions[randPos][1]);
        endShape();
    }
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// function drawFace(){
//     for(let i = 0; i<faces.length;i++){
//         push();
//         translate(i*100,0);

//         for (var j=0; i<faces[j].length-60 ; j++) {
//             stroke(0);
//             beginShape();
//             vertex(faces[i][j][0],faces[i][j][1])
//             // vertex(positions[randPos][0], positions[randPos][1]);
//             endShape();
//         }
//         pop();
//     }
// }