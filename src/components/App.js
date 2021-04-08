import { Col, Container, Form, Row , Button } from 'react-bootstrap';
import './App.css';
import Video from './video/index';

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
      <Video/>
    </Row>
  </Container>
  );
}

export default App;
