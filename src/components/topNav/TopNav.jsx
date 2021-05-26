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
        {props.navItems.map(item => (
          <LinkContainer to={`/${item.split(' ').join('').toLowerCase()}`}>
            <Dropdown.Item>{item}</Dropdown.Item>
          </LinkContainer>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  </Navbar>
);

export default TopNav;
