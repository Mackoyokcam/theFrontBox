import './app.scss'

import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Landing from '../landing'

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div className='app'>
        <h1>App</h1>
        <BrowserRouter>
          <div className='route-component-container'>
            <main>
              <Route exact path='/' component={Landing} />
            </main>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
