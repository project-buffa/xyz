import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { loadDress } from '../actions';

class RecommendCoordi extends React.Component {

  componentWillMount(){
    this.props.handleLoadDress();
  }

  render () {

    return (
      <div className='container'>
        <div className='recommendcoordi' style={{textAlign : 'center'}}>
          <h1>Recommend Coordi<br />준비중입니다.</h1>
        </div>
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
)(RecommendCoordi)