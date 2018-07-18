import React from 'react';
import './Link.css';

export default () => (
  <div className="dropdown show link corner">
    <div
      className="corner-text"
      id="dropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      Links
    </div>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <div>Chrome Tab</div>
      <div>Apps</div>
    </div>
  </div>
);
