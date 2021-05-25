import React from 'react';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { LinkContainer } from 'react-router-bootstrap';

const TopNav = props => (
  <Navbar id="main-nav" fixed="top">
    <Nav>
      <LinkContainer to="/">
        <Navbar.Brand id="nav-logo">JobSite.</Navbar.Brand>
      </LinkContainer>
    </Nav>
    <Dropdown id="dropdown">
      <Dropdown.Toggle id="dropdown-button" />

      <Dropdown.Menu id="dropdown-menu">
        <LinkContainer to="/example">
          <Dropdown.Item>Home</Dropdown.Item>
        </LinkContainer>
        <Dropdown.Item>Calendar</Dropdown.Item>
        <Dropdown.Item>Notes</Dropdown.Item>
        <LinkContainer to="/viewjobs">
          <Dropdown.Item>My Jobs</Dropdown.Item>
        </LinkContainer>
      </Dropdown.Menu>
    </Dropdown>
  </Navbar>
);

export default TopNav;
