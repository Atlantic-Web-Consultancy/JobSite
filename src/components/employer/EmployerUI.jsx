import React from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  cardButton,
} from './EmployerCSS.js';

class JobSeekerUI extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(event) {
    this.setState({
      input: event.target.value
    })
  }

  submitHandler() {

  }

  render() {
    const { input } = this.state;
    return (
      <div id="employerBG">
        <Container id="employerInputContainer">
          <Form.Group>
            <Form.Control size="lg" type="text" placeholder="Search" value={input} onChange={this.changeHandler}/>
          </Form.Group>
          <Button variant="primary" style={cardButton} size="lg">Go</Button>
        </Container>
      </div>
    );
  }
}

export default JobSeekerUI;
