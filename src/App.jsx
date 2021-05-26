/* eslint-disable import/extensions */
import React from 'react';
import Landing from './components/ed-componenets/Landing.jsx';
import JobListings from './components/ed-componenets/JobListings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <Landing /> */}
        <JobListings />
      </div>
    );
  }
}

export default App;
