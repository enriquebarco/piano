import React from 'react'
import PianoSet from './PianoSet';
import uniqid from 'uniqid';



function PianoContainer() {

    const pianoSets = [
        [{name: 'white-key', note: 'C3'}, {name: 'white-key', note: 'D3'}, {name: 'white-key', note: 'E3'}, {name: 'black-key bk1', note: 'C#3'},{name: 'black-key bk2', note: 'D#3'}],
        [{name: 'white-key', note: 'F3'}, {name: 'white-key', note: 'G3'},{name: 'white-key', note: 'A3'},{name: 'white-key', note: 'B3'}, {name: 'black-key bk1', note: 'F#3'},{name: 'black-key bk2', note: 'G#3'},{name: 'black-key bk3', note: 'A#3'}],
        [{name: 'white-key', note: 'C4'}, {name: 'white-key', note: 'D4'}, {name: 'white-key', note: 'E4'}, {name: 'black-key bk1', note: 'C#4'},{name: 'black-key bk2', note: 'D#4'}],
    ];
  return (
    <div className="piano-container">
        {pianoSets.map((set) => <PianoSet key={uniqid} set={set}/>)}
    </div>
  )
}

export default PianoContainer;