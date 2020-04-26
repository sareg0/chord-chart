import React, { useState } from 'react';
import './App.css';
import FretBoard from './FretBoard'

// import {BrowserRouter as Router, Switch, Router, Link} from 'react-router-dom'
import Chords from './uke-chords'
// const chords = require('./uke-chords.json')


function App() {
  debugger
  const [selectedChord, setSelectedChord] = useState(Chords[0])
  const handleChordChange = (chord) => {
    console.log('change chord')
    //find chord from 'chords'
    setSelectedChord(Chords.find(chord => chord.id === chord))
  }

  return (
    <>
      <h2>{selectedChord.name}</h2>
      <FretBoard chord={selectedChord} size="lg" />
      <div style={{display: 'flex', width: '100%'}}>
        {Chords.map((chord) => <FretBoard key={chord.id} chord={chord} size="sm" handleChordChange={handleChordChange} />)}
      </div>
    </>
    // <Router>
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <Switch></Switch>
    //       {chords.map((chord) => {
    //         return (
    //           <>
    //             <Link to={`/${chord.name}`}>{chord.name}</Link>
    //             <Switch>
    //               {chord.characteristics.map((characteristic) => {
    //                 return (
    //                   <Route path={`/${chord.name}`}>
    //                     <div style={{height: '20px', width: '20px'}}>
    //                       <Circle />
    //                     </div>
    //                     <p>{characteristic.fret}, {characteristic.string}, {characteristic.finger}</p>
    //                   </Route>
    //                 )
    //               })}
    //             </Switch>
    //           </> 
    //         )
    //       })}
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>
    // </Router>
  );
}

export default App;
