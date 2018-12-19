import Tone from 'tone'

class chordObj {
  constructor() {
    this.notes = [...arguments]
    this.chord = new Tone.PolySynth(4, Tone.Synth).toMaster();
  }
  start() {
    this.chord.triggerAttack(this.notes);
  }
   stop () {
     this.chord.triggerRelease(this.notes)
  }
}

const cMajor = new chordObj("C3", "E3", "G3")
const aMinor = new chordObj("A3", "C4", "E4")
const fMajor = new chordObj("F3", "A3", "C4")
const gMajor = new chordObj("G3", "B3", "D4")
const dMinor = new chordObj("D3", "F3", "A3")
const eMinor = new chordObj("E3", "G3", "B3")
const bDim = new chordObj("B3", "D4", "F4")
const bDim7 = new chordObj("B3", "D4", "F4", "A4")
const cMajorMaj7 = new chordObj("C3", "E3", "G3", "B3")
const cMajorMaj9 = new chordObj("C3", "E3", "G3", "B3", "D4")
const aMinor7 = new chordObj("A3", "C4", "E4", "G4")
const fMajorMaj7 = new chordObj("F3", "A3", "C4", "E4")
const fMajorMaj9 = new chordObj("F3", "A3", "C4", "E4", "G4")
const gMajor7 = new chordObj("G3", "B3", "D4", "F4")
const dMinor7 = new chordObj("D3", "F3", "A3", "C4")
const dMinor6 = new chordObj("D3", "F3", "A3", "B3")
const dMinor9 = new chordObj("D3", "F3", "A3", "C4", "E4")
const eMinor7 = new chordObj("E3", "G3", "B3", "D4")
const eMinor9 = new chordObj("E3", "G3", "B3", "D4", "F4")
const cMajorAdd9 = new chordObj("C3", "E3", "G3", "D4")
const gMajorAdd9 = new chordObj("G3", "B3", "D4", "A4")
const fMajorAdd9 = new chordObj("F3", "A3", "C4", "G4")
const aMinor9 = new chordObj("A3", "C4", "E4", "G4", "B4")
const eMinor6 = new chordObj("E3", "G3", "B3", "C4")
const aMinor6 = new chordObj("A3", "C4", "E4", "F4")
const C5 = new chordObj("C3", "G3")
const D5 = new chordObj("D3", "A3")
const E5 = new chordObj("E3", "B3")
const F5 = new chordObj("F3", "C4")
const G5 = new chordObj("G3", "D4")
const A5 = new chordObj("A3", "E4")
const cMajor6 = new chordObj("C3", "E3", "G3", "A3")
const fMajor6 = new chordObj("F3", "A3", "C4", "D4")
const gMajor6 = new chordObj("G3", "B3", "D4", "E4")
const gMajor9 = new chordObj("G3", "B3", "D4", "F4", "A4")
const dMinorAdd9 = new chordObj("D3", "F3", "A3", "E4")
const eMinorAdd11 = new chordObj("E3", "G3", "B3", "A4")
const aMinorAdd9 = new chordObj("A3", "C4", "E4", "B4")
const cAug = new chordObj("C3", "E3", "G#")




const cMajorScaleChords = {}

cMajorScaleChords.C = cMajor
cMajorScaleChords.C5 = C5
cMajorScaleChords.CMaj7 = cMajorMaj7
cMajorScaleChords.CMaj9 = cMajorMaj9
cMajorScaleChords.Cadd9 = cMajorAdd9
cMajorScaleChords.C6 = cMajor6


cMajorScaleChords.D5 = D5
cMajorScaleChords.Dm = dMinor
cMajorScaleChords.Dm6 = dMinor6
cMajorScaleChords.Dm7 = dMinor7
cMajorScaleChords.Dm9 = dMinor9
cMajorScaleChords.Dmadd9 = dMinorAdd9

cMajorScaleChords.E5 = E5
cMajorScaleChords.Em = eMinor
cMajorScaleChords.Em6 = eMinor6
cMajorScaleChords.Em7 = eMinor7
cMajorScaleChords.Em9 = eMinor9
cMajorScaleChords.Em11 = eMinorAdd11

cMajorScaleChords.F5 = F5
cMajorScaleChords.F = fMajor
cMajorScaleChords.FMaj7 = fMajorMaj7
cMajorScaleChords.FMaj9 = fMajorMaj9
cMajorScaleChords.Fadd9 = fMajorAdd9
cMajorScaleChords.F6 = fMajor6

cMajorScaleChords.G5 = G5
cMajorScaleChords.G = gMajor
cMajorScaleChords.G7 = gMajor7
cMajorScaleChords.Gadd9 = gMajorAdd9
cMajorScaleChords.G6 = gMajor6
cMajorScaleChords.G9 = gMajor9

cMajorScaleChords.A5 = A5
cMajorScaleChords.Am = aMinor
cMajorScaleChords.Am6 = aMinor6
cMajorScaleChords.Am7 = aMinor7
cMajorScaleChords.Am9 = aMinor9
cMajorScaleChords.Amadd9 = aMinorAdd9

cMajorScaleChords.Bdim = bDim
cMajorScaleChords.Bdim7 = bDim7
cMajorScaleChords.Caug = cAug


export default cMajorScaleChords

