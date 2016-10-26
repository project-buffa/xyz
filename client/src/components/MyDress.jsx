import React from 'react'
import { Link } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import MyDressList from './MyDressList'

class MyDress extends React.Component {

  render () {
    return (
      <div className='container'>
        <Header />
        <div className='mydresslistblank' />
        <Link to='/login'><div className='addmydress' /></Link>
        <MyDressList />
        <Footer />
      </div>
    )
  }
  
}

module.exports = MyDress