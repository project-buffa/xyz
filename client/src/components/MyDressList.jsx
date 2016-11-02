import React from 'react'
import { SEARCH_DRESS } from '../constants/ActionTypes'

class MyDressList extends React.Component {

  render () {
    return (
      <div className='mydresslist'>
        <h2>{this.props.dress}</h2>
      </div>
    )
  }
  
}

export default MyDressList

// class MyDressList extends React.Component {

//   render () {
//     return (
//       <div className='mydresslist'>
//         {this.props.list.map((map,i) => {
//           return <img src={'../../upload/'+map} key={i} width='200' height='200'/>
//         })}
//       </div>
//     )
//   }
  
// }

// module.exports = MyDressList