import React, { Component } from 'react'
import './Audio.scss'


export class AudioDelete extends Component {
  
  render() {
    return (
      <div className='container'>
        <form className='form'>
          <legend>Delete Youtube Link</legend>
          <fieldset>
            <input placeholder='ID'></input>
            <input type='submit' value='submit'></input>
          </fieldset>
        </form>
      </div>
    )
  }
}



export default AudioDelete