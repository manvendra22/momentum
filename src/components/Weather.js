import React from 'react';
import './Weather.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faUmbrella } from '@fortawesome/free-solid-svg-icons';

export default () => (
  <div className="dropdown show weather corner">
    <div
      className="weather-text"
      id="dropdownMenuLink"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <div>
        {/* <i className="fas fa-sun" /> */}
        <FontAwesomeIcon icon={faCloud} />
        27
        <sup>o</sup>
      </div>
      <span>AHMEDABAD</span>
    </div>
    <div
      className="dropdown-menu dropdown-menu-right"
      aria-labelledby="dropdownMenuLink"
    >
      <div>
        <div className="weather-header">
          <div>Ahmedabad</div>
          <div>Cloudy</div>
        </div>
        <div className="weather-main">
          <i className="fas fa-sun" />
          <span>
            27
            <sup>o</sup>
          </span>
        </div>
        <hr />
        <div className="weather-footer">
          <div className="weather-day">
            <div>Wed</div>
            {/* <i className="fas fa-sun" /> */}
            <FontAwesomeIcon icon={faCloud} />
            <span>
              27
              <sup>o</sup>
            </span>
            <span>
              27
              <sup>o</sup>
            </span>
          </div>
          <div className="weather-day">
            <div>Wed</div>
            {/* <i className="fas fa-sun" /> */}
            <FontAwesomeIcon icon={faSun} />

            <span>
              27
              <sup>o</sup>
            </span>
            <span>
              27
              <sup>o</sup>
            </span>
          </div>
          <div className="weather-day">
            <div>Wed</div>
            {/* <i className="fas fa-sun" /> */}
            <FontAwesomeIcon icon={faCloud} />

            <span>
              27
              <sup>o</sup>
            </span>
            <span>
              27
              <sup>o</sup>
            </span>
          </div>
          <div className="weather-day">
            <div>Wed</div>
            {/* <i className="fas fa-sun" /> */}
            <FontAwesomeIcon icon={faUmbrella} />

            <span>
              27
              <sup>o</sup>
            </span>
            <span>
              27
              <sup>o</sup>
            </span>
          </div>
          <div className="weather-day">
            <div>Wed</div>
            {/* <i className="fas fa-sun" /> */}
            <FontAwesomeIcon icon={faUmbrella} />

            <span>
              27
              <sup>o</sup>
            </span>
            <span>
              27
              <sup>o</sup>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
