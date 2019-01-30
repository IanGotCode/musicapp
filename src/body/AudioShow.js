import React from 'react'

const AudioShow = props => {
  return (
    <div>
      <h3>{ props.title } (ID: { props.id })</h3>

      <ul>
        <iframe width="560" height="315" src={'https://www.youtube.com/embed/' + props.title.split('=')[1]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        <li>title: { props.title }</li>
        <li>artist: { props.artist }</li>
      </ul>
    </div>
  )
}

export default AudioShow