import React from 'react';
// import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import JobSeekerUI from './components/JobSeeker/JobSeekerUI.jsx';
import EmployerUI from './components/Employer/EmployerUI.jsx';
import TopNav from './components/topnav/TopNav.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      jobSeeker: false,
    };

    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    const { jobSeeker } = this.state;
    this.setState({
      jobSeeker: !jobSeeker,
    });
  }

  render() {
    const { jobSeeker } = this.state;
    return (
      <div id="pageWrapper">
        <TopNav />
        <Button type="button" onClick={() => { this.toggleView(); }} style={{ marginTop: '3%' }}>Toggle JobSeeker/Employer View</Button>
        { jobSeeker ? <JobSeekerUI /> : <EmployerUI />}
      </div>
    );
  }
}

export default App;
