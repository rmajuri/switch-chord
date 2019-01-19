import React from 'react'
import majorScaleChords from '../chords.js'
import Toggle from './Toggle'
import RythmPlayer from './RythmPlayer'
import RythmMaker from './RythmMaker.js';
import ChangeKey from './ChangeKey'
import Tone from 'tone'

const AUDIO = document.createElement('audio')

export default class Switches extends React.Component {
  constructor() {
    super()

    this.state = {
      currentKey: 'C',
      keyOptions: ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'],
      currentChord: '',
      currentRythm: '',
      rythmPlaying: false,
      rythmList: ['club.ogg', 'mellow.ogg', 'oldschool.ogg', 'rock.ogg', 'roll.ogg', 'waltz.ogg'],
      rhythmComponent: 'player',
      rhythmPlayerStarted: false,
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.start = this.start.bind(this)
    this.forward = this.forward.bind(this)
    this.back = this.back.bind(this)
    this.pause = this.pause.bind(this)
    this.resume = this.resume.bind(this)
    this.startSequencer = this.startSequencer.bind(this)
    this.stopSequencer = this.stopSequencer.bind(this)
    this.togglePlayer = this.togglePlayer.bind(this)
    this.changeKeyHandler = this.changeKeyHandler.bind(this)
  }

  togglePlayer() {
    if (this.state.rhythmComponent === 'player') {
      this.setState({rhythmComponent: 'maker'})
    } else {
      this.setState({rhythmComponent: 'player'})
    }

  }

  start() {
    const { rythmList } = this.state
    if (this.state.currentRythm.length && !this.state.rythmPlaying) {
      this.resume()
    } else if (!this.state.currentRythm.length) {
      AUDIO.src = this.state.rythmList[0]
      AUDIO.load()
      AUDIO.play()
      this.setState({currentRythm: rythmList[0], rythmPlaying: true})
    }
  }

  forward() {
    const { rythmList } = this.state
    const next = rythmList.indexOf(this.state.currentRythm) + 1
    if (next <= 0 || next >= rythmList.length) {
      AUDIO.pause()
      AUDIO.src = ''
      this.setState({
        rythmPlaying: false,
        currentRythm: '',
      })
    } else {
      AUDIO.pause()
      AUDIO.src = rythmList[next]
      AUDIO.load()
      AUDIO.play()
      this.setState({currentRythm: rythmList[next], rythmPlaying: true})
    }
    console.log(next)
  }

  back() {
    const { rythmList } = this.state
    const next = rythmList.indexOf(this.state.currentRythm) - 1
    if (next < 0) {
      AUDIO.pause()
      AUDIO.src = ''
      this.setState({
        rythmPlaying: false,
        currentRythm: '',
      })
    } else {
      AUDIO.pause()
      AUDIO.src = rythmList[next]
      AUDIO.load()
      AUDIO.play()
      this.setState({currentRythm: rythmList[next], rythmPlaying: true})
    }
  }
  pause(){
    AUDIO.pause()
    this.setState({
      rythmPlaying: false
    })
  }
  resume() {
    AUDIO.play()
    this.setState({
      rythmPlaying: true
    })
  }

  handleToggle(event, chord) {
    if (!this.state.currentChord) {
      majorScaleChords[this.state.currentKey][chord].start()
      const chordPlaying = document.getElementById(chord)
      chordPlaying.className = 'isPlaying'
      this.setState({currentChord: chord})
    }

    if (this.state.currentChord === chord) {
      majorScaleChords[this.state.currentKey][chord].stop()
      const chordPlaying = document.getElementById(chord)
      chordPlaying.className = 'switch-container'
      this.setState({currentChord: ''})
    }

    if (this.state.currentChord && this.state.currentChord !== chord) {
      majorScaleChords[this.state.currentKey][this.state.currentChord].stop()
      const chordPlaying = document.getElementById(this.state.currentChord)
      chordPlaying.className = 'switch-container'
      majorScaleChords[this.state.currentKey][chord].start()
      const newChord = document.getElementById(chord)
      newChord.className = 'isPlaying'
      this.setState({currentChord: chord})
    }
  }

  startSequencer() {
    
    const kick = new Tone.Player("./kick-deep.wav").toMaster();
    const snare = new Tone.Player("./snare-analog.wav").toMaster();
    const hat = new Tone.Player("./hihat-808.wav").toMaster();
    let index = 0

    function repeat() {
      let step = index % 8
      let kickInputs = document.querySelector(`#kick${step}`)
      console.log(kickInputs)
      let snareInputs = document.querySelector(`#snare${step}`)
      console.log(snareInputs)
      let hatInputs = document.querySelector(`#hat${step}`)
      if (kickInputs.checked) {
        kick.start();
      }
      if (snareInputs.checked) {
        snare.start();
      }
      if (hatInputs.checked) {
        hat.start();
      }
      index++;
    }

      this.setState({rhythmPlayerStarted: true})
      Tone.Transport.scheduleRepeat(repeat, "8n");
      Tone.Transport.start()
  }

  stopSequencer() {
    Tone.Transport.stop()
    Tone.Transport.cancel()
    Tone.Transport.clear()
  }

  changeKeyHandler(direction) {
    if (this.state.currentChord) {
      majorScaleChords[this.state.currentKey][this.state.currentChord].stop()
      const chordPlaying = document.getElementById(this.state.currentChord)
      chordPlaying.className = 'switch-container'
      this.setState({currentChord: ''})
    }
    let currentKeyIndex = this.state.keyOptions.indexOf(this.state.currentKey)
    let nextKey
    if (direction === 'up') {
      if (currentKeyIndex + 1 === this.state.keyOptions.length) {
        this.setState({currentKey: 'C'})
      } else {
        this.setState((state) => {
          nextKey = state.keyOptions[currentKeyIndex + 1]
          return {currentKey: nextKey}
        })
      }
    } else {
      if (currentKeyIndex - 1 < 0) {
        this.setState({currentKey: 'B'})
      } else {
        this.setState((state) => {
          nextKey = state.keyOptions[currentKeyIndex - 1]
          return {currentKey: nextKey}
        })
      }
    }
  }

  render() {
    console.log(this.state)
    const majorScaleChordKeys = Object.keys(majorScaleChords[this.state.currentKey])
    const rhytmButtonText = this.state.rhythmComponent === 'player' ? 'Make Your Own Rythm!' : 'Choose a Rhythm'
    
    return (
      <div>
      <h1>CLICK-CHORD</h1>
      <button className="rythm-button" onClick={this.togglePlayer}>{rhytmButtonText}</button>
      { this.state.rhythmComponent === 'player' ? <RythmPlayer
      start={this.start}
      forward={this.forward}
      back={this.back}
      rythmPlaying={this.state.rythmPlaying}
      pause={this.pause}
      /> :
      <RythmMaker startSequencer={this.startSequencer}
      stopSequencer={this.stopSequencer}
      />
      }
      <ChangeKey displayKey={this.state.currentKey} changeKey={this.changeKeyHandler} />
      <div style={{textAlign: 'center', margin: '25px auto 0'}}>
      <h3 className="synth-header">SYNTH</h3>
      </div>
      <div className='main-switch-frame'>
        <div className="switch-flex">
          {
            majorScaleChordKeys.map(chord => {
              return <Toggle key={chord} chordName={chord} handleToggle={this.handleToggle} />
            })
          }
        </div>
      </div>
      </div>
    )
  }
}
