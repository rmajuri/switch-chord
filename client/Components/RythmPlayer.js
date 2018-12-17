import React from 'react'

export default function RythmPlayer (props) {
  const { pause, resume, rythmPlaying, forward, backward } = props
  return (
  <div id='player-container'>
  <div id='player-controls'>
  <div className='row center'>
    <i className='fa fa-step-backward' onClick={backward} />
    <i
    className={rythmPlaying ? 'fa fa-pause-circle' : 'fa fa-play-circle'}
    onClick={rythmPlaying ? pause : resume}
    />
    <i className='fa fa-step-forward' onClick={forward} />
  </div>
  </div> 
  </div>
  );
}