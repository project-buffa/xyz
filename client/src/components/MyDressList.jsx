import React from 'react'
import { connect } from 'react-redux'
import { Input, Image } from 'semantic-ui-react'

class MyDressList extends React.Component {

  // constructor(props){
  //   super(props)

  //   this.state = {
  //   }
  // }

  // fileUpload(){
  //   document.getElementById('uploadfile').click()
  // }

  render () {

    const uploadFileHidden = {
      // display: 'none'
    }

    // const src = '../../../upload/sampledress.jpg'

    const src ='./upload/sampledress.jpg'

    const imgStyle = {
      width: '120px',
      height: 'auto',
      margin: '5px'
    }

    return (
      <div className='mydresslist'>
        {/*{this.props.dress}*/}
        {/*<form action='/upload' method='post' encType='multipart/form-data'>
          <Input transparent type='file' name='uploadDress' accept='image/*' capture='camera' placeholder='' />
          <Input transparent type='submit' />
        </form>*/}
        {/*<div className="wrapper" style={uploadFileHidden}>
            <Input type="file" id="uploadfile" accept='image/*' capture='camera' /> 
        </div>
        <div onClick={this.fileUpload}>click</div>*/}
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
        <img src={src} style={imgStyle}/>
        <br /><br /><br /><br />
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