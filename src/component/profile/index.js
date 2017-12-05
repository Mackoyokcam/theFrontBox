import './profile.scss'

import React from 'react'
import {connect} from 'react-redux'

import * as clientProfile from '../../action/client-profile.js'

import ProfileForm from '../profile-form'

class Profile extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false,
    }

    this.handleCreate = this.handleCreate.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleCreate(profile){
    this.props.profileCreate(profile)
      .then(() => {
        this.props.history.push('/locate')
      })
  }

  handleUpdate(profile){
    this.props.profileUpdate(profile)
    this.setState({editing: false})
  }

  render(){
    let {
      profile,
    } = this.props

    return (
      <div className='profile'>
        <p>Profile</p>
        {profile ?
          <p>Name: {profile.name}</p>
          :
          <ProfileForm onComplete={this.handleCreate} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.clientProfile,
})

const mapDispatchToProps = (dispatch) => ({
  profileCreate: (profile) => dispatch(clientProfile.create(profile)),
  profileUpdate: (profile) => dispatch(clientProfile.update(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
