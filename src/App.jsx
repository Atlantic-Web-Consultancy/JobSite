import React from 'react';
import TopNav from './components/topNav/TopNav.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example from './components/example/Example.jsx';
import SavedJobs from './components/savedJobs/SavedJobs.jsx';
import Account from './components/account/Account.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: ['My Jobs', 'Login/Logout'],
    };
  }

  render() {
    return (
      <div>
        <React.StrictMode>
          <Router>
            <TopNav navItems={this.state.navItems}/>
            <Switch>
              <Route exact path="/" component={Example} />
              {/* <Route
                path="/calendar"
                render={() => (
                  <div>
                    <CalendarView display={true} isAuthed={true} />
                  </div>
                )}
              /> */}
              <Route path="/login/logout" component={Account} />
              <Route exact path="/home" component={Example} />
              <Route path="/myjobs" component={SavedJobs} />
            </Switch>
          </Router>
        </React.StrictMode>
      </div>
    );
  }
}

export default App;
