/* eslint-disable import/extensions */
import React from 'react';
import Landing from './components/Landing.jsx';
import JobListings from './components/JobListings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Landing />
      // <JobListings />
    );
  }
}

export default App;
