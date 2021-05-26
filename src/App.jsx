import React from 'react';
import TopNav from './components/topNav/TopNav.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example from './components/example/Example.jsx';
import Account from './components/account/Account.jsx';
import Landing from './components/ed-components/Landing.jsx';
import JobSeekerUI from './components/jobSeeker/JobSeekerUI.jsx';
import SavedJobs from './components/savedJobs/SavedJobs.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: ['My Jobs', 'Login/Logout'],
      view: 'employee',
      loggedIn: 'true',
    };

    this.hanldeSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(loggedIn) {
    this.setState({
      loggedIn,
    });
  }

  render() {
    return (
      <div>
        <React.StrictMode>
          <Router>
            <TopNav navItems={this.state.navItems}/>
            <Switch>
              {/* <Route exact path="/" component={Landing} /> */}
              <Route
                path="/login/logout"
                render={() => (
                  <Account handleSubmit={this.handleSubmit} loggedIn={this.state.loggedIn} isAuthed={true} />
                )}
              />
              <Route path="/myjobs" component={SavedJobs} />
              <Route path="/" component={JobSeekerUI} />
              {/* <Route path="/resume" component={ResumeSearchResults} /> */}
              {/* <Route path="/joblistings" component={JobListings} /> */}
              <Route path="/login/logout" component={Account} />
              <Route exact path="/home" component={JobSeekerUI} />
            </Switch>
          </Router>
        </React.StrictMode>
      </div>
    );
  }
}

export default App;
