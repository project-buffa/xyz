import React from 'react'
import { Link } from 'react-router'
import { Input } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { searchDress } from '../actions'

class TopMenu extends React.Component {

  handleSearchDressChange(e){
    this.props.handleSearchDress(e.target.value)
  }

  render () {

    const activeTopMenuStyle = {
      float: 'right'
    }

    return (
      <div className='topmenu'>
        <ul>
            <li><Link to='/mydress'>{this.props.dress}</Link></li>
            <li style={activeTopMenuStyle}><Link><Input transparent icon='search' placeholder='Search...' value={this.props.dress} onChange={this.handleSearchDressChange.bind(this)} /></Link></li>
        </ul>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    dress: state.dress.text
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleSearchDress: (value) => { dispatch(searchDress(value)) }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopMenu)

// ----------------------------------------------------------------------------------------------------------------------------

// class TopMenu extends React.Component {

//   handleSearchDressChange(e){
//     this.props.handleSearchDress(e.target.value)
//   }

//   render () {

//     const activeTopMenuStyle = {
//       float: 'right'
//     }

//     return (
//       <div className='topmenu'>
//         <ul>
//             <li><Link to='/mydress'>{this.props.dress}</Link></li>
//             <li style={activeTopMenuStyle}><Link><Input transparent icon='search' placeholder='Search...' value={this.props.dress} onChange={this.handleSearchDressChange.bind(this)} /></Link></li>
//         </ul>
//       </div>
//     )
//   }
  
// }

// export default TopMenu