import React from 'react'
import './Audio.scss'

const AudioShow = props => {
  const audios = props.audios
  console.log('In AudioShow and audios is ', audios)
  const Audio = audios.map((audio, show) => {
    return <div key={ show }>
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




export default AudioShow
