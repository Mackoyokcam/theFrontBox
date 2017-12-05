import {rehydrateLocalStorage} from '../lib/redux-persist.js'

export const validateProfile = (profile) => {
  if(!profile)
    throw new Error('profile required')
  let {name} = profile
  if(!name)
    throw new Error('__VALIDATION_ERROR__ invalid profile')
}

let initialState = rehydrateLocalStorage('clientProfile', null)

export default (state=initialState, {type, payload}) => {
  switch(type){
    case 'CLIENT_PROFILE_SET':
      validateProfile(payload)
      return payload
    case 'TOKEN_REMOVE':
      return null
    default:
      return state
  }
}
