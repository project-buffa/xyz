import React from 'react'
import { Link } from 'react-router'

class UploadError extends React.Component {
  
  render () {
    return (
      <div className='container'>
        <h1>잘못된 파일을 올리셨습니다.</h1>
      </div>
    )
  }
  
}

module.exports = UploadError