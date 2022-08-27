import './App.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';






function App() {
  return (
    <div className="App">
      <h1>Bootstrap Website</h1>
      <Button variant="success">Go Places</Button>{''}


      <Nav activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/about">About Us</Nav.Link>
        </Nav.Item>
      </Nav>

      <Form>
    <Form.Group controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

    <Form.Group controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>

    <Form.Group>
    <Form.Label>Form Dropdown with favorite movies</Form.Label>
    <Form.Control as="select">
      <option>Inception</option>
      <option>Forrest Gump</option>
      <option>Shawshank Redemption</option>
      <option>Spiderman: Into the Spiderverse</option>
      <option>Avengers: Endgame</option>
      <option>What's a Movie?</option>
    </Form.Control>
</Form.Group>




    
    <Button variant="primary" type="submit">
      Submit
    </Button>
</Form>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://image.shutterstock.com/image-vector/default-placeholder-avatar-profile-on-260nw-490458517.jpg" />
      <Card.Body>
        <Card.Title>Author Info</Card.Title>
        <Card.Text>
          Once upon a time there was a picture here but now the author has faded into oblivion, and her image faded with her.
        </Card.Text>
        <Button variant="primary">Go Find Her</Button>
      </Card.Body>
    </Card>

    </div>
  );
}

export default App;
