import React from 'react'
import { Link } from 'react-router'

class Landing extends React.Component {

  render () {

    const landingStyle = {
      fontSize : '60px',
      color : '#ffffff'
    }

    return (
      <div className='container'>
        <div className='landing'>
          <div className='outer'>
            <div className='inner'>
              <Link to='/memberin' style={landingStyle}>xyz</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default Landing

// <form action='/upload' method='post' encType='multipart/form-data'>
// <input type='file' name='uploadDress' placeholder="" />
// <input type='submit' />
// </form>