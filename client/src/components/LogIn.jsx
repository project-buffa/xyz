import React from 'react'
import { Link } from 'react-router'
import { Container, Header, Button, Icon, Form } from 'semantic-ui-react'

class LogIn extends React.Component {

  render () {
    return (
      <Container>
        <Header as='h2' textAlign='center'>
          <br/>
          login
        </Header>

        <br/>
        
        <Button color='facebook'>
          <Icon name='facebook' /> Facebook
        </Button>
        <Button color='google plus'>
          <Icon name='google plus' /> Google
        </Button>

        <br/>
        <br/>
        
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>

        <h2><Link to='/'>Landing 이동</Link></h2>
        <h2><Link to='/mydress'>MYDress</Link></h2>
      </Container>
    )
  }
  
}

module.exports = LogIn