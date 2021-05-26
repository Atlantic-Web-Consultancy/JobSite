/* eslint-disable import/extensions */
import React from 'react';
import TopNav from './components/topNav/TopNav.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example from './components/example/Example.jsx';
import Account from './components/account/Account.jsx';
import Landing from './components/ed-components/Landing.jsx';
import JobListings from './components/ed-components/JobListings.jsx';
import JobSeekerUI from './components/jobSeeker/JobSeekerUI.jsx';
import SavedJobs from './components/savedJobs/SavedJobs.jsx';
import ResumeSearchResults from './components/ResumeSearchResults/ResumeSearchResults.jsx';
import NotesModule from './components/NotesModule/NotesModule.jsx';
import EmployerUI from './components/employer/EmployerUI.jsx';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      navItemsEmployee: ['My Jobs', 'Login/Logout', 'JobListings'],
      navItemsEmployer: ['Candidates', 'Login/Logout'],
      navItemsLanding: ['Landing'],
      view: 'none',
      logIn: 'employee',
      displayNotes: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeView = this.changeView.bind(this);
    this.changeAccountView = this.changeAccountView.bind(this);
    this.changeNotesView = this.changeNotesView.bind(this);
    this.showNotes = this.showNotes.bind(this);
  }

  handleSubmit(loggedIn) {
    this.setState({
      loggedIn,
    });
  }

  changeView(view) {
    this.setState({
      view,
    });
  }

  changeAccountView(view) {
    this.setState({
      logIn: view,
    });
  }

  changeNotesView(view) {
    this.setState({
      displayNotes: view,
    });
  }

  showNotes() {
    if (this.state.displayNotes) {
      return (
        <NotesModule
          displayNotes={this.state.displayNotes}
          changeNotesView={this.changeNotesView}
        />
      );
    }
  }

  render() {
    const {
      navItemsEmployee,
      navItemsEmployer,
      navItemsLanding,
      view,
      logIn,
    } = this.state;

    if (view === 'none') {
      return (
        <React.StrictMode>
          <Router>
            <TopNav navItems={navItemsLanding} />
            <Switch>
              <Route
                path="/login/logout"
                render={() => (
                  <Account
                    handleSubmit={this.handleSubmit}
                    logIn={logIn}
                    isAuthed={true}
                    changeAccountView={this.changeAccountView}
                    changeView={this.changeView}
                  />
                )}
              />
              <Route
                path="/"
                render={() => (
                  <Landing
                    changeView={this.changeView}
                    isAuthed = {true}
                    changeAccountView={this.changeAccountView}
                  />
                )}
              />
            </Switch>
          </Router>
        </React.StrictMode>
      );
    } if (view === 'employee') {
      return (
        <div>
          <React.StrictMode>
            <Router>
              <TopNav
                navItems={navItemsEmployee}
                changeNotesView={this.changeNotesView}
              />
              {this.showNotes()}
              <Switch>
                <Route
                  path="/login/logout"
                  render={() => (
                    <Account
                      handleSubmit={this.handleSubmit}
                      loggedIn={logIn}
                      isAuthed={true}
                      changeAccountView={this.changeAccountView}
                      changeView={this.changeView}
                    />
                  )}
                />
                <Route path="/myjobs" component={SavedJobs} />
                <Route path="/joblistings" component={JobListings} />
                <Route path="/" component={JobSeekerUI} />
                <Route exact path="/home" component={JobSeekerUI} />
              </Switch>
            </Router>
          </React.StrictMode>
        </div>
      );
    }
    return (
      <div />
    );
  }
}

export default App;

    {/*landing dropdown login/logout, btns employer & employee */}