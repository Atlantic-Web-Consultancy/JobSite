import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TopNav from '../topNav/TopNav.jsx';

const SavedJobs = props => {
  const [key, setKey] = useState('saved');
  const [navItems, setNavItems] = useState(['Home', 'Calendar', 'Notes', 'Login/Logout']);

  return (
    <div>
      <TopNav navItems={navItems} />
      <div id="tabs">
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="saved" title="Saved">
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
          </Tab>
          <Tab eventKey="interviewed" title="Interviewed">
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
