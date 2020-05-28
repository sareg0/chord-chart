import React, { useState, useEffect } from 'react';
import './App.css';
import FretBoard from './FretBoard'
import AnimatedFretBoard from './AnimatedFretBoard'
import { Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom'

import chords from './uke-chords.json'


function App() {
  let { chordId } = useParams() 
  const [selectedChordId] = useState(chordId ? chordId : chords[0].id)
  
  const [lastSelectedChordId, setLastSelectedChordId] = useState(chords[1].id)
  let match = useRouteMatch() 
  const chord = chords.find((chord) => chord.id === selectedChordId)
  debugger
  const lastChord = chords.find(chord => chord.id === lastSelectedChordId)

  return (
    <>
      <h2>{chord.name}</h2>
      <Switch>
          <Route path={`/:chordId`}>
            <FretBoard chord={chord} size="lg"/>
          </Route>
        </Switch>
      <div style={{display: 'flex', width: '100%'}}>
        {chords.map((chord) => {
          return (
            <Link to={`/${chord.id}`}>
              <FretBoard key={chord.id} chord={chord} size="sm" />)
            </Link>
          )
        })}

      </div>
    </>
  );
}

export default App;
