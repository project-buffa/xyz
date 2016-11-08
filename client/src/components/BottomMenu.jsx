import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
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
      backgroundColor: '#4EC8AF'
    }
    
    return (
      <div>

        <div className='bottommenu'>
          <ul>
            <li onClick={this.openNav}><Link to='/mydress'>category open</Link></li>
            <li style={activeBottomMenuStyle}><Link to='/mydress'><Icon name='photo' /></Link></li>
            <li style={activeBottomMenuStyle}><Link to='/mydress'><Icon name='image' /></Link></li>
          </ul>
        </div>

        <div id="myNav" className="overlay">
          <div className="outer">
            <div className="inner">
              <ul>
                <li onClick={this.closeNav}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  X
                </li>
                {this.props.dresscategory.map((category, i) => {
                  return (
                    <li key={i}>{category.name}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    dresscategory: state.dress.dresscategory
  }
}

export default connect(
  mapStateToProps
)(BottomMenu)