import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'

import axios from 'axios'

import { loadCategory } from '../actions';

class BottomMenu extends React.Component {

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.props.handleLoadCategory();
  }

  openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav() {
    document.getElementById("myNav").style.width = "0";
  }
  
  render () {

    const activeBottomMenuStyle = {
      float: 'right',
      backgroundColor: '#4EC8AF'
    }
    
    return (
      <div>

        <div className='bottommenu'>
          <ul>
            <li onClick={this.openNav}><Link to='/mydress'>My Dress Category</Link></li>
            <li style={activeBottomMenuStyle}><Link to='/dresssubmit'><Icon name='photo' /></Link></li>
            <li style={activeBottomMenuStyle}><Link to='/mydress'><Icon name='image' /></Link></li>
          </ul>
        </div>

        <div id="myNav" className="overlay">
          <div className="outer">
            <div className="inner">
              <ul>
                <li onClick={this.closeNav}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  X
                </li>
                {this.props.loadcategory.map((category, i) => {
                  return (
                    <li key={i}>{category.categoryname}</li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
  
}
const mapStateToProps = (state) => {
  return {
    loadcategory: state.category.loadcategory
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoadCategory: () => {
          axios.post('/dresscategory')
          .then((response) => {
            // console.log('dresscategory : ',response.data);
            dispatch(loadCategory(response.data));
          })
        }
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BottomMenu)