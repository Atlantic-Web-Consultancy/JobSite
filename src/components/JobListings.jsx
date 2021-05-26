import React from 'react';

import Listing from './Listing.jsx';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

function JobListings() {
  return(
    <div id="wrapper" >
      <div id="listing-header">
        header
        <div id="listing-search-input">
          <input />
        </div>
      </div>
      <div id="content">
        <div id="listings">
          <h2>Listings Box</h2>
          <h4>unordered list of listings</h4>
          <ul>
            <Listing />
            <Listing />
            <Listing />
            <Listing />
          </ul>
        </div>
        <div id="filters">
          <h1>Filters section</h1>
        </div>
      </div>
    </div>
  )
}

export default JobListings;
