import React from 'react'
import { connect } from 'react-redux'

class MyDressList extends React.Component {

  render () {
    return (
      <div className='mydresslist'>
        <h2>{this.props.dress}</h2>
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    dress: state.dress.text
  }
}

export default connect(
  mapStateToProps
)(MyDressList)

// ----------------------------------------------------------------------------------------------------------------------------

// class MyDressList extends React.Component {

//   render () {
//     return (
//       <div className='mydresslist'>
//         <h2>{this.props.dress}</h2>
//       </div>
//     )
//   }
  
// }

// export default MyDressList

// ----------------------------------------------------------------------------------------------------------------------------

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