import React from 'react'
import { Link } from 'react-router'

class LogIn extends React.Component {

  render () {
    return (
      <div className='container'>
        <div className='login'>
          <h1>로그인 페이지</h1>
          <h2>슬라이드로 서비스 소개</h2>
          <h2>페이스북 계정으로 서비스 로그인</h2>
          <h2>구글 계정으로 서비스 로그인</h2>
          <h2>이메일로 서비스 직접 로그인</h2>
          <h2><Link to='/memberin'>아직 회원이 아니세요? 회원가입</Link></h2>
          <h2><Link to='/mydress'>마이 드레스 페이지 홈으로 이동(임시)</Link></h2>
        </div>
      </div>
    )
  }
  
}

export default LogIn