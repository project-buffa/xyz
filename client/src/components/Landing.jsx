import React from 'react'
import { Link } from 'react-router'
import { Container, Header, Loader } from 'semantic-ui-react'

class Landing extends React.Component {

  render () {
    return (
      <Container>
        <Header as='h2' textAlign='center'>
          <br/>
          xyz loading
        </Header>    
        <Loader active inline='centered' />    
        <h2><Link to='/login'>LogIn</Link></h2>
        <h2><Link to='/mydress'>MYDress</Link></h2>
      </Container>
    )
  }
  
}

module.exports = Landing