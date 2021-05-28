import React from 'react';
import $ from 'jquery';
import OwnedJob from './ownedJob.js';

class EmployersJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: 'http://3.137.145.92/employers/jobpostings',
      success: (data) => {
        console.log('jobdata', data);
        this.setState({
          jobs: data
        })
      },
      error: (err) => console.log('getjobserr', err)
    })
  }

  render() {
    const { jobs } = this.state;
    return (
      <div id="sam">
      { jobs.length > 0 && jobs.map((job) => <OwnedJob />) }
      </div>
    )
  }
}

export default EmployersJobs;