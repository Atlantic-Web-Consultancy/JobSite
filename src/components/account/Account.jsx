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
      username: '',
      password: '',
      organization: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.newEmployerCheck = this.newEmployerCheck.bind(this);
    this.changeAccountView = this.changeAccountView.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(true);
  }

  changeView(view) {
    this.props.changeView(view);
  }

  newEmployerCheck() {
    if (this.props.logIn === 'newEmployer') {
      return (
        <Form.Group>
          <Form.Label>Organization Name</Form.Label>
          <Form.Control
            onChange={this.handleChange}
            value={this.state.organization}
            type="text"
            placeholder="Enter Organization Name"
            name="organization"
          />
        </Form.Group>
      );
    }
  }

  changeAccountView(view) {
    this.props.changeAccountView(view);
  }

  render() {
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
      username,
      password,
      organization,
    } = this.state;

    if (this.props.logIn === 'employee') {
      return (
        <div className="account employee">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control name={username} value={username} onChange={this.handleChange} type="text" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} name={password} onChange={this.handleChange} type="password" placeholder="Enter Password" />
          </Form.Group>
          <Form.Group>
            <Button onSubmit={this.handleSubmit} style={{ marginTop: '15px' }} className="submit-btn" type="submit">Log In</Button>
          </Form.Group>
          <Form.Group>
            <Form.Label>New Here? Make an account</Form.Label>
            <Button onClick={() => this.changeAccountView('new employee')} className="submit-btn">Make Account</Button>
          </Form.Group>
        </div>
      );
    } if (this.props.logIn === 'employer') {
      return (
        <div className="account employer">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control name={username} value={username} onChange={this.handleChange} type="text" placeholder="Enter Username" />
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} name={password} onChange={this.handleChange} type="password" placeholder="Enter Password" />
            <Button onSubmit={this.handleSubmit} style={{ marginTop: '15px' }} className="submit-btn" type="submit">Log In</Button>
          </Form.Group>
        </div>
      );
    }
    return (
      <div className="account">
        <Form>
          {this.newEmployerCheck()}
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
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button onClick={() => this.changeView('employee')} variant="primary" type="button" className="submit-btn">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Account;
