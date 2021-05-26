import React, { useState } from 'react';

import Listing from './Listing.jsx';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function JobListings() {
  const [job, setJob] = useState('');
  const [zip, setZip] = useState('');

  const handleChange = () => {
    if (event.target.name === 'job') {
      setJob(event.target.value);
    }
    if (event.target.name === 'zip') {
      setZip(event.target.value);
    }
  }

  return(
    <div id="wrapper" >
      <div id="listing-header">
        header
        <div>
          <input id="job-search" placeholder="Job Title or Keyword" name="job" value={job} onChange={handleChange}/>
          <input id="zip-search" placeholder="Zipcode or Location" name="zip" value={zip} onChange={handleChange}/>
          <button>search</button>
        </div>
      </div>
      <div id="content">
        <div id="listings">
          <h2 style={{textAlign: "center"}}>Listings </h2>
          <ul id="listings-ul">
            <Listing />
            <Listing />
            <Listing />
            <Listing />
          </ul>
        </div>
        <div id="filter-wrapper">
          <h3 style={{textAlign: "left"}}>[ ] remote job checkbox</h3>
          <div id="filter-box">
            <Form>
              <Form.Row style={{position: "relative", top: "15px"}}>
                <Col>
                  <Form.Control placeholder="Min $$$" id="income-1"/>
                </Col>
                <div style={{position: "relative", right: 20,
                    bottom: 5, fontSize: "2em"}}>-</div>
                <Col>
                  <Form.Control placeholder="Max $$$" id="income-2" />
                </Col>
              </Form.Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobListings;
