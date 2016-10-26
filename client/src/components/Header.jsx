import React from 'react'
import { Link } from 'react-router'

class Header extends React.Component {

    render(){

        let headerBar
        
        if(this.props.userInfo){
            headerBar = (
                <h1>메뉴 바 입니다.</h1>
            )
        }else{
            headerBar = (
                <h2>민호님 안녕하세요! 메뉴바 입니다.</h2>
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