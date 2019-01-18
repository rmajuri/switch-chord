import Tone from "tone";

class chordObj {
  constructor() {
    this.notes = [...arguments];
    this.synth = new Tone.PolySynth(4, Tone.Synth).toMaster();
  }
  start() {
    this.synth.triggerAttack(this.notes);
  }
  stop() {
    this.synth.triggerRelease(this.notes);
  }
}

const majorScaleChords = {};

const cMajor = new chordObj("C3", "E3", "G3");
const aMinor = new chordObj("A3", "C4", "E4");
const fMajor = new chordObj("F3", "A3", "C4");
const gMajor = new chordObj("G3", "B3", "D4");
const dMinor = new chordObj("D3", "F3", "A3");
const eMinor = new chordObj("E3", "G3", "B3");
const bDim = new chordObj("B3", "D4", "F4");
const cMajorMaj7 = new chordObj("C3", "E3", "G3", "B3");
const cMajorMaj9 = new chordObj("C3", "E3", "G3", "B3", "D4");
const aMinor7 = new chordObj("A3", "C4", "E4", "G4");
const fMajorMaj7 = new chordObj("F3", "A3", "C4", "E4");
const fMajorMaj9 = new chordObj("F3", "A3", "C4", "E4", "G4");
const gMajor7 = new chordObj("G3", "B3", "D4", "F4");
const dMinor7 = new chordObj("D3", "F3", "A3", "C4");
const dMinor9 = new chordObj("D3", "F3", "A3", "C4", "E4");
const eMinor7 = new chordObj("E3", "G3", "B3", "D4");
const eMinor9 = new chordObj("E3", "G3", "B3", "D4", "F4");
const cMajorAdd9 = new chordObj("C3", "E3", "G3", "D4");
const gMajorAdd9 = new chordObj("G3", "B3", "D4", "A4");
const fMajorAdd9 = new chordObj("F3", "A3", "C4", "G4");
const aMinor9 = new chordObj("A3", "C4", "E4", "G4", "B4");
const C5 = new chordObj("C3", "G3");
const D5 = new chordObj("D3", "A3");
const E5 = new chordObj("E3", "B3");
const F5 = new chordObj("F3", "C4");
const G5 = new chordObj("G3", "D4");
const A5 = new chordObj("A3", "E4");
const cMajor6 = new chordObj("C3", "E3", "G3", "A3");
const fMajor6 = new chordObj("F3", "A3", "C4", "D4");
const gMajor6 = new chordObj("G3", "B3", "D4", "E4");
const gMajor9 = new chordObj("G3", "B3", "D4", "F4", "A4");
const dMinorAdd9 = new chordObj("D3", "F3", "A3", "E4");
const aMinorAdd9 = new chordObj("A3", "C4", "E4", "B4");

majorScaleChords.C = {};

majorScaleChords.C.C = cMajor;
majorScaleChords.C.C5 = C5;
majorScaleChords.C.CMaj7 = cMajorMaj7;
majorScaleChords.C.CMaj9 = cMajorMaj9;
majorScaleChords.C.Cadd9 = cMajorAdd9;
majorScaleChords.C.C6 = cMajor6;
majorScaleChords.C.D5 = D5;
majorScaleChords.C.Dm = dMinor;
majorScaleChords.C.Dm7 = dMinor7;
majorScaleChords.C.Dm9 = dMinor9;
majorScaleChords.C.Dmadd9 = dMinorAdd9;
majorScaleChords.C.E5 = E5;
majorScaleChords.C.Em = eMinor;
majorScaleChords.C.Em7 = eMinor7;
majorScaleChords.C.Em9 = eMinor9;
majorScaleChords.C.F5 = F5;
majorScaleChords.C.F = fMajor;
majorScaleChords.C.FMaj7 = fMajorMaj7;
majorScaleChords.C.FMaj9 = fMajorMaj9;
majorScaleChords.C.Fadd9 = fMajorAdd9;
majorScaleChords.C.F6 = fMajor6;
majorScaleChords.C.G5 = G5;
majorScaleChords.C.G = gMajor;
majorScaleChords.C.G7 = gMajor7;
majorScaleChords.C.Gadd9 = gMajorAdd9;
majorScaleChords.C.G6 = gMajor6;
majorScaleChords.C.G9 = gMajor9;
majorScaleChords.C.A5 = A5;
majorScaleChords.C.Am = aMinor;
majorScaleChords.C.Am7 = aMinor7;
majorScaleChords.C.Am9 = aMinor9;
majorScaleChords.C.Amadd9 = aMinorAdd9;
majorScaleChords.C.Bdim = bDim;

const DbMajor = new chordObj("Db3", "F3", "Ab3");
const DbMajorMaj7 = new chordObj("Db3", "F3", "Ab3", "C4");
const DbMajorMaj9 = new chordObj("Db3", "F3", "Ab3", "C4", "Eb4");
const DbMajorAdd9 = new chordObj("Db3", "F3", "Ab3", "Eb4");
const DbMajor6 = new chordObj("Db3", "F3", "Ab3", "Bb3");
const EbMinor = new chordObj("Eb3", "Gb3", "Bb3");
const EbMinor7 = new chordObj("Eb3", "Gb3", "Bb3", "Db4");
const EbMinor9 = new chordObj("Eb3", "Gb3", "Bb3", "Db4", "F4");
const EbMinorAdd9 = new chordObj("Eb3", "Gb3", "Bb3", "F4");
const FMinor = new chordObj("F3", "Ab3", "C4");
const FMinor7 = new chordObj("F3", "Ab3", "C4", "Eb4");
const FMinor9 = new chordObj("F3", "Ab3", "C4", "Eb4", "Gb4");
const GbMajor = new chordObj("Gb3", "Bb3", "Db4");
const GbMajorMaj7 = new chordObj("Gb3", "Bb3", "Db4", "F4");
const GbMajorMaj9 = new chordObj("Gb3", "Bb3", "Db4", "F4", "Ab4");
const GbMajorAdd9 = new chordObj("Gb3", "Bb3", "Db4", "Ab4");
const GbMajor6 = new chordObj("Gb3", "Bb3", "Db4", "Eb4");
const AbMajor = new chordObj("Ab3", "C4", "Eb4");
const AbMajor7 = new chordObj("Ab3", "C4", "Eb4", "Gb4");
const AbMajorAdd9 = new chordObj("Ab3", "C4", "Eb4", "Bb4");
const AbMajor6 = new chordObj("Ab3", "C4", "Eb4", "F4");
const AbMajor9 = new chordObj("Ab3", "C4", "Eb4", "Gb4", "Bb4");
const BbMinor = new chordObj("Bb3", "Db4", "F4");
const BbMinor7 = new chordObj("Bb3", "Db4", "F4", "Ab4");
const BbMinor9 = new chordObj("Bb3", "Db4", "F4", "Ab4", "C5");
const BbMinorAdd9 = new chordObj("Bb3", "Db4", "F4", "C5");
const cdim = new chordObj("C4", "Eb4", "Gb4");
const Db5 = new chordObj("Db3", "Ab3");
const Eb5 = new chordObj("Eb3", "Bb3");
const Gb5 = new chordObj("F3", "C4");
const Ab5 = new chordObj("Ab3", "Eb4");
const Bb5 = new chordObj("Bb3", "F4");

majorScaleChords.Db = {};

majorScaleChords.Db.Db = DbMajor;
majorScaleChords.Db.DbMajor7 = DbMajorMaj7;
majorScaleChords.Db.DbMajor9 = DbMajorMaj9;
majorScaleChords.Db.Dbadd9 = DbMajorAdd9;
majorScaleChords.Db.Db6 = DbMajor6;
majorScaleChords.Db.Ebm = EbMinor;
majorScaleChords.Db.Ebm7 = EbMinor7;
majorScaleChords.Db.Ebm9 = EbMinor9;
majorScaleChords.Db.Ebmadd9 = EbMinorAdd9;
majorScaleChords.Db.Fm = FMinor;
majorScaleChords.Db.Fm7 = FMinor7;
majorScaleChords.Db.Fm9 = FMinor9;
majorScaleChords.Db.Gb = GbMajor;
majorScaleChords.Db.GbMaj7 = GbMajorMaj7;
majorScaleChords.Db.GbMaj9 = GbMajorMaj9;
majorScaleChords.Db.Gbadd9 = GbMajorAdd9;
majorScaleChords.Db.Gb6 = GbMajor6;
majorScaleChords.Db.Ab = AbMajor;
majorScaleChords.Db.Ab7 = AbMajor7;
majorScaleChords.Db.Abadd9 = AbMajorAdd9;
majorScaleChords.Db.Ab6 = AbMajor6;
majorScaleChords.Db.Ab9 = AbMajor9;
majorScaleChords.Db.Bbm = BbMinor;
majorScaleChords.Db.Bbm7 = BbMinor7;
majorScaleChords.Db.Bbm9 = BbMinor9;
majorScaleChords.Db.Bbmadd9 = BbMinorAdd9;
majorScaleChords.Db.Cdim = cdim;
majorScaleChords.Db.Db5 = Db5;
majorScaleChords.Db.Eb5 = Eb5;
majorScaleChords.Db.Gb5 = Gb5;
majorScaleChords.Db.Ab5 = Ab5;
majorScaleChords.Db.Bb5 = Bb5;
majorScaleChords.Db.F5 = F5;

const DMajor = new chordObj("D3", "Gb3", "A3");
const DMajorMaj7 = new chordObj("D3", "Gb3", "A3", 'Db4');
const DMajorMaj9 = new chordObj("D3", "Gb3", "A3", 'Db4', "E4");
const DMajorAdd9 = new chordObj("D3", "Gb3", "A3", "E4");
const DMajor6 = new chordObj("D3", "Gb3", "A3", "B3");
const EMinor = new chordObj("E3", "G3", "B3");
const EMinor7 = new chordObj("E3", "G3", "B3", "D4");
const EMinor9 = new chordObj("E3", "G3", "B3", "D4", "Gb4");
const EMinorAdd9 = new chordObj("E3", "G3", "B3", "Gb4");
const GbMinor = new chordObj("Gb3", "A3", "Db4");
const GbMinor7 = new chordObj("Gb3", "A3", "Db4", "E4");
const GbMinor9 = new chordObj("Gb3", "A3", "Db4", "E4", "G4");
const GMajor = new chordObj("G3", "B3", "D4");
const GMajorMaj7 = new chordObj("G3", "B3", "D4", "Gb4");
const GMajorMaj9 = new chordObj("G3", "B3", "D4", "Gb4", "A4");
const GMajorAdd9 = new chordObj("G3", "B3", "D4", "A4");
const GMajor6 = new chordObj("G3", "B3", "D4", "E4");
const AMajor = new chordObj("A3", "Db4", "E4");
const AMajor7 = new chordObj("A3", "Db4", "E4", "Gb4");
const AMajorAdd9 = new chordObj("A3", "Db4", "E4", "Bb4");
const AMajor6 = new chordObj("A3", "Db4", "E4", "B4");
const AMajor9 = new chordObj("A3", "Db4", "E4", "G4", "B4");
const BMinor = new chordObj("B3", "Eb4", "Gb4");
const BMinor7 = new chordObj("B3", "Eb4", "Gb4", "A4");
const BMinor9 = new chordObj("B3", "Eb4", "Gb4", "A4", "Db5");
const BMinorAdd9 = new chordObj("B3", "Eb4", "F4", "Db5");
const dddim = new chordObj("Db4", "E4", "G4");
const B5 = new chordObj("B3", "Gb4");

majorScaleChords.D = {};

majorScaleChords.D.D = DMajor;
majorScaleChords.D.DMajor7 = DMajorMaj7;
majorScaleChords.D.DMajor9 = DMajorMaj9;
majorScaleChords.D.Dadd9 = DMajorAdd9;
majorScaleChords.D.D6 = DMajor6;
majorScaleChords.D.Em = EMinor;
majorScaleChords.D.Em7 = EMinor7;
majorScaleChords.D.Em9 = EMinor9;
majorScaleChords.D.Emadd9 = EMinorAdd9;
majorScaleChords.D.Gbm = GbMinor;
majorScaleChords.D.Gbm7 = GbMinor7;
majorScaleChords.D.Gbm9 = GbMinor9;
majorScaleChords.D.G = GMajor;
majorScaleChords.D.GMaj7 = GMajorMaj7;
majorScaleChords.D.GMaj9 = GMajorMaj9;
majorScaleChords.D.Gadd9 = GMajorAdd9;
majorScaleChords.D.G6 = GMajor6;
majorScaleChords.D.A = AMajor;
majorScaleChords.D.A7 = AMajor7;
majorScaleChords.D.Aadd9 = AMajorAdd9;
majorScaleChords.D.A6 = AMajor6;
majorScaleChords.D.A9 = AMajor9;
majorScaleChords.D.Bm = BMinor;
majorScaleChords.D.Bm7 = BMinor7;
majorScaleChords.D.Bm9 = BMinor9;
majorScaleChords.D.Bmadd9 = BMinorAdd9;
majorScaleChords.D.Dbdim = dddim;
majorScaleChords.D.D5 = D5;
majorScaleChords.D.E5 = E5;
majorScaleChords.D.G5 = G5;
majorScaleChords.D.A5 = A5;
majorScaleChords.D.B5 = B5;
majorScaleChords.D.Gb5 = Gb5;

const EbMajor = new chordObj('Eb3', 'G3', 'Bb3');
const EbMajorMaj7 = new chordObj('Eb3', 'G3', 'Bb3', 'D4');
const EbMajorMaj9 = new chordObj('Eb3', 'G3', 'Bb3', 'D4', 'F4');
const EbMajorAdd9 = new chordObj('Eb3', 'G3', 'Bb3', 'F4');
const EbMajor6 = new chordObj('Eb3', 'G3', 'Bb3', 'C4');


const FMinorAdd9 = new chordObj('F3', 'Ab3', 'C4', 'G4');
const GMinor = new chordObj('G3', 'Bb3', 'D4');
const GMinor7 = new chordObj('G3', 'Bb3', 'D4','F4');
const GMinor9 = new chordObj('G3', 'Bb3', 'D4', 'F4', 'Ab4');

const AbMajorMaj7 = new chordObj('Ab3', 'C4', 'Eb4', 'G4');
const AbMajorMaj9 = new chordObj('Ab3', 'C4', 'Eb4', 'G4', 'Bb4');


const BbMajor = new chordObj('Bb3', 'D4', 'F4');
const BbMajor7 = new chordObj('Bb3', 'D4', 'F4', 'Ab4');
const BbMajor9 = new chordObj('Bb3', 'D4', 'F4', 'Ab4', 'C5');
const BbMajor6 = new chordObj('Bb3', 'D4', 'F4', 'G4');
const BbMajorAdd9 = new chordObj('Bb3', 'D4', 'F4', 'C5');
const CMinor = new chordObj('C4', 'Eb4', 'G4');
const CMinor7 = new chordObj('C4', 'Eb4', 'G4', 'Bb4');
const CMinor9 = new chordObj('C4', 'Eb4', 'G4', 'Bb4', 'D5');
const CMinorAdd9 = new chordObj('C4', 'Eb4', 'G4', 'D5');
const dDim = new chordObj('D4', 'F4', 'Ab4');

majorScaleChords.Eb = {};

majorScaleChords.Eb.Eb = EbMajor
majorScaleChords.Eb.EbMaj7 = EbMajorMaj7;
majorScaleChords.Eb.EbMaj9 = EbMajorMaj9;
majorScaleChords.Eb.Ebadd9 = EbMajorAdd9;
majorScaleChords.Eb.Eb6 = EbMajor6;
majorScaleChords.Eb.Fm = FMinor;
majorScaleChords.Eb.Fm7 = FMinor7;
majorScaleChords.Eb.Fm9 = FMinor9;
majorScaleChords.Eb.Fmadd9 = FMinorAdd9;
majorScaleChords.Eb.Gm = GMinor;
majorScaleChords.Eb.Gm7 = GMinor7;
majorScaleChords.Eb.Gm9 = GMinor9;
majorScaleChords.Eb.Ab = AbMajor;
majorScaleChords.Eb.AbMaj7 = AbMajorMaj7;
majorScaleChords.Eb.AbMaj9 = AbMajorMaj9;
majorScaleChords.Eb.Abadd9 = AbMajorAdd9;
majorScaleChords.Eb.Ab6 = AbMajor6;
majorScaleChords.Eb.Bb = BbMajor;
majorScaleChords.Eb.Bb7 = BbMajor7;
majorScaleChords.Eb.Bbadd9 = BbMajorAdd9;
majorScaleChords.Eb.Bb6 = BbMajor6;
majorScaleChords.Eb.Bb9 = BbMajor9;
majorScaleChords.Eb.Cm = CMinor;
majorScaleChords.Eb.Cm7 = CMinor7;
majorScaleChords.Eb.Cm9 = CMinor9;
majorScaleChords.Eb.Cmadd9 = CMinorAdd9;
majorScaleChords.Eb.Ddim = dDim;
majorScaleChords.Eb.Eb5 = Eb5
majorScaleChords.Eb.F5 = F5;
majorScaleChords.Eb.G5 = G5;
majorScaleChords.Eb.Ab5 = Ab5;
majorScaleChords.Eb.Bb5 = Bb5;
majorScaleChords.Eb.C5 = C5;


const EMajor = new chordObj("E3", "Ab3", "B3");
const EMajorMaj7 = new chordObj("E3", "Ab3", "B3", "Eb4");
const EMajorMaj9 = new chordObj("E3", "Ab3", "B3", "Eb4", "Gb4");
const EMajorAdd9 = new chordObj("E3", "Ab3", "B3", "Gb4");
const EMajor6 = new chordObj("E3", "Ab3", "B3", "Db4");
const GbMinorAdd9 = new chordObj("Gb3", "A3", "Db4", "Ab4");
const AbMinor = new chordObj("Ab3", "B3", "Eb4");
const AbMinor7 = new chordObj("Ab3", "B3", "Eb4", "Gb3");
const AbMinor9 = new chordObj("Ab3", "B3", "Eb4", "Gb3", "A3");
const AMajorMaj7 = new chordObj("A3", "Db4", "E4", "Ab4");
const AMajorMaj9 = new chordObj("A3", "Db4", "E4", "Ab4", "B4");
const BMajor = new chordObj("B3", "Eb4", "Gb4");
const BMajor7 = new chordObj("B3", "Eb4", "Gb4", "A4");
const BMajorAdd9 = new chordObj("B3", "Eb4", "Gb4", "Db5");
const BMajor6 = new chordObj("B3", "Eb4", "Gb4", "Ab4");
const BMajor9 = new chordObj("B3", "Eb4", "Gb4", "A4", "Db5");
const DbMinor = new chordObj("Db4", "E4", "Ab4");
const DbMinor7 = new chordObj("Db4", "E4", "Ab4", "B4");
const DbMinor9 = new chordObj("Db4", "E4", "Ab4", "B4", "Eb5");
const DbMinorAdd9 = new chordObj("Db4", "E4", "Ab4", "Eb5");
const ebdim = new chordObj("Eb4", "Gb4", "A4");

majorScaleChords.E = {};

majorScaleChords.E.E = EMajor;
majorScaleChords.E.EMajor7 = EMajorMaj7;
majorScaleChords.E.EMajor9 = EMajorMaj9;
majorScaleChords.E.Eadd9 = EMajorAdd9;
majorScaleChords.E.E6 = EMajor6;
majorScaleChords.E.Gbm = GbMinor;
majorScaleChords.E.Gbm7 = GbMinor7;
majorScaleChords.E.Gbm9 = GbMinor9;
majorScaleChords.E.Gbmadd9 = GbMinorAdd9;
majorScaleChords.E.Abm = AbMinor;
majorScaleChords.E.Abm7 = AbMinor7;
majorScaleChords.E.Abm9 = AbMinor9;
majorScaleChords.E.A = AMajor;
majorScaleChords.E.AMaj7 = AMajorMaj7;
majorScaleChords.E.AMaj9 = AMajorMaj9;
majorScaleChords.E.Aadd9 = AMajorAdd9;
majorScaleChords.E.A6 = AMajor6;
majorScaleChords.E.B = BMajor;
majorScaleChords.E.B7 = BMajor7;
majorScaleChords.E.Badd9 = BMajorAdd9;
majorScaleChords.E.B6 = BMajor6;
majorScaleChords.E.B9 = BMajor9;
majorScaleChords.E.Dbm = DbMinor;
majorScaleChords.E.Dbm7 = DbMinor7;
majorScaleChords.E.Dbm9 = DbMinor9;
majorScaleChords.E.Dbmadd9 = DbMinorAdd9;
majorScaleChords.E.Ebdim = ebdim;
majorScaleChords.E.E5 = E5;
majorScaleChords.E.Gb5 = Gb5;
majorScaleChords.E.Ab5 = Ab5;
majorScaleChords.E.A5 = A5;
majorScaleChords.E.B5 = B5;
majorScaleChords.E.Db5 = Db5;

export default majorScaleChords;
