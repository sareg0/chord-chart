import React from 'react'
import Finger from './Finger'
import FretBoard from './FretBoard'


const AnimatedFretBoard = ({chord, lastChord, size, handleChordChange}) => {
  //has more complex state knows about the last chord and the current chord
  //animate from last chord to current chord
  return (
    <FretBoard chord={chord} size={size} lastChord={lastChord} />
  )
}

//TODO: proptypes
//TODO: add tests

export default AnimatedFretBoard
