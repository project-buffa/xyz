import React from 'react'
import { Link } from 'react-router'
import Spinner from './Spinner'

class Landing extends React.Component {

  constructor(props){
      super(props)

      this.state = {
        spinner : false
      }
  }

  componentDidMount(){

      // console.log('{this.state.spinner}')

      setTimeout( () => {
      this.setState({spinner:true})
      }, 2000)
  }

  render () {

    const landingStyle = {
      fontSize : '60px',
      color : '#ffffff'
    }

    var landingSpace

    if(this.state.spinner){
      landingSpace = (
        <div className='container'>
          <div className='landing'>
            <div className='outer'>
              <div className='inner'>
                <Link to='/memberin' style={landingStyle}>xyz</Link>
              </div>
            </div>
          </div>
        </div>
      )
    } else {
      landingSpace = (
        <div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <Spinner />
        </div>
      )
    }

    return (
      <div>
        {landingSpace}
      </div>
    )
  }
  
}

export default Landing

// <form action='/upload' method='post' encType='multipart/form-data'>
// <input type='file' name='uploadDress' placeholder="" />
// <input type='submit' />
// </form>