import React from 'react'
import { Link } from 'react-router'

class TopMenu extends React.Component {

  render () {

    const topMenuStyle = {
      color : '#ffffff'
    }

    return (
      <div className='topmenu'>
          <ul style={topMenuStyle}>
              <li><Link to='/mydress'>My Dress</Link></li>
              <li><Link to='/mycoordiset'>My Coordi Set</Link></li>
              <li><Link to='/recommendcoordi'>Recommend Coordi</Link></li>
          </ul>
      </div>
    )
  }
  
}

export default TopMenu