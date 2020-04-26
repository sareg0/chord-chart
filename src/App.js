import React, { useState } from 'react';
import './App.css';
import FretBoard from './FretBoard'

import { chords } from './uke-chords'

function App() {
  const [selectedChordId, setSelectedChordId] = useState(chords[0].id)
  const chord = chords.find(chord => chord.id === selectedChordId)

  return (
    <>
      <h2>{chord.name}</h2>
      <FretBoard chord={chord} size="lg" />
      <div style={{display: 'flex', width: '100%'}}>
        {chords.map((chord) => <FretBoard key={chord.id} chord={chord} size="sm" handleChordChange={setSelectedChordId} />)}
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
