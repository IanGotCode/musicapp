import React, { Component } from 'react'
import './Audio.scss'


export class AudioUpdate extends Component {
  
  render() {
    return (
      <div className='container'>
        <form className='form'>
          <legend>Update Youtube Link</legend>
          <fieldset>
            <input placeholder='ID'></input>
            <input placeholder='Title of Song'></input>
            <input placeholder='Artist Name'></input>
            <input type='submit' value='submit'></input>
          </fieldset>
        </form>
      </div>
    )
  }
}



export default AudioUpdate
