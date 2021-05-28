import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
import NewEmployer from './NewEmployer.jsx';
import NewJobSeeker from './NewJobSeeker.jsx';
import Parse from './Parse.js';
import $ from 'jquery';

class Account extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      currentView: '',
    };
    this.submitEmployer = this.submitEmployer.bind(this);
    this.submitEmployee = this.submitEmployee.bind(this);
    this.initialState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeAccountView = this.changeAccountView.bind(this);
    this.changeView = this.changeView.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(view) {
    this.props.handleSubmit(view);
  }

  submitEmployee = () => {
    let loginCredentials = { username: this.state.username, password: this.state.password }
    this.setState({
      currentView: 'employee',
    })
    Parse.login(login, this.loginResponse);
  }

  submitEmployer(event) {
    event.preventDefault()
    let loginCredentials = { username: this.state.username, password: this.state.password }
    // Parse.login(login, this.loginResponse);
    $.ajax({
      method: 'POST',
      url: 'http://localhost:3000/login',
      data: loginCredentials,
      xhrFields: {
        withCredentials: true
      },
      success: () => {
        console.log('successful login')
        this.props.handleSubmit(view)
      },
      error: (err) => {
        console.log('err login', err)
      }
    })
  }

  loginResponse = (response) => {
    if (response === null) {
      console.log('response', response);
    } else {
      this.state = this.initialState;
      this.props.handleSubmit(this.state.currentView);
    }
  }

  changeView(view) {
    if (!view) {
      if (this.props.logIn === 'none' || this.props.logIn === 'new employee') {
        return this.props.changeView('employee');
      } else {
        return this.props.changeView('employer');
      }
    }
    this.props.changeView(view);
  }

  changeAccountView(view) {
    this.props.changeAccountView(view);
  }

  render() {
    const { username, password } = this.state;

    if (this.props.logIn === 'employee' || this.props.logIn === 'base') {
      return (
        <div className="account employee">
          <Form.Group onSubmit={this.submitEmployee}>
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" value={username} onChange={this.handleChange} type="text" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" value={password} onChange={this.handleChange} type="password" placeholder="Enter Password" />
          </Form.Group>
          <Form.Group>
            <LinkContainer to="/">
              <Button onClick={this.submitEmployee} style={{ marginTop: '15px' }} className="submit-btn" type="submit">Log In</Button>
            </LinkContainer>
          </Form.Group>
          <Form.Group>
            <Form.Label>New Here? Make an account</Form.Label>
            <Button onClick={() => this.handleSubmit('newEmployee')} className="submit-btn">Make Account</Button>
          </Form.Group>
        </div>
      );
    }
    if (this.props.logIn === 'employer') {
      return (
        <div className="account employee">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control name="username" value={username} onChange={this.handleChange} type="text" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" value={password} onChange={this.handleChange} type="password" placeholder="Enter Password" />
          </Form.Group>
          <Form.Group>
            <LinkContainer to="/">
              <Button onClick={this.submitEmployer} style={{ marginTop: '15px' }} className="submit-btn" type="button">Log In</Button>
            </LinkContainer>
          </Form.Group>
          <Form.Group>
            <Form.Label>New Here? Make an account</Form.Label>
            <Button onClick={() => this.changeAccountView('newEmployer')} className="submit-btn">Make Account</Button>
          </Form.Group>
        </div>
      );
    }
    if (this.props.logIn === 'newEmployer') {
      return (
        <NewEmployer changeView={this.changeView} handleSubmit={this.handleSubmit} />
      )
    }
    return (
      <NewJobSeeker changeView={this.changeView} handleSubmit={this.handleSubmit} />
    )
  }
}

export default Account;


//zip is integer data type
//employer:
//username
//first_name
//last_name
//email
//phone
//organization
//password