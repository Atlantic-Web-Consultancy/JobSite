import React from 'react';
import Landing from './components/landingPage/Landing.jsx';
import TopNav from './components/topNav/TopNav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <TopNav />
        {/* <Landing /> */}
      </div>
    );
  }
}

export default App;
