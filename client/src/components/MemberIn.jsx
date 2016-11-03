import React from 'react'
import { Link } from 'react-router'
import { Button, Image } from 'semantic-ui-react'

class MemberIn extends React.Component {

  render () {

    const activeMemberInStyle = {
      color: '#A0A0A0'
    }

    const src = 'http://semantic-ui.com/images/wireframe/white-image.png'

    return (
      <div className='container'>
        <div className='memberin'>
          <div className='outer'>
              <div className='inner'>
                <h1>SIGN UP</h1>
                <Image src={src} size='small'  centered disabled /><br />
                <Button circular color='facebook' icon='facebook' />
                <Button circular color='google plus' icon='google plus' /><br /><br />
                <Link to='/login' style={activeMemberInStyle}>이미 회원이세요? SIGN IN</Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
}

export default MemberIn