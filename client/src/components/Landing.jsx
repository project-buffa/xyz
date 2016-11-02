import React from 'react'
import { Link } from 'react-router'

class Landing extends React.Component {

  render () {
    return (
      <div className='container'>
        <div className='landing'>
          <h1>랜딩 페이지</h1>
          <h2><Link to='/memberin'>회원 가입 안내 페이지로</Link></h2>
        </div>
      </div>
    )
  }
  
}

export default Landing

// <form action='/upload' method='post' encType='multipart/form-data'>
// <input type='file' name='uploadDress' placeholder="" />
// <input type='submit' />
// </form>