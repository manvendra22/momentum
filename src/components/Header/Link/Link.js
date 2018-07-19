import React from 'react';
import './Link.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChrome, faAppStore } from '@fortawesome/free-brands-svg-icons';

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
      <div>
        <FontAwesomeIcon icon={faChrome} />{' '}
        <a href="chrome-search://local-ntp/local-ntp.html">Chrome Tab</a>
      </div>
      <div>
        <FontAwesomeIcon icon={faAppStore} /> <a href="chrome://apps">Apps</a>
      </div>
      <div className="new-link">New Link</div>
    </div>
  </div>
);
