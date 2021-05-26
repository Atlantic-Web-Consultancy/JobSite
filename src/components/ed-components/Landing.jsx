import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import image from '../../dist/fourthOne.jpeg';


function Landing() {
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

  return (
    <Container id="container">
      <Row id="banner">
        <Col id="image-1"></Col>
        <Col id="image-2"></Col>
        <Col id="image-3"></Col>
      </Row>
      <Row>
        <Col id="seeker">
          <Row id="header-style">
            <img />
            <h1 id="seeker-h1">Slogan</h1>
            <h2 id="seeker-h2">We're here to help, with thousands of open positions, resume assessments, job fit scoring, and tons of relevant career advice.</h2>
          </Row>
          <Form>
            <Form.Row id="form-row">
              <label style={{ display: "none" }}>Search For Job</label>
              <input id="job-title-input" type="job" placeholder="Job Title or Keyword" name="job" value={job} onChange={handleChange} />
              <br />
              <label style={{ display: "none" }}>City / Post Code</label>
              <input id="zipcode-title-input" type="city" placeholder="Place: City or Post Code" name="location" value={location} onChange={handleChange} />
            </Form.Row>
          </Form>
          <div id="button-div">
            <Button size="lg" id="landing-button" variant="primary">Post a Job for Free</Button>
          </div>
        </Col>
        <Col id="employer">
          <div id="header-style">
            <img />
            <h1 id="employer-h1">Slogan</h1>
            <h2 id="employer-h2">Sign up for our free trial that includes job description examples, unlimited candidate profiles, and easy-apply job postings to help you find the right fit.</h2>
          </div>
          <div>
            <Button size="lg" id="landing-button" variant="primary">Post a Job for Free</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;