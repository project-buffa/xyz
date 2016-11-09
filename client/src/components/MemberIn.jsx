import React from 'react'
import { Link } from 'react-router'
import { Button, Image } from 'semantic-ui-react'

class MemberIn extends React.Component {

  render () {

    const activeMemberInStyle = {
      color : '#ffffff'
    }

    const memberInStyle = {
      fontSize : '20px'
    }

    const src ='./src/images/white-image.png'

    return (
      <div className='container'>
        <div className='memberin'>
          <div className='outer'>
              <div className='inner' style={memberInStyle}>
                xyz 2016 SIGN UP<br /><br />
                <Image src={src} size='small' centered bordered /><br />
                <Button circular color='facebook' icon='facebook' />
                <Button circular color='google plus' icon='google plus' /><br /><br />
                <Link to='/login' style={activeMemberInStyle}>Have a xyz.com account?</Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
}

export default MemberIn