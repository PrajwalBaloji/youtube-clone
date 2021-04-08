import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./App.css";
import Video from "./video/index";

function App() {
  const [searchTerm, setsearchTerm] = useState("");
  const [passToChild,setPassTochild] = useState('');
  
  const onSubmit=(e)=>{
      e.preventDefault();
      setPassTochild(searchTerm)
  }

  
  return (
    <Container>
      <Row>
        <Col style={{ border: "2px solid red" }}>
          <Form onSubmit={(e)=>onSubmit(e)}>
            <Form.Row>
              <Col>
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Search videoo here"
                  onChange={(event) => setsearchTerm(event.target.value)}
                />
              </Col>
              <Col>
                <Button variant="primary" size="lg" onClick={(e)=>onSubmit(e)}>
                  Search
                </Button>{" "}
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
      <Row>
        <Video searchString={passToChild}/>
      </Row>
    </Container>
  );
}

export default App;
