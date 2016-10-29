import React from 'react'
import { Link } from 'react-router'

class Landing extends React.Component {

  render () {
    return (
      <div className='loading'>
        <h1>xyz app main loading</h1>
        <h2><Link to='/login'>LogIn</Link></h2>
        <h2><Link to='/mydress'>MyDress</Link></h2>
        <h2><Link to='/error'>Error</Link></h2>
        <form action='/upload' method='post' encType='multipart/form-data'>
          <input type='file' name='uploadDress' placeholder="" />
          <input type='submit' />
        </form>
      </div>
    )
  }
  
}

module.exports = Landing