import './footer.scss'

import React from 'react'

class Footer extends React.Component {
  render(){
    return (
      <footer className='d-flex justify-content-center align-items-center footer'>
        <nav className='d-flex justify-content-center align-items-center icons'>
          <ul className='d-flex justify-content-center'>
            <li className='col-2'><a href="https://www.linkedin.com/in/markhangarter/" target="_blank" className="icon-linkedin"></a></li>
            <li className='col-2'><a href="https://www.facebook.com/mark.hangarter?ref=bookmarks" target="_blank" className="icon-facebook"></a></li>
            <li className='col-2'><a href="https://twitter.com/Yokcamackoy" target="_blank" className="icon-twitter"></a></li>
            <li className='col-2'><a href="https://github.com/Mackoyokcam" target="_blank" className="icon-github"></a></li>
          </ul>
        </nav>
      </footer>
    )
  }
}

export default Footer
