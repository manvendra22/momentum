import React from 'react';
import './Weather.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloud, faUmbrella } from '@fortawesome/free-solid-svg-icons';

import { ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';

import { connect } from 'react-redux';

class Weather extends React.Component {
  state = {
    dropdownOpen: false
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return !this.props.showWeather ? null : (
      <ButtonDropdown
        className="corner"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle className="weather-text toggle">
          <div>
            <FontAwesomeIcon className="icon" icon={faSun} />
            27
            <sup>o</sup>
          </div>
          <span>AHMEDABAD</span>
        </DropdownToggle>

        <DropdownMenu right="false" className="weather-menu">
          <div>
            <div className="weather-header">
              <div className="city">Ahmedabad</div>
              <div>Sunny</div>
            </div>
            <div className="weather-main">
              <FontAwesomeIcon className="icon" icon={faSun} />
              <span>
                27
                <sup>o</sup>
              </span>
            </div>
            <hr />
            <div className="weather-footer">
              <div className="weather-day">
                <div>Wed</div>
                <FontAwesomeIcon className="icon" icon={faCloud} />
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
                <div>Thu</div>
                <FontAwesomeIcon className="icon" icon={faUmbrella} />
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
                <div>Fri</div>
                <FontAwesomeIcon className="icon" icon={faUmbrella} />
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
                <div>Sat</div>
                <FontAwesomeIcon className="icon" icon={faSun} />
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
                <div>Sun</div>
                <FontAwesomeIcon className="icon" icon={faCloud} />
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
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

const mapStateToProps = state => {
  return {
    showWeather: state.showWeather
  };
};

export default connect(
  mapStateToProps,
  null
)(Weather);
