import React from 'react'
import { Link } from 'react-router'
import { Image } from 'semantic-ui-react'

class ForgotPassword extends React.Component {

  render () {

    const activeForgotPasswordInStyle = {
      color : '#ffffff'
    }

    const forgotPasswordStyle = {
      fontSize : '20px'
    }

    const src ='./src/images/white-image.png'

    return (
      <div className='container'>
        <div className='forgotpassword'>
          <div className='outer'>
              <div className='inner' style={forgotPasswordStyle}>
                FORGOT PASSWORD<br /><br />
                <Image src={src} size='small' centered bordered /><br />
                <Link to='/login' style={activeForgotPasswordInStyle}>back</Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
}

export default ForgotPassword