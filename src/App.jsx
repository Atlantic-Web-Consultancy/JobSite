import React from 'react';
import Landing from './components/landingPage/Landing.jsx';
import ResumeSearchResults from './components/ResumeSearchResults/ResumeSearchResults.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Landing />
      // <ResumeSearchResults />
    );
  }
}

export default App;
