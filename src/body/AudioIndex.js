import React from 'react'

const AudioIndex = props => {
  const audios = props.audios
  const Audio = audios.map((audio, index) => {
    return <div key={ index }>
      <h3>{ audio.title } (ID: { audio.id })</h3>

      <ul>
        <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + audio.title.split('=')[1]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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