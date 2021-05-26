import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import '../dist/main.css';
import App from './App.jsx';
import Example from './components/example/Example.jsx';
import SavedJobs from './components/savedJobs/SavedJobs.jsx';
import CalendarView from './components/calendar/CalendarView.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route
          path="/calendar"
          render={() => (
            <div>
              <CalendarView display={true} isAuthed={true} />
            </div>
          )}
        />
        <Route exact path="/home" component={App} />
        <Route path="/example" component={Example} />
        <Route path="/myjobs" component={SavedJobs} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(<App />, document.getElementById('root'));
