import React from 'react'

class MyDressList extends React.Component {

  render () {
    return (
      <div className='mydresslist'>
        <h2>mydresslist</h2>
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