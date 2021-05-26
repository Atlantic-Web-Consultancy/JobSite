import React from 'react';
import TopNav from './components/topNav/TopNav.jsx';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Example from './components/example/Example.jsx';
import SavedJobs from './components/savedJobs/SavedJobs.jsx';
import CalendarView from './components/calendar/CalendarView.jsx';
import Landing from './components/landingPage/Landing.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      navItems: ['Home', 'Calendar', 'Notes', 'My Jobs', 'Login/Logout'],
    };
  }

  render() {
    return (
      <React.StrictMode>
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route
              path="/calendar"
              render={() => (
                <div>
                  <CalendarView display={true} isAuthed={true} />
                </div>
              )}
            />
            <Route exact path="/home" component={Landing} />
            <Route path="/example" component={Example} />
            <Route path="/myjobs" component={SavedJobs} />
          </Switch>
        </Router>
      </React.StrictMode>
    );
  }
}

export default App;

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <Switch>
//         <Route exact path="/" component={App} />
//         <Route
//           path="/calendar"
//           render={() => (
//             <div>
//               <CalendarView display={true} isAuthed={true} />
//             </div>
//           )}
//         />
//         <Route exact path="/home" component={App} />
//         <Route path="/example" component={Example} />
//         <Route path="/myjobs" component={SavedJobs} />
//       </Switch>
//     </Router>
//   </React.StrictMode>
//   document.getElementById('root'),
// );