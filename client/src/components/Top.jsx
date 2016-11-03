import React from 'react'
import { Link } from 'react-router'
import { Icon } from 'semantic-ui-react'

class Top extends React.Component {

  render () {

    const activeTopStyle = {
      float: 'right',
      backgroundColor: '#1A1A1A'
    }

    return (
      <div className='top'>
          <ul>
              <li><Link to='/mydress'>xyz</Link></li>
              <li style={activeTopStyle}><Link to='/'><Icon name='settings' /></Link></li>
          </ul>
      </div>
    )
  }
  
}

export default Top