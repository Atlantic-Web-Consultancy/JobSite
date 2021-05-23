import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { ContainerStyle, SeekerStyle, EmployerStyle } from '../styles/LandingStyle';

function Landing() {
  return (
    <Container  style={ContainerStyle}>
      <div>
        NavBar
      </div>
      <Row>
        <Col style={SeekerStyle}>
          <Row>
            <img />
            <h1>Slogan</h1>
            <h2>SubSlogan</h2>
          </Row>
          <Row>
            <Form>
              <Form.Group controlId="seeker.ControlInput1">
                <Form.Control type="job" placeholder="Job Title or Keyword" />
              </Form.Group>
              <Form.Group controlId="seeker.ControlInput2">
                <Form.Control type="city" placeholder="Place: City or Post Code" />
              </Form.Group>
            </Form>
          </Row>
          <Row>
            <Button variant="primary">Primary</Button>
          </Row>
        </Col>
        <Col style={EmployerStyle}>employer
          <Row>
            <img />
            <h1>Slogan</h1>
            <h2>SubSlogan</h2>
          </Row>
          <Row>
            <Button variant="primary">Primary</Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
