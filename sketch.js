
function setup() {
    createCanvas(600, 400);
    textAlign(CENTER);
    textSize(36);
}

function draw() {
    background(109,80,90);
}

const synth = new Tone.Synth().toMaster();
const playbutton = document.getElementById("play-button") 
playbutton.addEventListener("click", play)

function play(){
    synth.triggerAttackRelease("C3", "2n", "F5", "2n") 
    console.log(Tone.context.state)
}