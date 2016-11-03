import React from 'react'
import { Link } from 'react-router'
import { Icon } from 'semantic-ui-react'

class BottomMenu extends React.Component {

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0";
  }
  
  render () {

    const activeBottomMenuStyle = {
      float: 'right',
      backgroundColor: '#1C704C'
    }
    
    return (
      <div>

        <div className='bottommenu'>
          <ul>
            <li onClick={this.openNav}><Link to='/mydress'>category open</Link></li>
            <li style={activeBottomMenuStyle}><Link to='/'><Icon name='photo' /></Link></li>
            <li style={activeBottomMenuStyle}><Link to='/'><Icon name='image' /></Link></li>
          </ul>
        </div>

        <div id="myNav" className="overlay">
          <div className="outer">
            <div className="inner">
              <h2 onClick={this.props.onCategory}>shirt</h2> <br />
              pants <br /><br />
              <h3 onClick={this.closeNav}>close</h3>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}

export default BottomMenu