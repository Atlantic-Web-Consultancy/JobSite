import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      phoneNumber: '',
      email: '',
      dob: '',
      gender: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    // if (this.props.employer) {
    //   return (
    //     <Form.Label>Organization</Form.Label>
    //     <Form.Control type="text" placeholder="Enter Organization Name" />
    //   );
    // }
    const {
      firstName,
      lastName,
      address1,
      address2,
      city,
      state,
      phoneNumber,
      email,
      dob,
      gender,
    } = this.state;

    return (
      <div className="account employee">
        <Form>
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={firstName}
              type="text"
              placeholder="Enter First Name"
              name="firstName"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={lastName}
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
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
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              onChange={this.handleChange}
              value={phoneNumber}
              type="tel"
              placeholder="Enter Phone Number"
              name="phoneNumber"
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
              type="text"
              placeholder="Enter DOB"
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

          {/* <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit" className="submit-btn">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Account;
