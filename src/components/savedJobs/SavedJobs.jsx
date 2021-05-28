import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TopNav from '../topNav/TopNav.jsx';
import Parse from './Parse.js';

class SavedJobs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      savedApps: [],
      appliedApps: [],
      interviewedApps: [],
      showApps: false,
      key: 'saved'
    }
  }

  componentDidMount() {
    Parse.login((data) => this.filterApps(data));
  }

  filterApps(applications) {
    const savedApps = [];
    const appliedApps = [];
    const interviewedApps = [];
    for (let i = 0; i < applications.length; i++) {
      if (applications[i].status === 'Applied') {
        appliedApps.push(applications[i])
      } else if (applications[i].status === 'Saved') {
        savedApps.push(applications[i])
      } else if (applications[i].status === 'Interviewed') {
        interviewedApps.push(applications[i])
      }
    }
    this.setState({appliedApps, savedApps, interviewedApps})
  }

  render () {
    return (
      <div>
        <div id="tabs">
          <Tabs id="tab-content"
            activeKey={this.state.key}
            onSelect={(k) => this.setState({key: k})}
          >
            <Tab eventKey="saved" title="Saved">
              {this.state.savedApps.map((application) => {
                return (
              <div className="tabs">
                <h2>{application.title}</h2>
                <section>{application.description}</section>
                <section>{application.status}</section>
              </div>
                )
              })}
            </Tab>
            <Tab eventKey="applied" title="Applied">
            {this.state.appliedApps.map((application) => {
                return (
              <div className="tabs">
                <h2>{application.title}</h2>
                <section>{application.description}</section>
                <section>{application.status}</section>
              </div>
                )
            })}
            </Tab>
            <Tab eventKey="interviewed" title="Interviewed">
              {this.state.interviewedApps.map((application) => {
                return (
              <div className="tabs">
                <h2>{application.title}</h2>
                <section>{application.description}</section>
                <section>{application.status}</section>
              </div>
                )
              })}
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
};

export default SavedJobs;
