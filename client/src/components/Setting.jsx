import React from 'react'
import { Link } from 'react-router'
import { Image } from 'semantic-ui-react'

class Setting extends React.Component {

  render () {

    const activeSettingInStyle = {
      color : '#ffffff'
    }

    const settingStyle = {
      fontSize : '20px'
    }

    const src ='./src/images/white-image.png'

    return (
      <div className='container'>
        <div className='setting'>
          <div className='outer'>
              <div className='inner' style={settingStyle}>
                Setting<br /><br />
                <Image src={src} size='small' centered bordered /><br />
                <Link to='/mydress' style={activeSettingInStyle}>back</Link>
              </div>
            </div>
          </div>
      </div>
    )
  }
  
}

export default Setting