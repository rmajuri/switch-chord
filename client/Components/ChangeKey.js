import React from 'react'

const ChangeKey = props => {
  return (
      <div className='change-key-container'>
          <i className="fas fa-sort-up" onClick={() => props.changeKey('increase')}></i>
          <h4 style={{fontSize: '20px', margin: '0'}}>{props.displayKey}</h4>
          <i className="fas fa-sort-down" onClick={() => props.changeKey('decrease')}></i>
      </div>
  )
}

export default ChangeKey