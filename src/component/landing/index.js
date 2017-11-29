import './landing.scss'

import React from 'react'
import SignUp from '../signup'
import LogIn from '../login'
import {connect} from 'react-redux'
import * as util from '../../lib/util.js'
import * as auth from '../../action/auth.js'

class Landing extends React.Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  handleLogin(user){
    this.props.login(user)
      .catch(console.error)
  }

  handleSignup(user){
    this.props.signup(user)
      .catch(console.error)
  }

  render(){

    let {
      location,
    } = this.props

    return (
      <div className='container landing'>
        <h1>Landing</h1>
        {util.renderIf(location.pathname === '/login', <LogIn onComplete={this.handleLogin} />)}
        {util.renderIf(location.pathname === '/signup', <SignUp onComplete={this.handleSignup} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
})

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(auth.signup(user)),
  login: (user) => dispatch(auth.login(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
