import React from 'react'
import AudioShow from './AudioShow.js'
// import { Link } from 'react-router-dom'

const AudioIndex = props => {
  const audios = props.audios
  const audioJsx = audios.map((audio, index) => {
    return <div key={ index }>
      {/* <Link to='/show/id/title/artist'>Show</Link> */}
      <AudioShow id={audio.id} title={audio.title} artist={audio.artist} />
    </div>
  })
  return (
    <div>
      { audioJsx }
    </div>
  )
  
}

export default AudioIndex