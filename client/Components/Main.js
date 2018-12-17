import React from 'react'
import cMajorScaleChords from '../chords.js'
import Toggle from './Toggle'
import RythmPlayer from './RythmPlayer'

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
    this.start = this.start.bind(this)
  }

  start() {
    AUDIO.src = "Bouncy.ogg"
    AUDIO.load()
    AUDIO.play()
  }

  forward() {
    const { songList, currentSongId } = this.state
    const currentSongIdx = songList.map(song => song.id).indexOf(currentSongId)
    const nextSongIdx = currentSongIdx + 1
    if (nextSongIdx >= songList.length) {
      AUDIO.pause()
      AUDIO.src = ''
      this.setState({
        songIsPlaying: false,
        currentSongId: 0,
        songList: []
      })
    } else {
      AUDIO.pause()
      this.start(songList[nextSongIdx], songList)
    }
  }
  backward() {
    const { songList, currentSongId } = this.state
    const currentSongIdx = songList.map(song => song.id).indexOf(currentSongId)
    const nextSongIdx = currentSongIdx - 1
    if (nextSongIdx < 0) {
      AUDIO.pause()
      AUDIO.src = ''
      this.setState({
        songIsPlaying: false,
        currentSongId: 0,
        songList: []
      })
    } else {
      AUDIO.pause()
      this.start(songList[nextSongIdx], songList)
    }
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
      <h1>CLICK-CHORD</h1>
      <RythmPlayer start={this.start} />
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
