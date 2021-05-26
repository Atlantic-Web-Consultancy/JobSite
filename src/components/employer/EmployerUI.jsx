import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import {
  container,
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
        </Container>
      </div>
    );
  }
}

export default JobSeekerUI;
