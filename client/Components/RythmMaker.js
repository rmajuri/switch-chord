import React from 'react'
import sequencer from '../Rythm'

const RythmMaker = () => {
    sequencer()
  return (
    <div className="rythm-maker">
    <h1>Music Maker</h1>
    <div className="drums">
        <div className="kick">
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>

        </div>
        <div className="snare">
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
            <input type="checkbox"/>
        </div>
    </div>
    </div>
  )
}

export default RythmMaker
