import React from 'react'
import { Link } from 'react-router'

class MemberIn extends React.Component {

  render () {
    return (
      <div className='container'>
        <div className='memberin'>
          <h1>회원가입 페이지</h1>
          <h2>슬라이드로 서비스 소개</h2>
          <h2>페이스북 계정으로 서비스 가입</h2>
          <h2>구글 계정으로 서비스 가입</h2>
          <h2>이메일로 서비스 직접 가입</h2>
          <h2><Link to='/login'>이미 회원이세요? 로그인</Link></h2>
        </div>
      </div>
    )
  }
  
}

export default MemberIn