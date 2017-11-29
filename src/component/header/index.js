import './header.scss'
import '../../vendor/styles/icon.scss'

import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {
  render(){
    return (
      <header className='d-flex justify-content-center align-items-center header'>
        <nav className='d-flex justify-content-center align-items-center'>
          <ul className='d-flex justify-content-center'>
            <li className='col-6 d-flex justify-content-start align-items-start logo'> <Link target="_blank" className="icon-cool" to='/'></Link></li>
            <li className='col-2 d-flex justify-content-center align-items-center'> <Link to='/login'> Login </Link> </li>
            <li className='col-2 d-flex justify-content-center align-items-center'> <Link to='/signup'> Signup </Link> </li>
          </ul>
        </nav>
      </header>
    )
  }
}

export default Header
