import React from 'react'
import { Link } from 'react-router'

class TopMenu extends React.Component {

  render () {
    return (
      <div className='container'>
        <div className='topmenu'>
            <ul>
                <li><Link to='/mydress'>{this.props.categoryname}</Link></li>
            </ul>
        </div>
      </div>
    )
  }
  
}

export default TopMenu