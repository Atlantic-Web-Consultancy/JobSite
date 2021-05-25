import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';

const TopNav = props => (
  <Navbar id="main-nav" fixed="top" bg="dark" expand="lg">
    <Navbar.Brand id="nav-logo" href="#home">JobSite.</Navbar.Brand>
    <Dropdown>
      <Dropdown.Toggle id="dropdown">Dropdown</Dropdown.Toggle>

      <Dropdown.Menu id="dropdown-menu">
        <Dropdown.Item className="text-light">Home</Dropdown.Item>
        <Dropdown.Item className="text-light">Calendar</Dropdown.Item>
        <Dropdown.Item className="text-light">Notes</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Navbar>
);

export default TopNav;
