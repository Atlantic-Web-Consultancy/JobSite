import React from 'react';
import TopNav from './components/topNav/TopNav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: ['Home', 'Calendar', 'Notes', 'My Jobs', 'Login/Logout'],
    };
  }

  render() {
    return (
      <div>
        <TopNav navItems={this.state.navItems} />
        <h1 style={{ margin: '150px 0 0 200px' }}>Home view</h1>
      </div>
    );
  }
}

export default App;
