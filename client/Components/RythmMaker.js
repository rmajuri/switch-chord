import React, {Component} from 'react'

class RythmMaker extends Component {

    constructor() {
        super()

    }

    componentDidMount() {
      this.props.sequencer()
    }

    // shouldComponentUpdate() {
    //   if (this.state.rythmMakerStarted) {
    //       return false
    //   }
    // }

  render () {
  const drumSteps = new Array(8).fill('_')
  const kicks = drumSteps.map((step, i ) => {
      return (<input style={{margin: '10px 30px', height: '20px', position: 'relative', display: 'inline-block'}} type='checkbox' key={'kick '+ i} id={'kick' + i} />)
  })
  const snares = drumSteps.map((step, i ) => {
      return (<input style={{backgroundColor: '#FFBAF2', margin: '10px 30px', height: '20px', position: 'relative', display: 'inline-block'}} type='checkbox' key={'snare '+ i} id={'snare' + i}  />)
  })

  return (
    <div className="rythm-maker">
    <h1 className="rythm-maker-header">Music Maker</h1>
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
