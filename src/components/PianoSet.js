import React from 'react'
import uniqid from 'uniqid'
import * as Tone from 'tone'

function pianoSet({ set }) {
  const synth = new Tone.Synth().toDestination();
  

  return (
    <div className="piano-set">
      {set.map((key) => <div key={uniqid} onMouseDown={() => synth.triggerAttack("C4")} onMouseUp={() => synth.triggerRelease()} className={key.name}></div>)}
    </div>
  )
}

export default pianoSet