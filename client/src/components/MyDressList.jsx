import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'

import axios from 'axios'

import { loadDress } from '../actions';

class MyDressList extends React.Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.handleLoadDress();
  }

  render () {

    // const src ='./upload/sampledress.jpg'

    const imgStyle = {
      width: '180px',
      height: 'auto',
      margin: '5px 0px 50px 0px',
      textAlign: 'center',
      float: 'left',
    }

    return (
      <div className='mydresslist'>
        {/*<br /><br /><br /><br /><br /><br /><br /><br />
        you don't have any dresses!<br />
        Add a dress item on <Link to='/dresssubmit'><Icon name='photo' size='small'/></Link> or <Link to='/dresssubmit'><Icon name='image' size='small'/></Link>
        <br />*/}
        {this.props.loaddress.map((list, i) => {
          return (
            <img key={i} src={'./upload/'+list.dressname+'.jpg'} style={imgStyle} />
          )
        })}
      </div>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {
    loaddress: state.dress.loaddress
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadDress: () => {
          axios.post('/dresslist')
          .then((response) => {
            // console.log('dresslist : ',response.data);
            dispatch(loadDress(response.data));
          })
        }
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
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