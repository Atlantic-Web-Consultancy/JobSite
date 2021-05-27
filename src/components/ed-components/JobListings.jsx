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
  const [partTime, setPartTime] = useState(false);
  const [remote, setRemote] = useState(false);
  const [minSlider, setSalaryMin] = useState('');
  const [maxSlider, setSalaryMax] = useState('');
  const [min, setMinSalary] = useState(0);
  const [max, setMaxSalary] = useState(0);


  const handleChange = () => {
    if (event.target.name === 'job') {
      setJob(event.target.value);
    }
    if (event.target.name === 'zip') {
      setZip(event.target.value);
    }
    if (event.target.name === 'salaryMin') {
      const minSlider = parseInt(event.target.value);
      const min = (minSlider * 1000);
      console.log('minsalary ', min)
      setMinSalary(min)
      setSalaryMin(minSlider);
    }
    if (event.target.name === 'salaryMax') {
      const maxSlider = parseInt(event.target.value);
      const max = (maxSlider * 10000);
      console.log('max', max);
      setMaxSalary(max);
      setSalaryMax(maxSlider);
    }
  }

  const handleInputChange = () => {
    const target = event.target;
    const name = target.name;

    if (event.target.name === 'part-time') {
      setPartTime(!partTime);
    }
    if (event.target.name === 'remote') {
      setRemote(!remote);
    }
  }


  return(
    <div id="wrapper" >
      <div id="listing-header">
        header
      </div>
      <div id="tests">
          <label style={{display: "none"}}>Search For Job</label>
          <input id="job-listing-input" type="job" placeholder="Job Title or Keyword" name="job" value={job} onChange={handleChange} />
          <br/>
          <label style={{display: "none"}}>City / Zip</label>
            <input id="zipcode-listing-input" type="city" placeholder="Place: City or Post Code" name="zip" value={zip} onChange={handleChange}/>
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
          <div id="filters">
            <label>
            Want to Work Part-Time?
            <input
              name="part-time"
              type="checkbox"
              checked={partTime}
              onChange={handleInputChange} />
            </label>
              <br />
              <label>
                Want to Work Remote?
                <input
                  name="remote"
                  type="checkbox"
                  checked={remote}
                  onChange={handleInputChange} />
              </label>

            <Form>
              <Form.Group >
                <Form.Label style={{position: "relative", top: "30px", left: "5%", textAlign: "center"}}>Salary Range</Form.Label>
                <div id="slider-box">
                  <Form.Label id="slider-labels">Min $</Form.Label>
                  <Form.Control id="formSlider-1" type="range" name="salaryMin" value={minSlider} onChange={handleChange}/>
                </div>
                <div id="slider-box">
                  <Form.Label id="slider-labels">Max $</Form.Label>
                  <Form.Control id="formSlider-2" type="range" name="salaryMax" value={maxSlider} onChange={handleChange}/>
                </div>
              </Form.Group>
            </Form>

          </div>
        </div>
      </div>

    </div>
  )
}

export default JobListings;
