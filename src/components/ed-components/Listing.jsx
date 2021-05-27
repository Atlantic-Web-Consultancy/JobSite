import React from 'react';

function Listing(props) {
  return (
    <div id="listing-wrapper">
      <div id="first-row">
        <span> title | employement type</span>
        <br/>
        <span> employer | experience level</span>
        <br/>
        <span> location | salary</span>
      </div>
      <div id="description-wrapper">
        description text
      </div>
      <br/>
      <span>date posted</span>
    </div>
  )
}

export default Listing;
