import './profile-form.scss'

import React from 'react'

import * as util from '../../lib/util.js'

let emptyState = {
  name: '',
  nameDirty: false,
  nameError: 'Name is required.',
  street: '',
  streetDirty: false,
  streetError: '',
  city: '',
  cityDirty: false,
  cityError: '',
  state: '',
  stateDirty: false,
  stateError: '',
  zip: '',
  zipDirty: '',
  zipError: '',
}

class ProfileForm extends React.Component {
  constructor(props){
    super(props)
    this.state = props.profile ? {...emptyState, ...props.profile} : emptyState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(props){
    if(props.profile)
      this.setState(props.profile)
  }

  handleChange(e){
    let {value, name, type} = e.target
    value = type === 'number' ? Number(value) : value
    value = value === 0 ? '' : value
    this.setState({
      [name]: value,
      [`${name}Dirty`]: true,
      [`${name}Error`]: value ? null : emptyState[`${name}Error`],
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState(emptyState)
  }


  render(){
    return (
      <form
        className='container profile-form'
        onSubmit={this.handleSubmit}>

        <div className='row'>
          <input
            className='col-2'
            type='text'
            name='name'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleChange}
          />
          <p className='col-2 error'>{this.state.nameDirty ? this.state.nameError : undefined}</p>
        </div>

        <div className='row'>
          <input
            className='col-2'
            type='text'
            name='street'
            placeholder='Street'
            value={this.state.street}
            onChange={this.handleChange}
          />
          <p className='col-2 error'>{this.state.streetDirty ? this.state.streetError : undefined}</p>
        </div>

        <div className='row'>
          <input
            className='col-2'
            type='text'
            name='city'
            placeholder='City'
            value={this.state.city}
            onChange={this.handleChange}
          />
          <p className='col-2 error'>{this.state.cityDirty ? this.state.cityError : undefined}</p>
        </div>

        <div className='row'>
          <input
            className='col-2'
            type='text'
            name='state'
            placeholder='State'
            value={this.state.state}
            onChange={this.handleChange}
          />
          <p className='col-2 error'>{this.state.stateDirty ? this.state.stateError : undefined}</p>
        </div>

        <div className='row'>
          <input
            className='col-2'
            type='text'
            name='zip'
            placeholder='Goal'
            value={this.state.donationGoal}
            onChange={this.handleChange}
          />
          <p className='col-2 error'>{this.state.zipDirty ? this.state.zipError : undefined}</p>
        </div>
        
        <button type='submit'> {this.props.profile ? 'Update' : 'Create'} profile </button>
      </form>
    )
  }
}

export default ProfileForm
