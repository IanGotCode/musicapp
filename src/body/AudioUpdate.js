import React, { Component } from 'react'

import { axiosPatchAudio } from './audioApi'

export default class AudioUpdate extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id:'',
      title: '',
      artist: ''
    }
  }

  componentDidMount () {
    const firstAudioId = this.props.audios[0].id
    this.changeMovieData(firstAudioId)
  }

  changeAudioData = id => {
    const audio = this.props.audios.find(audio => String(audio.id) === String(id))
    this.setState({
      title: audio.title || '',
      artist: audio.artist || '',
      id: audio.id || ''
    })
  }

  handleInputChange = event => {
    const { name, value } = event.target
    if (name === 'id') {
      this.changeAudioData(value)
    } else {
      this.setState({ [name]: value })
    }
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
    // patchMovie(data, this.props.user)
    //   .then(res => res.ok ? res : new Error())
    //   .then(() => this.props.flash('Fixed the movie, z', 'flash-success'))
    //   .then(this.clearForm)
    //   .catch(() => console.error('oh no got an error'))

    axiosPatchAudio(data, this.props.user)
      .then(() => this.props.flash('Audio Updated', 'flash-success'))
      .then(this.clearForm)
      .then(this.props.getAllAudio)
      .catch(() => console.error('oh no got an error'))
  }

  
  render() {

    const SelectOptions = props.audios.map((audio, index) => {
      return<option key={ index } value={ audio.id }>{ audio.title } (ID: { audio.id })</option>
    })

    return (
      <form 
        className="audio-form"
        onSubmit={ this.handleFormSubmit }>
        <h3>Update Audio</h3>

        <label htmlFor="id">Id</label>
        <select 
          name="id"
          onChange={ this.handleInputChange }>
          { SelectOptions }
        </select>

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
        
        <button type="submit">Update Audio</button>

      </form>
    )
  }
}
