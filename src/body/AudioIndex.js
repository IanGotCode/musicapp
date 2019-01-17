import React, { Component } from 'react'
import './Audio.scss'


export class AudioIndex extends Component {
  
  render() {
    return (
      <div className='container'>
        <form className='form'>
          <legend>Index Youtube Link</legend>
          <fieldset>
            <input placeholder='ID'></input>
            <input type='submit' value='submit'></input>
          </fieldset>
        </form>
      </div>
    )
  }
}



export default AudioIndex