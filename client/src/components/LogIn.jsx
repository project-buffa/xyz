import React from 'react'
import { Link } from 'react-router'
import { Button, Image } from 'semantic-ui-react'

class LogIn extends React.Component {

  render () {

    const activeLogInStyle = {
      color: '#A0A0A0'
    }

    const activeLogInTempStyle = {
      color: '#ffffff'
    }

    const src = 'http://semantic-ui.com/images/wireframe/white-image.png'

    return (
      <div className='container'>
        <div className='login'>
          <div className='outer'>
              <div className='inner'>
                <h1>SIGN IN</h1>
                <Image src={src} size='small'  centered disabled /><br />
                <Button circular color='facebook' icon='facebook' />
                <Button circular color='google plus' icon='google plus' /><br /><br />
                <Link to='/memberin' style={activeLogInStyle}>아직 회원이 아니세요? SIGN UP</Link><br /><br />
                <Link to='/mydress' style={activeLogInTempStyle}>마이 드레스 페이지 홈으로 이동(임시)</Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
}

export default LogIn