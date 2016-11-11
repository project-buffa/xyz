import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'

class MyDressList extends React.Component {

  // constructor(props){
  //   super(props)

  //   this.state = {
  //   }
  // }

  render () {

    const src ='./upload/sampledress.jpg'

    const imgStyle = {
      width: '120px',
      height: 'auto',
      margin: '5px',
      float: 'left'
    }

    return (
      <div className='mydresslist'>
        <br /><br /><br /><br /><br /><br /><br /><br /><br />
        you don't have any dresses!<br />
        Add a dress item on <Link to='/dresssubmit'><Icon name='photo' size='small'/></Link> or <Link to='/dresssubmit'><Icon name='image' size='small'/></Link>
        {/*{this.props.dress}*/}
        {/*<img src={src} style={imgStyle}/>
        <img src={src} style={imgStyle}/>
        <img src={src} style={imgStyle}/>
        <img src={src} style={imgStyle}/>
        <img src={src} style={imgStyle}/>
        <img src={src} style={imgStyle}/>
        <img src={src} style={imgStyle}/>
        <img src={src} style={imgStyle}/>
        <img src={src} style={imgStyle}/>
        <img src={src} style={imgStyle}/>
        <img src={src} style={imgStyle}/>
        <img src={src} style={imgStyle}/>
        <br /><br /><br /><br />*/}
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