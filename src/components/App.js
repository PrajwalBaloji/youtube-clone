import { useState } from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import "./App.css";
import Footer from "./video/Footer";
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
        <Col >
          <Form onSubmit={(e)=>onSubmit(e)}>
            <Form.Row className='search-box'>
              <Col xs={12} md={2} style={{margin:'auto'}}>
                <img src="logo.jpg" alt="Youtube logo " width='100px' style={{ margin :'auto '}}/>
                </Col>
                <Col md={7} xs={9}>
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
      <Row>
        <Footer/>
      </Row>
    </Container>
  );
}

export default App;
