import React from 'react';
import './Setting.css';
import './toggle.css';

import Toggle from 'react-toggle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <div className="dropup show setting corner">
    <div
      className="corner-text"
      id="dropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      {/* <i className="fas fa-cog" /> */}
      <FontAwesomeIcon icon={faCog} />
    </div>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
      <div className="setting-container">
        <div className="setting-side">
          <div className="side-heading">General</div>
          <div className="side-heading">Todo</div>
          <div className="side-heading">Photos</div>
          <div className="side-heading">Quotes</div>
          <div className="side-heading">Links</div>
          <div className="side-heading">Balance</div>
          <div className="side-heading">Help</div>
          <div className="side-heading">What's New</div>
          <div className="side-heading">About</div>
          <div className="side-heading">Upgrade to Plus</div>
          <div className="side-heading">Log In</div>
        </div>
        <div className="setting-main">
          <div className="side-content">
            <div>General</div>
            <div>Customize your dashboard</div>
          </div>
          <div className="side-content">SHOW</div>
          <div className="side-content">
            Links<span className="side-toggle">
              <Toggle />
            </span>
          </div>
          <div className="side-content">
            Bookmarks Bar<span className="side-toggle">
              <Toggle />
            </span>
          </div>
          <div className="side-content">
            Search<span className="side-toggle">
              <Toggle />
            </span>
          </div>
          <div className="side-content">
            Weather<span className="side-toggle">
              <Toggle />
            </span>
          </div>
          <div className="side-content">
            Focus<span className="side-toggle">
              <Toggle />
            </span>
          </div>
          <div className="side-content">
            Quote<span className="side-toggle">
              <Toggle />
            </span>
          </div>
          <div className="side-content">
            Todo<span className="side-toggle">
              <Toggle />
            </span>
          </div>
          <div className="side-content">
            <div>Countdown</div>
            <span className="side-toggle">
              <Toggle />
            </span>
            <div>Countdown to important dates</div>
          </div>
          <div className="side-content">
            <div>Notes</div>
            <span className="side-toggle">
              <Toggle />
            </span>
            <div>Take quick notes and store wisdom to review</div>
          </div>
          <div className="side-content">CUSTOMIZE</div>
          <div className="side-content">
            Theme<span className="side-toggle">Dark | Light | Custom</span>
          </div>
          <div className="side-content">
            Font<span className="side-toggle">
              Clssic | Modern | Startup | Retro | Warehouse | Quircky
            </span>
          </div>
          <div className="side-content">OPTIONS</div>
          <div className="side-content">
            Clock format<span className="side-toggle">12 hour | 24 hour</span>
          </div>
          <div className="side-content">
            <div>Percent Clock</div>
            <span className="side-toggle">
              <Toggle />
            </span>
            <div>Visualize your progression through the work day</div>
          </div>
          <div className="side-content">
            Search Provider<span className="side-toggle">Google | Bing</span>
          </div>
          <div className="side-content">
            <div>Tip</div>
            <div>
              Many items in Momentum can be edited by double clicking on them
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
