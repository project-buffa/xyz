import React from 'react'
import { Link } from 'react-router'
import { Button, Image } from 'semantic-ui-react'

class LogIn extends React.Component {

  render () {

    const activeMemberInStyle = {
      color : '#ffffff'
    }

    const memberInStyle = {
      fontSize : '20px'
    }

    const src ='./src/images/white-image.jpg'

    return (
      <div className='container'>
        <div className='login'>
          <div className='outer'>
              <div className='inner' style={memberInStyle}>
                MANAFIT 2016 SIGN IN<br /><br />
                <Link to='/mydress'><Image src={src} size='small' centered bordered /></Link><br />
                <Button circular color='facebook' icon='facebook' />
                <Button circular color='google plus' icon='google plus' /><br /><br />
                <Link to='/forgotpassword' style={activeMemberInStyle}>Forgot your password?</Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
}

export default LogIn