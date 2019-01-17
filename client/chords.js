import Tone from 'tone'

class chordObj {
  constructor() {
    this.notes = [...arguments]
    this.synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
  }
  start() {
    this.synth.triggerAttack(this.notes);
  }
   stop () {
    this.synth.triggerRelease(this.notes)
  }
}

const cMajor = new chordObj("C3", "E3", "G3")
const aMinor = new chordObj("A3", "C4", "E4")
const fMajor = new chordObj("F3", "A3", "C4")
const gMajor = new chordObj("G3", "B3", "D4")
const dMinor = new chordObj("D3", "F3", "A3")
const eMinor = new chordObj("E3", "G3", "B3")
const bDim = new chordObj("B3", "D4", "F4")
const cMajorMaj7 = new chordObj("C3", "E3", "G3", "B3")
const cMajorMaj9 = new chordObj("C3", "E3", "G3", "B3", "D4")
const aMinor7 = new chordObj("A3", "C4", "E4", "G4")
const fMajorMaj7 = new chordObj("F3", "A3", "C4", "E4")
const fMajorMaj9 = new chordObj("F3", "A3", "C4", "E4", "G4")
const gMajor7 = new chordObj("G3", "B3", "D4", "F4")
const dMinor7 = new chordObj("D3", "F3", "A3", "C4")
const dMinor9 = new chordObj("D3", "F3", "A3", "C4", "E4")
const eMinor7 = new chordObj("E3", "G3", "B3", "D4")
const eMinor9 = new chordObj("E3", "G3", "B3", "D4", "F4")
const cMajorAdd9 = new chordObj("C3", "E3", "G3", "D4")
const gMajorAdd9 = new chordObj("G3", "B3", "D4", "A4")
const fMajorAdd9 = new chordObj("F3", "A3", "C4", "G4")
const aMinor9 = new chordObj("A3", "C4", "E4", "G4", "B4")
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
const aMinorAdd9 = new chordObj("A3", "C4", "E4", "B4")


const majorScaleChords = {}
majorScaleChords.C = {}

majorScaleChords.C.C = cMajor
majorScaleChords.C.C5 = C5
majorScaleChords.C.CMaj7 = cMajorMaj7
majorScaleChords.C.CMaj9 = cMajorMaj9
majorScaleChords.C.Cadd9 = cMajorAdd9
majorScaleChords.C.C6 = cMajor6
majorScaleChords.C.D5 = D5
majorScaleChords.C.Dm = dMinor
majorScaleChords.C.Dm7 = dMinor7
majorScaleChords.C.Dm9 = dMinor9
majorScaleChords.C.Dmadd9 = dMinorAdd9
majorScaleChords.C.E5 = E5
majorScaleChords.C.Em = eMinor
majorScaleChords.C.Em7 = eMinor7
majorScaleChords.C.Em9 = eMinor9
majorScaleChords.C.F5 = F5
majorScaleChords.C.F = fMajor
majorScaleChords.C.FMaj7 = fMajorMaj7
majorScaleChords.C.FMaj9 = fMajorMaj9
majorScaleChords.C.Fadd9 = fMajorAdd9
majorScaleChords.C.F6 = fMajor6
majorScaleChords.C.G5 = G5
majorScaleChords.C.G = gMajor
majorScaleChords.C.G7 = gMajor7
majorScaleChords.C.Gadd9 = gMajorAdd9
majorScaleChords.C.G6 = gMajor6
majorScaleChords.C.G9 = gMajor9
majorScaleChords.C.A5 = A5
majorScaleChords.C.Am = aMinor
majorScaleChords.C.Am7 = aMinor7
majorScaleChords.C.Am9 = aMinor9
majorScaleChords.C.Amadd9 = aMinorAdd9
majorScaleChords.C.Bdim = bDim



export default majorScaleChords

