import React, {propTypes} from 'react'
import { Link } from 'react-router'
import { Input } from 'semantic-ui-react'

import axios from 'axios'

import { connect } from 'react-redux'
import { searchDress } from '../actions'

// const propTypes = {
// }

// const defaultProps{
// }

class TopMenu extends React.Component {

  constructor(props){
    super(props)
    this.handleSearchDressChange = this.handleSearchDressChange.bind(this)
  }

  handleSearchDressChange(e){
    console.log("이벤트 발생 : ", e.target.value)
    axios.post('/search', {
      searchValue : e.target.value
    })
    .then((response) => {
      console.log("axios success : ", response.data)
      console.log("axios status : ", response.status)
      this.props.handleSearchDress(response.data)
    })
    // this.props.handleSearchDress(e.target.value)
  }

  render () {

    const activeTopMenuStyle = {
      float: 'right',
      fontFamily: '"Gloria Hallelujah", cursive'
    }

    return (
      <div className='topmenu'>
        <ul>
            <li><Link to='/mydress'>{this.props.dress}</Link></li>
            <li style={activeTopMenuStyle}><Link><Input transparent icon='search' placeholder='Search...' value={this.props.dress} onChange={this.handleSearchDressChange} /></Link></li>
        </ul>
      </div>
    )
  }
  
}

// TopMenu.propTypes = propTypes
// TopMenu.defaultProps = defaultProps

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