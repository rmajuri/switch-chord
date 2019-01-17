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

const majorScaleChords = {}

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


const DbMajor = new chordObj('Db3', 'F3', 'Ab3');
const DbMajorMaj7 = new chordObj('Db3', 'F3', 'Ab3', 'C4');
const DbMajorMaj9 = new chordObj('Db3', 'F3', 'Ab3',  'C4', 'Eb4');
const DbMajorAdd9 = new chordObj('Db3', 'F3', 'Ab3', 'Eb4');
const DbMajor6 = new chordObj('Db3', 'F3', 'Ab3', 'Bb3');
const EbMinor = new chordObj('Eb3', 'Gb3', 'Bb3');
const EbMinor7 = new chordObj('Eb3', 'Gb3', 'Bb3', 'Db4');
const EbMinor9 = new chordObj('Eb3', 'Gb3', 'Bb3', 'Db4', 'F4');
const FMinor = new chordObj('F3', 'Ab3', 'C4');
const FMinor7 = new chordObj('F3', 'Ab3', 'C4', 'Eb4',);
const FMinor9 = new chordObj('F3', 'Ab3', 'C4', 'Eb4', 'Gb4');
const GbMajor = new chordObj('Gb3', 'Bb3', 'Db4');
const GbMajorMaj7 = new chordObj('Gb3', 'Bb3', 'Db4', 'F4');
const GbMajorMaj9 = new chordObj('Gb3', 'Bb3', 'Db4', 'F4', 'Ab4');
const GbMajorAdd9 = new chordObj('Gb3', 'Bb3', 'Db4', 'Ab4');
const GbMajor6 = new chordObj('Gb3', 'Bb3', 'Db4', 'Eb4');
const AbMajor = new chordObj('Ab3', 'C4', 'Eb4',);
const AbMajor7 = new chordObj('Ab3', 'C4', 'Eb4', 'Gb4');
const AbMajorAdd9 = new chordObj('Ab3', 'C4', 'Eb4', 'Bb4');
const AbMajor6 = new chordObj('Ab3', 'C4', 'Eb4', 'F4');
const AbMajor9 = new chordObj('Ab3', 'C4', 'Gb4', 'Bb4');
const BbMinor = new chordObj('Bb3', 'Db4', 'F4');
const BbMinor7 = new chordObj('Bb3', 'Db4', 'F4', 'Ab4');
const BbMinor9 = new chordObj('Bb3', 'Db4', 'F4', 'Ab4', 'C5');
const cdim = new chordObj('C4', 'Eb4', 'Gb4');
const Db5 = new chordObj('Db3', 'Ab3');
const Eb5 = new chordObj('Eb3', 'Bb3');
const Gb5 = new chordObj('F3', 'C4');
const Ab5 = new chordObj('Ab3', 'Eb4');
const Bb5 = new chordObj('Bb3', 'F4');


majorScaleChords.Db = {}

majorScaleChords.Db.Db = DbMajor
majorScaleChords.Db.DbMajor7 = DbMajorMaj7
majorScaleChords.Db.DbMajor9 = DbMajorMaj9
majorScaleChords.Db.Dbadd9 = DbMajorAdd9
majorScaleChords.Db.Db6 = DbMajor6
majorScaleChords.Db.Ebm = EbMinor
majorScaleChords.Db.Ebm7 = EbMinor7
majorScaleChords.Db.Ebm9 = EbMinor9
majorScaleChords.Db.Fm = FMinor
majorScaleChords.Db.Fm7 = FMinor7
majorScaleChords.Db.Fm9 = FMinor9
majorScaleChords.Db.Gb = GbMajor
majorScaleChords.Db.GbMaj7 = GbMajorMaj7
majorScaleChords.Db.GbMaj9 = GbMajorMaj9
majorScaleChords.Db.Gbadd9 = GbMajorAdd9
majorScaleChords.Db.Gb6 = GbMajor6
majorScaleChords.Db.Ab = AbMajor
majorScaleChords.Db.Ab7 = AbMajor7
majorScaleChords.Db.Abadd9 = AbMajorAdd9
majorScaleChords.Db.Ab6 = AbMajor6
majorScaleChords.Db.Ab9 = AbMajor9
majorScaleChords.Db.Bbm = BbMinor
majorScaleChords.Db.Bbm7 = BbMinor7
majorScaleChords.Db.Bbm9 = BbMinor9
majorScaleChords.Db.Cdim = cdim
majorScaleChords.Db.Db5 = Db5
majorScaleChords.Db.Eb5 = Eb5
majorScaleChords.Db.Gb5 = Gb5
majorScaleChords.Db.Ab5 = Ab5
majorScaleChords.Db.Bb5 = Bb5
majorScaleChords.Db.F5 = F5


export default majorScaleChords

