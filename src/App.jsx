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
import CalendarView from './components/calendar/CalendarView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItemsEmployee: ['My Jobs', 'Login', 'JobListings'],
      navItemsEmployer: ['Resumes', 'Login'],
      navItemsLanding: ['Landing'],
      view: 'base',
      logIn: 'base',
      displayNotes: false,
      displayCal: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeView = this.changeView.bind(this);
    this.changeAccountView = this.changeAccountView.bind(this);
    this.changeNotesView = this.changeNotesView.bind(this);
    this.showNotes = this.showNotes.bind(this);
    this.toggleCal = this.toggleCal.bind(this);
  }

  handleSubmit(view) {
    console.log(view)
    this.setState({
      view: view,
      logIn: view,
    });
  }

  changeView(view) {
    this.setState({
      view,
      logIn: view,
    });
  }

  changeAccountView(logIn) {
    this.setState({
      logIn,
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

  toggleCal(displayCal) {
    this.setState({
      displayCal,
    })
  };

  render() {
    const {
      navItemsEmployee,
      navItemsEmployer,
      navItemsLanding,
      view,
      logIn,
    } = this.state;

    if (view === 'base') {
      return (
        <React.StrictMode>
          <Router>
            <TopNav
              toggleCal={this.toggleCal}
              navItems={navItemsLanding}
            />
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
    } if (view === 'employer') {
      return (
        <React.StrictMode>
          <Router>
            <TopNav
              navItems={navItemsEmployer}
              changeNotesView={this.changeNotesView}
              toggleCal={this.toggleCal}
            />
            <CalendarView toggleCal={this.toggleCal} display={this.state.displayCal} />
            {this.showNotes()}
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
              <Route path="/resumes" component={ResumeSearchResults} />
              <Route path="/" component={EmployerUI} />
              <Route path="/home" component={EmployerUI} />
            </Switch>
          </Router>
        </React.StrictMode>
      );
    }
    return (
      <div>
        <React.StrictMode>
          <Router>
            <TopNav
              navItems={navItemsEmployee}
              changeNotesView={this.changeNotesView}
              toggleCal={this.toggleCal}
            />
            <CalendarView toggleCal={this.toggleCal} display={this.state.displayCal} />
            {this.showNotes()}
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
              <Route path="/myjobs" component={SavedJobs} />
              <Route path="/joblistings" component={JobListings} />
              <Route path="/"
                render={() => (
                  <JobSeekerUI toggleCal={this.toggleCal} />
                )}
               />
              <Route path="/home"
                render={() => (
                  <JobSeekerUI toggleCal={this.toggleCal} />
                )}
              />
            </Switch>
          </Router>
        </React.StrictMode>
      </div>
    );
  }
}

export default App;
