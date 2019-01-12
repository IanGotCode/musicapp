import React, { Component } from 'react'
import './Body.scss'





export class Body extends Component {
  render() {
    return (
      <div>
        <h3 className='youTube'>YouTube Link</h3>
        <form className='upload'>
          Artist: <input type='text' placeholder='Aritst'></input><br></br>
          Title: <input type='text' placeholder='Title of Song'></input><br></br>
          Link: <input type='text' placeholder='Link Url'></input><br></br>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    )
  }
}



export default Body
