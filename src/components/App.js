import { Col, Container, Form, Row , Button } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <Container>
    <Row>
      <Col style={{border:'2px solid red'}}>
      <Form>
  <Form.Row>
    <Col>
    <Form.Control size="lg" type="text" placeholder="Search videoo here" />    </Col>
    <Col>
    <Button variant="primary" size="lg">
      Search
    </Button>    </Col>
  </Form.Row>
</Form>
      </Col>
    </Row>
    <Row>
      <Col xs={12} lg={8} style={{border:'2px solid red'}}>1 of 3</Col>
      <Col xs={12} lg={4} style={{border:'2px solid red'}}>2 of 3</Col>
    </Row>
  </Container>
  );
}

export default App;
