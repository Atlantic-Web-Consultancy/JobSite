import React, { useState, useEffect } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TopNav from '../topNav/TopNav.jsx';
import Parse from './Parse.js';

const SavedJobs = props => {
  const [key, setKey] = useState('saved');
  Parse.login((data) => console.log(data));

  const filterApps = (apps) => {
    console.log(apps);
  }

  return (
    <div>
      <div id="tabs">
        <Tabs id="tab-content"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="saved" title="Saved">
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
          </Tab>
          <Tab eventKey="applied" title="Applied">
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
          </Tab>
          <Tab eventKey="interviewed" title="Interviewed">
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
            <div className="tabs">
              <h2>Job Title</h2>
              <section>Description</section>
              <section>Status</section>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default SavedJobs;
