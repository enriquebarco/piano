import React from 'react'
import uniqid from 'uniqid'

function pianoSet({ set }) {
  return (
    <div className="piano-set">
      {set.map((key) => <div key={uniqid} className={key.name}></div>)}
    </div>
  )
}

export default pianoSet