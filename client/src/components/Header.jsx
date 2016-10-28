import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.openNav = this.openNav.bind(this)
    }

    openNav() { // 좌측 메뉴바를 여는 함수
        document.getElementById('mySidenav').style.width = '150px'
    }

    render(){

        let headerBar
        
        if(this.props.userInfo){
            headerBar = (
                <h1>메뉴 바 입니다.</h1>
            )
        }else{
            headerBar = (
                <ul>
                    <li onClick={this.openNav}><Link>내 옷장 카테고리</Link></li>
                    <li><Link to=''>코디 추천</Link></li>
                </ul>
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