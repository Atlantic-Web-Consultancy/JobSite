import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import Parse from './Parse.js';

class NewJobSeeker extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
      username: '',
      first_name: '',
      last_name: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      country: '',
      zip: 0,
      phone: '',
      email: '',
      dob: new Date(),
      gender: '',
      password: '',
    }

    this.initialState = this.state;
  }

  handleSubmit = e => {
    e.preventDefault();
    const newSeeker = this.state;
    newSeeker.dob = Date.parse(newSeeker.dob);
    newSeeker.zip = +newSeeker.zip;
    Parse.createJobSeeker(newSeeker, this.successfulCreation);
  }

  successfulCreation = (response) => {
    if (response) {
      console.log('response', response)
    } else {
      this.state = this.initialState;
      this.changeView('employee');
    }
  }

  changeView = view => {
    this.props.changeView(view);
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {

    const {
      username,
      first_name,
      last_name,
      address1,
      address2,
      city,
      state,
      zip,
      country,
      phone,
      email,
      dob,
      gender,
      password,
    } = this.state;

    return (
      <div className="account">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={username}
              type="text"
              placeholder="Enter A Username"
              name="username"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={first_name}
              type="text"
              placeholder="Enter First Name"
              name="first_name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={last_name}
              type="text"
              placeholder="Enter Last Name"
              name="last_name"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address 1</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={address1}
              type="text"
              placeholder="Enter Address"
              name="address1"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Address 2</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={address2}
              type="text"
              placeholder="Enter Address"
              name="address2"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={city}
              type="text"
              placeholder="Enter City"
              name="city"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>State</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={state}
              type="text"
              placeholder="Enter State"
              name="state"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={zip}
              type="number"
              placeholder="Enter Zip Code"
              name="zip"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={country}
              type="text"
              placeholder="Enter country"
              name="country"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={phone}
              type="text"
              placeholder="Enter Phone Number"
              name="phone"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={email}
              type="text"
              placeholder="Enter Email"
              name="email"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={dob}
              asp-format="{0:yyyy-MM-dd}"
              min="1970-01-01"
              max="2021-12-01"
              type="date"
              name="dob"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={gender}
              type="text"
              placeholder="Enter Gender"
              name="gender"
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this.handleChange} value={password} name="password" type="password" placeholder="Enter a password" />
          </Form.Group>
          <LinkContainer to="/">
            <Button onClick={this.handleSubmit} variant="primary" type="submit" className="submit-btn">
              Submit
            </Button>
          </LinkContainer>
        </Form>
      </div>
    );
  }
}

export default NewJobSeeker;
