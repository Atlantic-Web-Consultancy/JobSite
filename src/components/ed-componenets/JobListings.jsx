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
  const [salaryMin, setSalaryMin] = useState('');
  const [salaryMax, setSalaryMax] = useState('');

  const handleChange = () => {
    if (event.target.name === 'job') {
      setJob(event.target.value);
    }
    if (event.target.name === 'zip') {
      setZip(event.target.value);
    }
    if (event.target.name === 'salaryMin') {
      setSalaryMin(event.target.value);
    }
    if (event.target.name === 'salaryMax') {
      setSalaryMax(event.target.value);
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
          <div style={{textAlign: "left"}}>
            <Form>
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="part-time" name="full-time" type={type} id={`inline-${type}-1`} />
                <Form.Check inline label="full-time" name="onsite" type={type} id={`inline-${type}-2`} />
              </div>
            ))}
            {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="remote" name="full-time" type={type} id={`inline-${type}-1`} />
                <Form.Check inline label="onsite" name="onsite" type={type} id={`inline-${type}-2`} />
              </div>
            ))}
            </Form>
          </div>
          <div id="filter-box">
            <Form>
              <Form.Group controlId="formBasicRange">
                <Form.Label>Salary Range</Form.Label>
                <Form.Control id="formSlider" type="range" name="salaryMin" value={salaryMin} onChange={handleChange}/>
                <Form.Control id="formSlider" type="range" name="salaryMax" value={salaryMax} onChange={handleChange}/>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default JobListings;
