import React from 'react'

function Text({UpdateState,Text}) {
  return (
    <div>
      <input type="text" onChange={UpdateState} value={Text}/>
    </div>
  )
}

export default Text
