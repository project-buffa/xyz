import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.openNav = this.openNav.bind(this)
    }

    openNav() { // 좌측 메뉴바를 여는 함수
        document.getElementById('mySidenav').style.width = '150px';
    }

    render(){

        let headerBar
        
        if(this.props.userInfo){
            headerBar = (
                <h1>메뉴 바 입니다.</h1>
            )
        }else{
            headerBar = (
                <h2 onClick={this.openNav}>&#9776; {this.props.name}님 안녕하세요! 메뉴바 입니다.</h2>
            )
        }

        return (
            <div className='header'>
                {headerBar}
            </div>
        )

    }
}

module.exports = Header