import React from 'react'
import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'

class LogIn extends React.Component {

  render () {
    return (
      <div className='container'>
        <h1>페이스북, 구글 로그인</h1>
        <Footer />
      </div>
    )
  }
  
}

module.exports = LogIn