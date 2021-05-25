import React from 'react';
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
        <h1 style={{ margin: '150px 0 0 200px' }}>Home view</h1>
        {/* <Landing /> */}
      </div>
    );
  }
}

export default App;
