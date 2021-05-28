import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';


//employer:
//username
//first_name
//last_name
//email
//phone
//organization
//password

class NewEmployer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      email: '',
      phone: '',
      organization: '',
      password: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  changeView = view => {
    this.props.changeView(view);
  }

  render () {

    const {
      username,
      first_name,
      last_name,
      email,
      phone,
      organization,
      password,
    } = this.state;

    return (
      <div className="account">
        <Form>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={username}
              type="text"
              placeholder="Enter a username"
              name="username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={first_name}
              type="text"
              placeholder="Enter first name"
              name="first_name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={last_name}
              type="text"
              placeholder="Enter last name"
              name="last_name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={email}
              type="text"
              placeholder="Enter email"
              name="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Organization</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={organization}
              type="text"
              placeholder="Enter organization name"
              name="organization"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={phone}
              type="text"
              placeholder="Enter phone number"
              name="phone"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter a password" />
          </Form.Group>
          <LinkContainer to="/">
            <Button onClick={() => this.changeView()} variant="primary" type="button" className="submit-btn">
              Submit
              </Button>
          </LinkContainer>
        </Form>
      </div>
    );
  }
}

export default NewEmployer;
