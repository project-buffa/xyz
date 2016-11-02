import React from 'react'
import { Link } from 'react-router'

class Top extends React.Component {

  render () {

    const activeTopStyle = {
      float: 'right',
      backgroundColor: '#046380'
    }

    return (
      <div className='container'>
        <div className='top'>
            <ul>
                <li><Link to='/mydress'>xyz</Link></li>
                <li style={activeTopStyle}><Link to='/'>Read</Link></li>
            </ul>
        </div>
      </div>
    )
  }
  
}

export default Top