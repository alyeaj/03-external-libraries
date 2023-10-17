
function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER);
    textSize(36);
}

let work = "Key" 
let note = "Note"

function draw() {
    background(109,80,90); 
    text(work, width * 0.5, height * 0.5)
    text(note, width * 0.55, height * 0.55)

    button = createButton("play") 
  button.position(100, 100) 
  button.mousePressed(play); 

  button2 = createButton("next") 
  button2.position(100, 150) 
  button2.mousePressed(next); 

  button3 = createButton("then") 
  button3.position(100, 200) 
  button3.mousePressed(then); 
}
//synth
const synth = new Tone.PolySynth().toMaster();
// const playbutton = document.getElementById("play-button") 
// playbutton.addEventListener("click", play) 

//noiseSynth
const noiseSynth = new Tone.NoiseSynth().toMaster();


//sync 
synth.set({ detune: -1200})
const PolySynth = new Tone.PolySynth().toMaster();
PolySynth.volume.value = -5; 
PolySynth.sync(); 

const gain = new Tone.Gain(); 


function play(){
    synth.triggerAttackRelease("Ab3", "8n", "2n"); 
    synth.triggerAttackRelease("Ab4", "16n", "0"); 
    synth.triggerAttackRelease("C4", "8n", "8n"); 
    synth.triggerAttackRelease("F5", "16n", "8n"); 
    synth.triggerAttackRelease("G4", "4n", "0"); 

    work = "Ab3, Ab4, C4, F5, G4" 
    note = "8n+2n, 16n+0, 8n+8n, 16n+8n, 4n+0"

    console.log(note)
    console.log(gain.toFrequency("8n"));
    console.log(Tone.context.state) 
} 

function next(){
    synth.triggerAttackRelease("Ab2", "2n", "2n"); 
    synth.triggerAttackRelease("G3", "16n", "4n"); 
    synth.triggerAttackRelease("C4", "16n", "8n"); 
    synth.triggerAttackRelease("F5", "2n", "8n"); 
    synth.triggerAttackRelease("G1", "4n", "0"); 

    work = "Ab2, G3, C4, F5, G1" 
    note = "2n+2n, 16n+4n, 16n+8n, 2n+8n, 4n+0"

    console.log(note)
} 

function then(){
    synth.triggerAttackRelease("G1", "4n", "4n"); 
    synth.triggerAttackRelease("G2", "4n", "4n"); 
    synth.triggerAttackRelease("C4", "2n", "2n"); 
    synth.triggerAttackRelease("G3", "8n", "8n"); 
    synth.triggerAttackRelease("G4", "16n", "16n"); 

    work = "G1, G2, C4, G3, G4" 
    note = "4n+4n, 4n+4n, 2n+2n, 8n+8n, 16n+16n" 

noiseSynth.triggerAttackRelease("8n", 0.05); 

console.log(note)
} 
