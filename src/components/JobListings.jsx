import React from 'react';

import Listing from './Listing.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import { FilterStyle, JobListingstyle, Wrapper } from '../styles/ListingStyle.js';

function JobListings() {
  return(
    <Container style={Wrapper}>
      <Row>
        <Col style={JobListingstyle}>
          <ul>
            <Listing />
            <Listing />
            <Listing />
            <Listing />
          </ul>
        </Col>
        <Col style={FilterStyle}>
          <h1>Filters section</h1>
        </Col>
      </Row>
    </Container>
  )
}

export default JobListings;
