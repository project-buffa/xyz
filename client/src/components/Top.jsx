import React from 'react'
import { Link } from 'react-router'
import { Icon } from 'semantic-ui-react'

class Top extends React.Component {

  render () {

    const activeTopStyle = {
      float: 'right'
    }

    return (
      <div className='top'>
          <ul>
              <li><Link to='/'>MANAFIT</Link></li>
              <li style={activeTopStyle}><Link to='/setting'><Icon name='setting' size='small'/></Link></li>
          </ul>
      </div>
    )
  }
  
}

export default Top