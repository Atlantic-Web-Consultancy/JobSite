import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  container, cardButton,
} from './EmployerCSS.js';

class JobSeekerUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div id="employerBG">
        <Container>
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Search" />
          </Form.Group>
          <Button variant="primary" style={cardButton} size="lg">Go</Button>
        </Container>
      </div>
    );
  }
}

export default JobSeekerUI;
