import React from 'react'
import cMajorScaleChords from '../chords.js'
import Toggle from './Toggle'

const AUDIO = document.createElement('audio')

export default class Switches extends React.Component {
  constructor() {
    super()

    this.state = {
      currentChord: '',
      currentRythmId: 0,
      rythmPlaying: false,
      rythmList: []
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  start(song) {
    AUDIO.src = song.audioUrl
    AUDIO.load()
    AUDIO.play()
    this.setState({
      currentSongId: song.id,
      songIsPlaying: true,
      songList
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
      <header>
      <h1 className="triangle">CLICK-CHORD</h1>
      </header>
      <div className='main-switch-frame'>
        {
          CMajorScaleChordKeys.map(chord => {
            return <Toggle key={chord} curentChord={this.state.currentChord} chordName={chord} handleToggle={this.handleToggle} />
          })
        }
      </div>
      </div>
    )
  }
}
