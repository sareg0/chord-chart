import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const changeChord = (wasAtX, wasAtY, goingToX, goingToY) => {
  const moveX = wasAtX - goingToX
  const moveY = wasAtY - goingToY
  if (wasAtX && wasAtY && goingToX && goingToY) {
    return (
      keyframes`
      0% { transform: translateX(0) translateY(0); }
      100% { transform: translateX(${moveX}px) translateY(${moveY}px); }
      `
      // keyframes`
      // 0% { fill: pink; }
      // 100% { fill: orange; }
      // `
    )
  } else {
    return 
  }
  
} 

const animation = props => {
  const something = changeChord(props.wasAtX, props.wasAtY, props.goingToX, props.goingToY)
  return (
    css`${something} 2s infinite;`
  )
}

//if you want ot use the css prop with styled components you need to enable the babel plugin
const Circle = styled.circle`
  fill: ${props => props.color};
  animation: ${animation};
`

const Text = styled.text`
  fill: "white";
  animation: ${animation};
`

const Finger = ({wasAtX, wasAtY, goingToX, goingToY, fingerNumber, color="green"}) => {
  return (
    <g>
      <Circle color={color} id={`finger-${fingerNumber}`} goingToX={goingToX} goingToY={goingToY} wasAtX={wasAtX} wasAtY={wasAtY} cx={`${goingToX}`} cy={`${goingToY}`} r="20"/>
      <Text x={`${goingToX}`} y={`${goingToY}`}>{fingerNumber}</Text>
    </g>
  )
}

export default Finger