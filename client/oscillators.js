const audioContext = new (window.AudioContext || window.webkitAudioContext)();
// create Oscillator node

// https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode


// C MAJOR SCALE OSCILLATORS

//////////C2 CHORDS/////////////

// C2
const C2 = audioContext.createOscillator();
C2.type = 'square';
C2.frequency.setValueAtTime(65.406, audioContext.currentTime); // value in hertz
C2.connect(audioContext.destination);

// D2
const D2 = audioContext.createOscillator();
D2.type = 'square';
D2.frequency.setValueAtTime(73.416, audioContext.currentTime); // value in hertz
D2.connect(audioContext.destination);

// E2
const E2 = audioContext.createOscillator();
E2.type = 'square';
E2.frequency.setValueAtTime(82.407, audioContext.currentTime); // value in hertz
E2.connect(audioContext.destination);

// F2
const F2 = audioContext.createOscillator();
F2.type = 'square';
F2.frequency.setValueAtTime(87.307, audioContext.currentTime); // value in hertz
F2.connect(audioContext.destination);

// G2
const G2 = audioContext.createOscillator();
G2.type = 'square';
G2.frequency.setValueAtTime(97.999, audioContext.currentTime); // value in hertz
G2.connect(audioContext.destination);

// A2
const A2 = audioContext.createOscillator();
A2.type = 'square';
A2.frequency.setValueAtTime(110.00, audioContext.currentTime); // value in hertz
A2.connect(audioContext.destination);

// B2
const B2 = audioContext.createOscillator();
B2.type = 'square';
B2.frequency.setValueAtTime(123.47, audioContext.currentTime); // value in hertz
B2.connect(audioContext.destination);

//////////C3 CHORDS///////////

// C3
const C3 = audioContext.createOscillator();
C3.type = 'square';
C3.frequency.setValueAtTime(130.81, audioContext.currentTime); // value in hertz
C3.connect(audioContext.destination);

// D3
const D3 = audioContext.createOscillator();
D3.type = 'square';
D3.frequency.setValueAtTime(146.83, audioContext.currentTime); // value in hertz
D3.connect(audioContext.destination);

// E3
const E3 = audioContext.createOscillator();
E3.type = 'square';
E3.frequency.setValueAtTime(164.81, audioContext.currentTime); // value in hertz
E3.connect(audioContext.destination);

// F3
const F3 = audioContext.createOscillator();
F3.type = 'square';
F3.frequency.setValueAtTime(174.61, audioContext.currentTime); // value in hertz
F3.connect(audioContext.destination);

// G3
const G3 = audioContext.createOscillator();
G3.type = 'square';
G3.frequency.setValueAtTime(196.00, audioContext.currentTime); // value in hertz
G3.connect(audioContext.destination);

// A3
const A3 = audioContext.createOscillator();
A3.type = 'square';
A3.frequency.setValueAtTime(220.00, audioContext.currentTime); // value in hertz
A3.connect(audioContext.destination);

// B3
const B3 = audioContext.createOscillator();
B3.type = 'square';
B3.frequency.setValueAtTime(246.94, audioContext.currentTime); // value in hertz
B3.connect(audioContext.destination);

//////////C4 CHORDS///////////

// C4
const C4 = audioContext.createOscillator();
C4.type = 'square';
C4.frequency.setValueAtTime(261.63, audioContext.currentTime); // value in hertz
C4.connect(audioContext.destination);

// D4
const D4 = audioContext.createOscillator();
D4.type = 'square';
D4.frequency.setValueAtTime(293.67, audioContext.currentTime); // value in hertz
D4.connect(audioContext.destination);

// E4
const E4 = audioContext.createOscillator();
E4.type = 'square';
E4.frequency.setValueAtTime(329.63, audioContext.currentTime); // value in hertz
E4.connect(audioContext.destination);

// F4
const F4 = audioContext.createOscillator();
F4.type = 'square';
F4.frequency.setValueAtTime(349.23, audioContext.currentTime); // value in hertz
F4.connect(audioContext.destination);

// G4
const G4 = audioContext.createOscillator();
G4.type = 'square';
G4.frequency.setValueAtTime(392.00, audioContext.currentTime); // value in hertz
G4.connect(audioContext.destination);

// A4
const A4 = audioContext.createOscillator();
A4.type = 'square';
A4.frequency.setValueAtTime(440.00, audioContext.currentTime); // value in hertz
A4.connect(audioContext.destination);

// B4
const B4 = audioContext.createOscillator();
B4.type = 'square';
B4.frequency.setValueAtTime(493.88, audioContext.currentTime); // value in hertz
B4.connect(audioContext.destination);

// C3 - 130.81
// D3 - 146.83
// E3 - 164.81
// F3 - 174.61
// G3 - 196.00
// A3 - 220.00
// B3 - 246.94



