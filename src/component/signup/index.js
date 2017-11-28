import './signup.scss'

import React from 'react'

let emptyState = {
  username: '',
  email: '',
  password: '',
}

class SignUp extends React.Component {
  constructor(props){
    super(props)
    this.state = emptyState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState(emptyState)
  }

  render(){
    return (
      <form className='container signup' onSubmit={this.handleSubmit}>
        <div className='row'>
          <label className='col-2' htmlFor='username'>Username:</label>
          <input
            className='col'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
            type='text'
          />
        </div>

        <div className='row'>
          <label className='col-2' htmlFor='email'>Email:</label>
          <input
            className='col'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            type='email'
          />
        </div>

        <div className='row'>
          <label className='col-2' htmlFor='password'>Password:</label>
          <input
            className='col'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            type='password'
          />
        </div>
        <div className='row'>
          <span className='col'>Signup using:</span>
          <a className='col' href="https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=http://localhost:3000/oauth/google&scope=openid%20email%20profile&client_id=48225264695-kiope2gkv215v3ostl2rpupgocdjunhc.apps.googleusercontent.com&response_type=code">Google </a>
        </div>
        <button type='submit'> Login </button>
      </form>
    )
  }
}

export default SignUp
