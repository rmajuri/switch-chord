import React from 'react'
import cMajorScaleChords from '../chords.js'
import Toggle from './Toggle'

export default class Switches extends React.Component {
  constructor() {
    super()

    this.state = {
      currentChord: ''
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle(event, chord) {
    if (!this.state.currentChord) {
      cMajorScaleChords[chord].start()
      const chordPlaying = document.getElementById(chord)
      chordPlaying.style.backgroundColor = 'blue'
      this.setState({currentChord: chord})
    }
    
    if (this.state.currentChord === chord) {
      cMajorScaleChords[chord].stop()
      this.setState({currentChord: ''})
    }

    if (this.state.currentChord !== chord) {
      cMajorScaleChords[this.state.currentChord].stop()
      cMajorScaleChords[chord].start()
      this.setState({currentChord: chord})
    }
  }

  render() {
    console.log(this.state)
    const CMajorScaleChordKeys = Object.keys(cMajorScaleChords)

    return (
      <div className='main-switch-frame'>
        {
          CMajorScaleChordKeys.map(chord => {
            return <Toggle key={chord} curentChord={this.state.currentChord} chordName={chord} handleToggle={this.handleToggle} />
          })
        }
      </div>
    )
  }
}
