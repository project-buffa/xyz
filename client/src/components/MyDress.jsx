import React from 'react'
import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import MyDressList from './MyDressList'
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

class MyDress extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      userName:'minho', // 사용자 이름을 get localstorage 로 추출
      myDressCategory: ['OUTER', 'TOPS', 'BOTTOMS', 'ACCESSORIES'], // 데이터베이스에서 사용자 카테고리 추출
      myDressList: ['shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg', 'shirt.jpg']
    }
    this.closeNav = this.closeNav.bind(this)
  }

  closeNav() { // 좌측 메뉴바를 닫는 함수
    document.getElementById('mySidenav').style.width = '0';
  }

  render () {
    return (
      <div className='container'>
        <div id='mySidenav' className='sidenav'> {/* 좌측 메뉴 바 */}
          <h1 className='closebtn' onClick={this.closeNav}>X</h1>
          {this.state.myDressCategory.map((map,i) => {
            return (<h1 key={i}>{map}</h1>)
          })}
        </div>
        <Header name={this.state.userName} /> 
        <div className='mydresslistblank' />
        <Link to='/login'><div className='addmydress' /></Link>
        <MyDressList list={this.state.myDressList}/>
        <Footer />
      </div>
    )
  }
  
}

module.exports = MyDress