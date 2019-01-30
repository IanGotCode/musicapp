import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const authenticatedOptions = (
  <React.Fragment>
    <Link to="/change-password">Change Password</Link>
    <Link to="/sign-out">Sign Out</Link>
    <Link to='/create'>Audio Save</Link>
    <Link to='/delete'>Delete</Link>
    <Link to='/update'>Update</Link>
    <Link to='/index'>Index</Link>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <Link to="/sign-up">Sign Up</Link>
    <Link to="/sign-in">Sign In</Link>
  </React.Fragment>
)

// const audioSave = (
//   <React.Fragment>
//     <Link to='/body'>Audio Save</Link>
//   </React.Fragment>
// )

const Header = ({ user }) => (
  <header className="main-header">
    <h1>Audio Save</h1>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
    </nav>
  </header>
)



export default Header
