import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



function Landing(props) {
  const [job, setJob] = useState('');
  const [location, setLocation] = useState('');

  const handleChange = () => {
    if (event.target.name === 'job') {
      setJob(event.target.value);
    }
    if (event.target.name === 'location') {
      setLocation(event.target.value);
    }
  }

  const changeView = (view) => {
    props.changeView(view);
  };

  return (
    <Container fluid id="container">
      <Row id="banner">
        <Col id="image-1"></Col>
        <Col id="image-2"></Col>
        <Col id="image-3"></Col>
      </Row>
      <Row>
        <Col id="seeker">
            <img />
            <h1 id="seeker-h1">Looking for a Job?</h1>
            <h2 id="seeker-h2">We're here to help, with thousands of open positions, resume assessments, job fit scoring, and tons of relevant career advice.</h2>
          <div id="button-div">
            <Button onClick={() => changeView('employee')} size="lg" id="landing-button" variant="primary">Find A Job</Button>
          </div>
        </Col>
        <Col id="employer">
          <div id="header-style">
            <img />
            <h1 id="employer-h1">Looking to Employ?</h1>
            <h2 id="employer-h2">Sign up for our free trial that includes job description examples, unlimited candidate profiles, and easy-apply job postings to help you find the right fit.</h2>
          </div>
          <div id="button-div">
            <Button onClick={() => changeView('employer')} size="lg" id="landing-button" variant="primary">Search Candidates</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;
