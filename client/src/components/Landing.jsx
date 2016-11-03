import React from 'react'
import { Link } from 'react-router'
import { Grid, Icon } from 'semantic-ui-react'

class Landing extends React.Component {

  render () {

    const activeLandingStyle = {
      color: '#A0A0A0'
    }

    return (
      <div className='container'>
        <div className='landing'>
          <div className='outer'>
            <div className='inner'>
                <h1>xyz</h1>
                <h2><Link to='/memberin' style={activeLandingStyle}><Grid.Column><Icon name='long arrow right' /></Grid.Column></Link></h2>
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