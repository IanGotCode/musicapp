import React, { Component } from 'react'
import './App.scss'
import { Route, Link } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'

import Audio from './body/Audio.js'
import AudioDelete from './body/AudioDelete.js'
import AudioIndex from './body/AudioIndex.js'
import AudioShow from './body/AudioShow.js'
import AudioUpdate from './body/AudioUpdate.js'

import { axiosPostAudio, axiosGetAudiosAuthenticated, axiosPatchAudio } from './body/audioApi'



class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      flashMessage: '',
      flashType: null,
      audios: []
    }
  }

  getAllAudios = () => {
    // getMovies()
    //   .then(res => res.ok ? res : new Error())
    //   .then(res => res.json())
    //   .then(res => this.setState({ movies: res.movies }))
    //   .then(() => this.props.flash('Got them; movies\', Shawn', 'flash-success'))
    //   .catch(() => console.error('oh no got an error'))

    // axiosGetMovies()
    //   .then(res => this.setState({ movies: res.data.movies }))
    //   .then(() => this.props.flash('Got them; movies\', Shawn', 'flash-success'))
    //   .catch(() => console.error('oh no got an error'))

    // getMoviesAuthenticated(this.props.user)
    //   .then(res => res.ok ? res : new Error())
    //   .then(res => res.json())
    //   .then(res => this.setState({ movies: res.movies }))
    //   .then(() => this.props.flash('Got them; movies\', Shawn', 'flash-success'))
    //   .catch(() => console.error('oh no got an error'))

    axiosGetAudiosAuthenticated(this.state.user)
      .then(res => this.setState({ audios: res.data.audios }))
      .then(() => this.flash('Got Audio\', Ian', 'flash-success'))
      .catch((err) => console.error(err))
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  flash = (message, type) => {
    this.setState({ flashMessage: message, flashType: type })

    clearTimeout(this.messageTimeout)

    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null
    }), 2000)
  }

  render () {
    const { flashMessage, flashType, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {flashMessage && <h3 className={flashType}>{flashMessage}</h3>}
        
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp flash={this.flash} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn flash={this.flash} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut flash={this.flash} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute 
            user={user} 
            path='/create' render={() => (
              <Audio 
                audios={this.state.audios}
                flash={this.flash} 
                user={user} />
            )} />
          <AuthenticatedRoute 
            user={user} 
            path='/index' render={() => (
              <AudioIndex 
                audios={this.state.audios}
                flash={this.flash} 
                user={user} />
            )} />
          <AuthenticatedRoute user={user} path='/delete' render={() => (
            <AudioDelete flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/update' render={() => (
            <AudioUpdate flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/show' render={() => (
            <AudioShow flash={this.flash} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/index' render={() => (
            <AudioIndex flash={this.flash} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
