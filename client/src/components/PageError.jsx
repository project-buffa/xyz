import React from 'react'
import { Link } from 'react-router'

class PageError extends React.Component {
  
  render () {
    return (
      <div className='container'>
        <h1>잘못된 접근을 하셨습니다.</h1>
      </div>
    )
  }
  
}

module.exports = PageError