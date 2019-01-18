import React, { Component } from 'react'
import { axiosPostAudio } from './audioApi'
import './Audio.scss'

export default class Audio extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      title: '',
      artist: ''
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  clearForm = () => {
    this.setState(prevState => {
      const nextState = {}
      for(const key in prevState) {
        nextState[key] = ''
      }
      return nextState
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    const data = { ...this.state }
    // postAudio(data, this.props.user)
    //   .then(res => res.ok ? res : new Error())
    //   .then(() => this.props.flash('Made Audio', 'flash-success'))
    //   .then(this.clearForm)
    //   .catch(() => console.error('oh no got an error'))

    axiosPostAudio(data, this.props.user)
      .then(() => this.props.flash('Made Audio', 'flash-success'))
      .then(this.clearForm)
      .then(this.props.getAllAudio)
      .catch(() => console.error('oh no got an error'))
  }

  
  render() {
    return (
      <form 
        className="audio-form"
        onSubmit={ this.handleFormSubmit }>
        <h3>Create Audio</h3>

        <label htmlFor="title">Title</label>
        <input 
          name="title"
          value={ this.state.title }
          onChange={ this.handleInputChange } />
        
        <label htmlFor="artist">Artist</label>
        <input 
          name="artist"
          value={ this.state.artist }
          onChange={ this.handleInputChange } />
          
        <button type="submit">Create Audio</button>

      </form>
    )
  }
}



