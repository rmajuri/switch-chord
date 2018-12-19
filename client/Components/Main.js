import React from 'react'
import cMajorScaleChords from '../chords.js'
import Toggle from './Toggle'
import RythmPlayer from './RythmPlayer'
import Tone from 'tone'
const AUDIO = document.createElement('audio')

export default class Switches extends React.Component {
  constructor() {
    super()

    this.state = {
      currentChord: '',
      currentRythm: '',
      rythmPlaying: false,
      rythmList: ['club.ogg', 'mellow.ogg', 'oldschool.ogg', 'rock.ogg', 'roll.ogg', 'waltz.ogg']
    }

    this.handleToggle = this.handleToggle.bind(this)
    this.start = this.start.bind(this)
    this.forward = this.forward.bind(this)
    this.back = this.back.bind(this)
    this.pause = this.pause.bind(this)
    this.resume = this.resume.bind(this)
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
      cMajorScaleChords[chord].start()
      const chordPlaying = document.getElementById(chord)
      chordPlaying.className = 'isPlaying'
      this.setState({currentChord: chord})
    }
    
    if (this.state.currentChord === chord) {
      cMajorScaleChords[chord].stop()
      const chordPlaying = document.getElementById(chord)
      chordPlaying.className = 'switch-container'
      this.setState({currentChord: ''})
    }

    if (this.state.currentChord && this.state.currentChord !== chord) {
      cMajorScaleChords[this.state.currentChord].stop()
      const chordPlaying = document.getElementById(this.state.currentChord)
      chordPlaying.className = 'switch-container'
      cMajorScaleChords[chord].start()
      const newChord = document.getElementById(chord)
      newChord.className = 'isPlaying'
      this.setState({currentChord: chord})
    }
  }

  render() {
    console.log(this.state)
    const CMajorScaleChordKeys = Object.keys(cMajorScaleChords)

    return (
      <div>
      <h1 onClick={this.c}>CLICK-CHORD</h1>
      <RythmPlayer
      start={this.start}
      forward={this.forward}
      back={this.back}
      rythmPlaying={this.state.rythmPlaying}
      pause={this.pause}
      />
      <div className='main-switch-frame'>
        {
          CMajorScaleChordKeys.map(chord => {
            return <Toggle key={chord} chordName={chord} handleToggle={this.handleToggle} />
          })
        }
      </div>
      </div>
    )
  }
}
