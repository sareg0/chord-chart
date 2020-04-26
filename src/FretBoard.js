import React from 'react'
import Finger from './Finger'

//future feature. The fretboard should be generative too

// "characteristics": [
//   {
//     "fret": 1,
//     "string": 2,
//     "finger": 1
//   },
// ]

const strings = {
  "1": 0,
  "2": 40,
  "3": 80,
  "4": 120,
}

const frets = {
  "1": 35,
  "2": 85,
  "3": 135,
  "4": 185,
}

const boardWidths = {
  "sm": '100',
  "lg": '300'
}

//size will be used to determine the width of the fretboard
//so it can be either teeny tiny OR big

const FretBoard = ({chord, size, handleChordChange}) => {
  return (
    <a href="#" onClick={() => handleChordChange(chord.id)}>

<svg 
    width={`${boardWidths[size]}`}
    viewBox="-20 0 202 209" 
    xmlns="http://www.w3.org/2000/svg">
    <rect 
        x="1"
        y="0"
        width="120" 
        height="7" 
        style={{fill: 'black', stroke: 'black', strokeWidth: 2 }}
    /> 
    <g transform="translate(0, 7)"> 
        <rect 
            x="1"
            y="0"
            width="120" 
            height="200" 
            style={{fill: 'white', stroke: 'black', strokeWidth: 2 }}
         />
        <g id="fret-bars" stroke="black" stroke-width="2">
            <line x1="0" y1="50" x2="120" y2="50" />
            <line x1="0" y1="100" x2="120" y2="100" />
            <line x1="0" y1="150" x2="120" y2="150" />
        </g>
        <g id="strings" stroke="black">
            <line x1="40" y1="0" x2="40" y2="200" />
            <line x1="80" y1="0" x2="80" y2="200" />
        </g>
    </g>
    {
      chord.characteristics.map((characteristic) => {
        const string = characteristic.string.toString()
        const fret = characteristic.fret.toString()
        return (
          <Finger 
            key={`finger-${characteristic.finger}`} 
            fingerNumber={characteristic.finger}
            xCoord={strings[string]} //determined by the string
            yCoord={frets[fret]} //determined by the fre
          />
        )
      })
    }
</svg>
    </a>
  )
}

export default FretBoard
