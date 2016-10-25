import React from 'react'
import { Link } from 'react-router'
import { Container, Header, Card, Icon, Image } from 'semantic-ui-react'

class MyDress extends React.Component {

  render () {
    return (
      <Container>
        <Header as='h2' textAlign='center'>
          <br/>
          mydress
        </Header>

        <div>
          <a>
            <Icon name='photo' />photo upload
          </a>
        </div>

        <br/>

        <Card.Group itemsPerRow={6}>
          <Card>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Card.Content>
              <Card.Header>Levi's</Card.Header>
              <Card.Meta>2016</Card.Meta>
              <Card.Description>My Best Item</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Pants
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Card.Content>
              <Card.Header>Levi's</Card.Header>
              <Card.Meta>2016</Card.Meta>
              <Card.Description>My Best Item</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Pants
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Card.Content>
              <Card.Header>Levi's</Card.Header>
              <Card.Meta>2016</Card.Meta>
              <Card.Description>My Best Item</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Pants
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Card.Content>
              <Card.Header>Levi's</Card.Header>
              <Card.Meta>2016</Card.Meta>
              <Card.Description>My Best Item</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Pants
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Card.Content>
              <Card.Header>Levi's</Card.Header>
              <Card.Meta>2016</Card.Meta>
              <Card.Description>My Best Item</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Pants
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Card.Content>
              <Card.Header>Levi's</Card.Header>
              <Card.Meta>2016</Card.Meta>
              <Card.Description>My Best Item</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Pants
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Card.Content>
              <Card.Header>Levi's</Card.Header>
              <Card.Meta>2016</Card.Meta>
              <Card.Description>My Best Item</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Pants
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Card.Content>
              <Card.Header>Levi's</Card.Header>
              <Card.Meta>2016</Card.Meta>
              <Card.Description>My Best Item</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Pants
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Card.Content>
              <Card.Header>Levi's</Card.Header>
              <Card.Meta>2016</Card.Meta>
              <Card.Description>My Best Item</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Pants
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Card.Content>
              <Card.Header>Levi's</Card.Header>
              <Card.Meta>2016</Card.Meta>
              <Card.Description>My Best Item</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Pants
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Card.Content>
              <Card.Header>Levi's</Card.Header>
              <Card.Meta>2016</Card.Meta>
              <Card.Description>My Best Item</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Pants
              </a>
            </Card.Content>
          </Card>
          <Card>
            <Image src='http://semantic-ui.com/images/wireframe/image.png' />
            <Card.Content>
              <Card.Header>Levi's</Card.Header>
              <Card.Meta>2016</Card.Meta>
              <Card.Description>My Best Item</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                Pants
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
        
        <h2><Link to='/'>Landing 이동</Link></h2>
        <h2><Link to='/login'>LogIn</Link></h2>
      </Container>
    )
  }
  
}

module.exports = MyDress