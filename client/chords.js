const audioContext = new (window.AudioContext || window.webkitAudioContext);

class chordObj {
  constructor() {
    this.notes = [...arguments]
  }
  start() {
    this.notes.forEach((note, i) => {
      this['note' + i] = audioContext.createOscillator();
      this['note' + i].type = 'triangle'
      this['note' + i].frequency.setValueAtTime(note, audioContext.currentTime);
      this['note' + i].connect(audioContext.destination);
    })
    this.notes.forEach((note, i) => {
      const gain = audioContext.createGain();
      this['note' + i].connect(gain);
      gain.connect(audioContext.destination);
      gain.gain.value = 0.5;
      this['note' + i].start()
    })
  }
   stop () {
    this.notes.forEach((note, i) => {
      this['note' + i].stop()
    })
  }
}

const cMajor = new chordObj(130.81, 164.81, 196.00)
const aMinor = new chordObj(110.00, 130.81, 164.81)
const fMajor = new chordObj(174.61, 220.00, 261.63)
const gMajor = new chordObj(97.999, 123.47, 146.83)
const dMinor = new chordObj(146.83, 174.61, 220.00)
const eMinor = new chordObj(82.407, 97.999, 123.47)
const bDim = new chordObj(123.47, 146.83, 174.61)
const cMajorMaj7 = new chordObj(130.81, 164.81, 196.00, 246.94)
const aMinor7 = new chordObj(110.00, 130.81, 164.81, 196.00)
const fMajorMaj7 = new chordObj(174.61, 220.00, 261.63, 329.63)
const gMajor7 = new chordObj(97.999, 123.47, 146.83, 220.00)
const dMinor7 = new chordObj(146.83, 174.61, 220.00, 261.63)
const eMinor7 = new chordObj(82.407, 97.999, 123.47, 146.83)
const bDim7 = new chordObj(123.47, 146.83, 174.61, 220.00)

const cMajorScaleChords = {}

cMajorScaleChords.C = cMajor
cMajorScaleChords.CMaj7 = cMajorMaj7
cMajorScaleChords.Dm = dMinor
cMajorScaleChords.Dm7 = dMinor7
cMajorScaleChords.Em = eMinor
cMajorScaleChords.Em7 = eMinor7
cMajorScaleChords.F = fMajor
cMajorScaleChords.FMaj7 = fMajorMaj7
cMajorScaleChords.G = gMajor
cMajorScaleChords.G7 = gMajor7
cMajorScaleChords.Am = aMinor
cMajorScaleChords.Am7 = aMinor7
cMajorScaleChords.Bdim = bDim
cMajorScaleChords.Bdim7 = bDim7

export default cMajorScaleChords

