import React from 'react'
import { Link } from 'react-router'

class PageError extends React.Component {
  
  render () {
    return (
      <div className='container'>
        <div className='pageerror'>
          <h1>잘못된 접근 안내 페이지</h1>
        </div>
      </div>
    )
  }
  
}

export default PageError