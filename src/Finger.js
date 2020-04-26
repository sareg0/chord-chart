import React from 'react'

const Finger = ({xCoord, yCoord, fingerNumber}) => {
  return (
    <circle id={`finger-${fingerNumber}`} cx={`${xCoord}`} cy={`${yCoord}`} r="20" fill="orange"/>
  )
}

export default Finger