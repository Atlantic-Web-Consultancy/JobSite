import React, { useState } from 'react';
import $ from 'jquery';
import Listing from './Listing.jsx';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function JobListings() {
  const [job, setJob] = useState('Job Title or Keyword');
  const [zip, setZip] = useState('');
  const [partTime, setPartTime] = useState(false);
  const [remote, setRemote] = useState(false);
  const [minSlider, setSalaryMin] = useState('');
  const [maxSlider, setSalaryMax] = useState('');
  const [min, setMinSalary] = useState(40000);
  const [max, setMaxSalary] = useState(200000);
  const [jobs, setJobs] = useState([]);


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
      setMinSalary(min)
      setSalaryMin(minSlider);
    }
    if (event.target.name === 'salaryMax') {
      const maxSlider = parseInt(event.target.value);
      const max = (maxSlider * 10000);
      setMaxSalary(max);
      setSalaryMax(maxSlider);
    }
  }

  const handleInputChange = (name) => {
    if (name === 'part-time') {
      setPartTime(!partTime);
    }
    if (name === 'remote') {
      setRemote(!remote);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (partTime) {
      var employmentType = 'Part-Time'
    } else {
      var employmentType = 'Full-Time'
    }
    if (remote) {
      var jobLogistic = 'Remote'
    } else {
      var jobLogistic = 'Onsite'
    }
    const reqData = {
      employmentType,
      remote: jobLogistic,
      distance: zip,
      salaryMin: min,
      salaryMax: max,
    }
    if (job !== 'Job Title or Keyword' && job !== '') {
      reqData['employmentTitle'] = job;
    }
    $.ajax({
      url: "http://3.137.145.92/jobs",
      type: "get",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json"
      },
      data: reqData,
      success: (response) => {
        console.log(response)
        setJobs(response)
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  return(
    <div id="wrapper" >
      <div id="listing-header">
        header
      </div>
      <div id="content">
        <div id="filter-wrapper">
          <div id="checkboxes">
            {partTime ? <div name="part-time" style={{color: "#00a004"}} onClick={() => handleInputChange('part-time')}> Part-Time
            </div>: <div name="part-time" style={{color: "black"}} onClick={() => handleInputChange('part-time')}>Part-Time
            </div>}
              {remote ? <div name="remote" style={{color: "#00a004"}} onClick={() => handleInputChange('remote')}>Remote</div> : <div name="remote" style={{color: "black"}} onClick={() => handleInputChange('remote')}>Remote</div>}

          </div>
          <Form id="listing-sliders">
            <Form.Group style={{marginBottom: "1rem",
    position: "relative",
    top: "30"}}>
              <Form.Label style={{position: "relative", top: "30px", left: "5%", textAlign: "center"}} />
              <div id="slider-box">
                <Form.Label id="slider-labels">Min $ : {min}</Form.Label>
                <Form.Control id="formSlider-1" type="range" name="salaryMin" value={minSlider} onChange={handleChange}/>
              </div>
              <div id="slider-box">
                <Form.Label id="slider-labels">Max $ : {max}</Form.Label>
                <Form.Control id="formSlider-2" type="range" name="salaryMax" value={maxSlider} onChange={handleChange}/>
              </div>
            </Form.Group>
            <Button id="slider-button" variant="primary" type="submit" onClick={handleSubmit}>
              Apply Filters
            </Button>
          </Form>
          <div>
            <label style={{display: "none"}}>Search For Job</label>
            <input id="job-listing-input" type="job" placeholder="Job Title or Keyword" name="job" value={job} onChange={handleChange}/>
            <br/>
            <label style={{display: "none"}}>Miles Away</label>
            <input id="zipcode-listing-input" type="city" placeholder="Miles Away" name="zip" value={zip} onChange={handleChange}/>
          </div>
        </div>
        <div id="listings">
          <h2 style={{textAlign: "center"}}>Listings </h2>
          <ul id="listings-ul">
            {/* <Listing /> */}
            {jobs.map((job, i) => {
              return (<Listing key={i} job={job} />)
            })}
          </ul>
        </div>

      </div>
    </div>
  )
}

export default JobListings;

