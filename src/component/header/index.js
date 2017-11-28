import './header.scss'

import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render(){
    return (
      <header className='header'>
        <nav className='container-fluid'>
          <ul className='row'>
            <li className='col-6'> <h1>LOGO</h1> </li>
            <li className='col'> <Link to='/'> Home </Link> </li>
            <li className='col'> <Link to='/login'> Login </Link> </li>
            <li className='col'> <Link to='/signup'> Signup </Link> </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
