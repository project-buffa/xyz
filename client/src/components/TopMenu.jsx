import React from 'react'
import { Link } from 'react-router'

class TopMenu extends React.Component {

  handleSearchDressChange(e){
    this.props.handleSearchDress(e.target.value)
  }

  render () {

    const activeTopMenuStyle = {
      float: 'right'
    }

    return (
      <div className='container'>
        <div className='topmenu'>
            <ul>
                <li><Link to='/mydress'>{this.props.dress}</Link></li>
                <li style={activeTopMenuStyle}><Link><input type='text' placeholder='search' value={this.props.dress} onChange={this.handleSearchDressChange.bind(this)} /></Link></li>
            </ul>
        </div>
      </div>
    )
  }
  
}

export default TopMenu