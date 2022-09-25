import React from 'react'
import PianoSet from './PianoSet';
import uniqid from 'uniqid';



function PianoContainer() {

    const pianoSets = [
        [{name: 'white-key'}, {name: 'white-key'}, {name: 'white-key'}, {name: 'black-key bk1'},{name: 'black-key bk2'}],
        [{name: 'white-key'}, {name: 'white-key'},{name: 'white-key'},{name: 'white-key'}, {name: 'black-key bk1'},{name: 'black-key bk2'},{name: 'black-key bk3'}, {name: 'black-key bk4'}],
        [{name: 'white-key'}, {name: 'white-key'}, {name: 'white-key'}, {name: 'black-key bk1'},{name: 'black-key bk2'}],
    ];
  return (
    <div className="piano-container">
        {pianoSets.map((set) => <PianoSet key={uniqid} set={set}/>)}
    </div>
  )
}

export default PianoContainer;