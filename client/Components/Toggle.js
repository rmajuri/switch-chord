import React from 'react'

export default function Toggle(props) {
  
  const { chordName, handleToggle } = props
    return (
        <div id={chordName} onClick={(event) => handleToggle(event, chordName)} className='switch-container'>
          <h6>{chordName}</h6>
        </div>
    )
}
