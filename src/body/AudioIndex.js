import React from 'react'

const AudioIndex = props => {
  

  const Audio = props.audios.map((audio, index) => {
    return <div key={ index }>
      <h3>{ audio.title } (ID: { audio.id })</h3>

      <ul>
        <li>title: { audio.title }</li>
        <li>artist: { audio.artist }</li>
      </ul>
    </div>
  })
  return (
    <div>
      { Audio }
    </div>
  )
  
}

export default AudioIndex