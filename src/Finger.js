import React from 'react'
import styled, { css, keyframes } from 'styled-components'

const changeChord = (wasAtX, wasAtY, goingToX, goingToY) => {
  //if x or y are zero one should add, never subtract or convert
  const moveX = wasAtX - goingToX
  const moveY = wasAtY - goingToY
  const animate = typeof moveX === "number" && typeof moveY === "number"  
  if (animate) {
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
    console.log('dont animate plz')
    return 
  }
  
} 

const animation = props => {
  const something = changeChord(props.wasAtX, props.wasAtY, props.goingToX, props.goingToY)
  return (
    css`${something} 2s 1;`
  )
}

//if you want ot use the css prop with styled components you need to enable the babel plugin
const Circle = styled.circle`
  fill: ${props => props.color};
  /* animation: ${animation}; */
`

const Text = styled.text`
  fill: "white";
  /* animation: ${animation}; */
`

const Group = styled.g`
  fill: "white";
  animation: ${animation};
`

const Finger = ({wasAtX, wasAtY, goingToX, goingToY, fingerNumber, color="green"}) => {
  //render with originalState, animate, setState
  // const [coordX, setCoordX] = 
  // const [coordY, setCoordY] = 

  return (
    <Group goingToX={goingToX} goingToY={goingToY} wasAtX={wasAtX} wasAtY={wasAtY}>
      <Circle color={color} id={`finger-${fingerNumber}`} cx={`${goingToX}`} cy={`${goingToY}`} r="20"/>
      <text x={`${goingToX}`} y={`${goingToY}`}>{fingerNumber}</text>
    </Group>
  )
}

export default Finger