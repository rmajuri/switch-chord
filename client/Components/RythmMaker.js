import React, {Component} from 'react'

class RythmMaker extends Component {

    constructor() {
        super()

     this.toggleCheckedColor = this.toggleCheckedColor.bind(this)
    }

    componentDidMount() {
      this.props.sequencer()
    }

    toggleCheckedColor(targetedInput) {
      const clickedDrum = document.querySelector(`#${targetedInput}`)
      if (clickedDrum.className === 'drum-checkbox-clicked') {
          clickedDrum.className = 'drum-checkbox'
      } else {
        clickedDrum.className = 'drum-checkbox-clicked'
      }

    }
    // shouldComponentUpdate() {
    //   if (this.state.rythmMakerStarted) {
    //       return false
    //   }
    // }

  render () {
  const drumSteps = new Array(8).fill('_')
  const kicks = drumSteps.map((step, i ) => {
      return (<label key={'kick-label' + i} className="check-container"><span key={'kick-span' + i} className="drum-checkbox" id={'kick' + i + 'span'}><input type="checkbox" id={'kick' + i} onClick={() => this.toggleCheckedColor('kick' + i + 'span')}/></span></label>)
  })
  const snares = drumSteps.map((step, i ) => {
      return (<label key={'snare-label' + i} className="check-container"><span key={'snare-span' + i} className="drum-checkbox"><input type='checkbox' key={'snare '+ i} id={'snare' + i} onClick={() => this.toggleCheckedColor('kick' + i + 'span')}/></span></label>)
  })

  return (
    <div className="rythm-maker">
    <h1 className="rythm-maker-header">Rythm Maker</h1>
    <div className="kick-container">
        <div>
            {kicks}
        </div>
        <div className="snare-container">
            {snares}
        </div>
    </div>
    </div>
  )
  }
}

export default RythmMaker
