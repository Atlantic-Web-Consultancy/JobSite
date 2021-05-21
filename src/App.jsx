import React from 'react';
import Landing from './components/landingPage/Landing.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Landing />
    );
  }
}

export default App;
