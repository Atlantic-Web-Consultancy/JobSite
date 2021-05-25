import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import '../dist/main.css';
import App from './App.jsx';
import Example from './components/example/Example.jsx';
import SavedJobs from './components/savedJobs/SavedJobs.jsx';
import Calendar from './components/calendar/Calendar.jsx';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/calendar" display={true} component={Calendar} />
        <Route exact path="/home" component={App} />
        <Route path="/example" component={Example} />
        <Route path="/myjobs" component={SavedJobs} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);

// ReactDOM.render(<App />, document.getElementById('root'));
