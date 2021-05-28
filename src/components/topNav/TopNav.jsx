import React, { useState } from 'react';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { LinkContainer } from 'react-router-bootstrap';

const TopNav = props => {

  const changeNotesView = (view) => {
    props.changeNotesView(view);
  };

  const toggleCal = toggleVal => {
    props.toggleCal(toggleVal)
  }

  if (props.navItems.includes('Landing')) {
    return (
      <Navbar id="main-nav" fixed="top">
        <Nav>
          <LinkContainer to="/">
            <Navbar.Brand id="nav-logo">JobSite.</Navbar.Brand>
          </LinkContainer>
        </Nav>
        <Dropdown id="dropdown">
          <Dropdown.Toggle id="dropdown-button" />

          <Dropdown.Menu id="dropdown-menu">
            <LinkContainer to="/login">
              <Dropdown.Item>Login</Dropdown.Item>
            </LinkContainer>
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    );
  }
  return (
    <div>
      <Navbar id="main-nav" fixed="top">
        <Nav>
          <LinkContainer to="/">
            <Navbar.Brand id="nav-logo">JobSite.</Navbar.Brand>
          </LinkContainer>
        </Nav>
        <Dropdown id="dropdown">
          <Dropdown.Toggle id="dropdown-button" />

          <Dropdown.Menu id="dropdown-menu">
            <LinkContainer to="Home">
              <Dropdown.Item>Home</Dropdown.Item>
            </LinkContainer>
            <Dropdown.Item onClick={() => toggleCal(true)}>Calendar</Dropdown.Item>
            <Dropdown.Item onClick={() => changeNotesView(true)}>Notes</Dropdown.Item>
            {props.navItems.map(item => (
              <LinkContainer to={`/${item.split(' ').join('').toLowerCase()}`}>
                <Dropdown.Item>{item}</Dropdown.Item>
              </LinkContainer>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </Navbar>
    </div>
  );
};

export default TopNav;
