
function setup() {
    createCanvas(600, 400);
    textAlign(CENTER);
    textSize(36);
}

let work = "Note"

function draw() {
    background(109,80,90); 
    text(work, width * 0.5, height * 0.5)
    
}
//synth
const synth = new Tone.PolySynth().toMaster();
const playbutton = document.getElementById("play-button") 
playbutton.addEventListener("click", play) 

//sync 
synth.set({ detune: -1200})
const PolySynth = new Tone.PolySynth().toMaster();
PolySynth.volume.value = -6; 
PolySynth.sync(); 

const gain = new Tone.Gain();


function play(){
    synth.triggerAttackRelease("Ab3", "8n", "2n"); 
    synth.triggerAttackRelease("Ab4", "16n", "0"); 
    synth.triggerAttackRelease("C4", "8n", "8n"); 
    synth.triggerAttackRelease("F5", "16n", "8n"); 
    synth.triggerAttackRelease("G4", "4n", "0"); 

    work = "Ab3, Ab4, C4, F5, G4"

    console.log(gain.toFrequency("8n"));
    console.log(Tone.context.state) 
  
} 

