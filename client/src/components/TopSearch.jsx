import React, {propTypes} from 'react'
import { Link } from 'react-router'
import { Input } from 'semantic-ui-react'

// const propTypes = {
// }

// const defaultProps{
// }

class TopSearch extends React.Component {

  render () {

    const activeTopSearchStyle = {
      float: 'right',
      fontFamily: '"Gloria Hallelujah", cursive'
    }

    return (
      <div className='topsearch'>
        <ul>
            <li><Link to='/mydress'></Link></li>
            <li style={activeTopSearchStyle}><Link><Input transparent icon='search' placeholder='Search...'  /></Link></li>
        </ul>
      </div>
    )
  }
  
}

// TopMenu.propTypes = propTypes
// TopMenu.defaultProps = defaultProps

export default TopSearch

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