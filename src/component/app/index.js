import './app.scss'

import React from 'react'
import {connect} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from '../landing'
import Header from '../header'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className='container h-100 app'>
        <BrowserRouter>
          <div className='container-fluid route-component-container'>
            <Header />
            <main>
              <Route exact path='/' component={Landing} />
              <Route exact path='/login' component={Landing} />
              <Route exact path='/signup' component={Landing} />
            </main>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loggedIn: !!state.token,
})

export default connect(mapStateToProps)(App)
