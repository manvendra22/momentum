import React from 'react';
import './Setting.css';
import './toggle.css';

import Toggle from 'react-toggle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faMonero } from '@fortawesome/free-brands-svg-icons';

import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import { connect } from 'react-redux';

class Setting extends React.Component {
  state = {
    dropdownOpen: false,
    settingLevel: 1
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };

  render() {
    return (
      <ButtonDropdown
        className="corner"
        direction="up"
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
      >
        <DropdownToggle className="toggle">
          <FontAwesomeIcon icon={faCog} />
        </DropdownToggle>
        <DropdownMenu className="setting-menu">
          <div className="setting-container">
            <div className="setting-side">
              <div
                className="side-heading"
                onClick={() => {
                  this.setState({ settingLevel: 1 });
                }}
              >
                General
              </div>
              <div
                className="side-heading"
                onClick={() => {
                  this.setState({ settingLevel: 2 });
                }}
              >
                Todo
              </div>
              <div
                className="side-heading"
                onClick={() => {
                  this.setState({ settingLevel: 3 });
                }}
              >
                Photos
              </div>
              <div
                className="side-heading"
                onClick={() => {
                  this.setState({ settingLevel: 4 });
                }}
              >
                Quotes
              </div>
              <div
                className="side-heading"
                onClick={() => {
                  this.setState({ settingLevel: 5 });
                }}
              >
                Links
              </div>
              <div
                className="side-heading"
                onClick={() => {
                  this.setState({ settingLevel: 6 });
                }}
              >
                Balance
              </div>
              <div
                className="side-heading disable-setting"
                onClick={() => {
                  this.setState({ settingLevel: 7 });
                }}
              >
                Help
              </div>
              <div
                className="side-heading disable-setting"
                onClick={() => {
                  this.setState({ settingLevel: 8 });
                }}
              >
                What's New
              </div>
              <div
                className="side-heading disable-setting"
                onClick={() => {
                  this.setState({ settingLevel: 9 });
                }}
              >
                About
              </div>
              <div className="side-heading disable-setting">
                Upgrade to Plus
              </div>
              <Button color="secondary" onClick={this.props.onUpdatedStage}>
                Log in
              </Button>
            </div>
            <div className="setting-main">
              {this.state.settingLevel === 1 ? (
                <div>
                  <div className="side-content">
                    <div className="main-heading">General</div>
                    <div className="small-heading">
                      Customize your dashboard
                    </div>
                  </div>
                  <div className="side-content heading">SHOW</div>
                  <div className="side-content">
                    Links
                    <span className="side-toggle">
                      <Toggle
                        defaultChecked={this.props.showLinks}
                        onChange={this.props.onUpdatedShowLinks}
                      />
                    </span>
                  </div>
                  <div className="side-content">
                    Bookmarks Bar
                    <span className="side-toggle">
                      <Toggle
                        defaultChecked={this.props.showBookmarks}
                        onChange={this.props.onUpdatedShowBookmarks}
                      />
                    </span>
                  </div>
                  <div className="side-content">
                    Search
                    <span className="side-toggle">
                      <Toggle
                        defaultChecked={this.props.showSearch}
                        onChange={this.props.onUpdatedShowSearch}
                      />
                    </span>
                  </div>
                  <div className="side-content">
                    Weather
                    <span className="side-toggle">
                      <Toggle
                        defaultChecked={this.props.showWeather}
                        onChange={this.props.onUpdatedShowWeather}
                      />
                    </span>
                  </div>
                  <div className="side-content">
                    Focus
                    <span className="side-toggle">
                      <Toggle
                        defaultChecked={this.props.showFocus}
                        onChange={this.props.onUpdatedShowFocus}
                      />
                    </span>
                  </div>
                  <div className="side-content">
                    Quote
                    <span className="side-toggle">
                      <Toggle
                        defaultChecked={this.props.showQuote}
                        onChange={this.props.onUpdatedShowQuote}
                      />
                    </span>
                  </div>
                  <div className="side-content">
                    Todo
                    <span className="side-toggle">
                      <Toggle
                        defaultChecked={this.props.showTodo}
                        onChange={this.props.onUpdatedShowTodo}
                      />
                    </span>
                  </div>
                  <div className="side-content">
                    <div>Countdown</div>
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                    <div className="small-heading">
                      Countdown to important dates
                    </div>
                  </div>
                  <div className="side-content">
                    <div>Notes</div>
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                    <div className="small-heading">
                      Take quick notes and store wisdom to review
                    </div>
                  </div>
                  <div className="side-content heading">CUSTOMIZE</div>
                  <div className="side-content">
                    Theme
                    <span className="side-toggle small-heading">
                      Dark | Light | Custom
                    </span>
                  </div>
                  <div className="side-content">
                    Font
                    <span className="side-toggle small-heading">
                      Clssic | Modern | Startup | Retro | Warehouse | Quircky
                    </span>
                  </div>
                  <div className="side-content heading">OPTIONS</div>
                  <div className="side-content">
                    Clock format<span className="side-toggle small-heading">
                      12 hour | 24 hour
                    </span>
                  </div>
                  <div className="side-content">
                    <div>Percent Clock</div>
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                    <div className="small-heading">
                      Visualize your progression through the work day
                    </div>
                  </div>
                  <div className="side-content">
                    Search Provider<span className="side-toggle small-heading">
                      Google | Bing
                    </span>
                  </div>
                  <div className="side-content tip">
                    <div>Tip</div>
                    <div className="small-heading">
                      Many items in Momentum can be edited by double clicking on
                      them, including: your name, the clock, and to-dos
                    </div>
                  </div>
                </div>
              ) : null}
              {this.state.settingLevel === 2 ? (
                <div>
                  <div className="side-content">
                    <div className="main-heading">Todo</div>
                    <div className="small-heading">
                      Break your goals into manageable pieces
                    </div>
                  </div>
                  <div className="side-content heading">SETTINGS</div>
                  <div className="side-content">
                    Stay Open
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                    <div className="small-heading">
                      Stay open on new tab and other usage
                    </div>
                  </div>
                  <div className="side-content">
                    <div>Autofocus</div>
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                    <div className="small-heading">
                      Autofocus set top todos as your main focus
                    </div>
                  </div>
                  <div className="side-content">
                    <div className="heading">MULTI-TODO LISTS</div>
                    <div className="small-heading">
                      Organise your todos into multiple lists
                    </div>
                    <Button color="secondary" size="lg">
                      + Add List
                    </Button>
                  </div>
                  <div className="side-content tip">
                    <div className="heading">INTEGRATIONS</div>
                    <div className="small-heading">
                      Connect oyur external todos
                    </div>
                    <div className="small-heading">
                      No external task managers connected. Add an integration to
                      get started!
                    </div>
                    <Button color="secondary" size="lg">
                      + Add Integrations
                    </Button>
                  </div>
                </div>
              ) : null}
              {this.state.settingLevel === 3 ? (
                <div>
                  <div className="side-content">
                    <div className="main-heading">Photos</div>
                    <div className="small-heading">
                      See a new inspiring photo each day
                    </div>
                  </div>
                  <div className="inline">
                    <div className="side-content">PHOTOS</div>
                    <div className="side-content">FAVORITES</div>
                    <div className="side-content">HISTORY</div>
                    <Button color="secondary" size="lg">
                      + Add Photo
                    </Button>
                  </div>
                </div>
              ) : null}
              {this.state.settingLevel === 4 ? (
                <div>
                  <div className="side-content">
                    <div className="main-heading">Quotes</div>
                    <div className="small-heading">
                      See a new inspiring photo each day
                    </div>
                  </div>
                  <div className="inline">
                    <div className="side-content">QUOTES</div>
                    <div className="side-content">FAVORITES</div>
                    <div className="side-content">HISTORY</div>
                    <Button color="secondary" size="lg">
                      + Add Quote
                    </Button>
                  </div>
                </div>
              ) : null}
              {this.state.settingLevel === 5 ? (
                <div>
                  <div className="side-content">
                    <div className="main-heading">Links & Bookmarks bar</div>
                    <div className="small-heading">
                      Quick access to your favorite links
                    </div>
                  </div>
                  <div className="side-content">
                    Show Links
                    <span className="side-toggle">
                      <Toggle
                        defaultChecked={this.props.showLinks}
                        onChange={this.props.onUpdatedShowLinks}
                      />
                    </span>
                  </div>
                  <div className="side-content">
                    Show Bookmarks Bar
                    <span className="side-toggle">
                      <Toggle
                        defaultChecked={this.props.showBookmarks}
                        onChange={this.props.onUpdatedShowBookmarks}
                      />
                    </span>
                  </div>
                  <div className="side-content">
                    Show Chrome Tab in
                    <span className="side-toggle small-heading">
                      Links | Bookmarks | Dash | None
                    </span>
                  </div>
                  <div className="side-content">
                    Show Apps in
                    <span className="side-toggle small-heading">
                      Links | Bookmarks | Dash | None
                    </span>
                  </div>
                  <div className="side-content">
                    Open links in new tab
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                  </div>

                  <div className="side-content heading">LINKS</div>
                  <div className="side-content">
                    Stay Open
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                    <div className="small-heading">
                      Stay open on new tab and other usage
                    </div>
                  </div>
                  <div className="side-content heading">BOOKMARKS BAR</div>
                  <div className="side-content">
                    Icons only
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                    <div className="small-heading">
                      Hide titles for a clean compact look
                    </div>
                  </div>
                  <div className="side-content">
                    Show Most Visited
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                  </div>
                  <div className="side-content">
                    Start in Most Visited
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                    <div className="small-heading">
                      Open most visited folder by default
                    </div>
                  </div>
                  <div className="side-content">
                    Show Bookmarks Manager
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                  </div>
                  <div className="side-content">
                    Show Other Bookmarks
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                  </div>
                </div>
              ) : null}
              {this.state.settingLevel === 6 ? (
                <div>
                  <div className="side-content">
                    <div className="main-heading">Balance</div>
                    <div className="small-heading">
                      Balance your day with periods of uptime and downtime
                    </div>
                  </div>
                  <div className="side-content">
                    Enable Balance Mode
                    <span className="side-toggle">
                      <Toggle />
                    </span>
                    <div className="small-heading">
                      Hide productivity features during downtime
                    </div>
                  </div>
                  <div className="side-content heading">UPTIME SCHEDULE</div>
                  <div className="side-content header">
                    <div className="small-heading">
                      Times when productivity features are active
                    </div>
                  </div>
                  <div className="side-content">
                    Hours of the day
                    <span className="side-toggle small-heading">
                      8:30-16:30 | 9:00-17:00 | 9.30-17.30 | Custom
                    </span>
                  </div>
                  <div className="side-content">
                    Day of the week
                    <span className="side-toggle small-heading">
                      Weekdays | Every day | Custom
                    </span>
                  </div>
                  <div className="side-content tip">
                    <div className="small-heading">
                      There is virtue in work and there is virtue in rest. Use
                      both and overlook neither.
                      <div>-Alan Cohen</div>
                    </div>
                  </div>
                </div>
              ) : null}
              {this.state.settingLevel === 7 ? (
                <div>
                  <div className="side-content">
                    <div className="main-heading">Help</div>
                  </div>
                  <div className="side-content tip">
                    <div>TIPS</div>
                    <div className="small-heading">
                      To change your name, toggle the clock between 12 and 24
                      hour, or change your location, double click on the setting
                      you want to change.
                    </div>
                    <br />
                    <table>
                      <tr>
                        <td>Todo</td> <td>Links</td>
                      </tr>
                      <tr>
                        <td>Focus</td> <td>Search</td>
                      </tr>
                      <tr>
                        <td>Bookmarks bar</td> <td>Chrome Tab</td>
                      </tr>
                      <tr>
                        <td>Settings</td> <td>Weather</td>
                      </tr>
                      <tr>
                        <td>Cancel, close</td> <td>Hold to admire photo</td>
                      </tr>
                    </table>
                    <div className="small-heading">
                      Press TAB to focus Momentum when opening a new tabo be
                      able to use hotkeys. You may need to press tab more than
                      once.
                      <div>-Alan Cohen</div>
                    </div>
                  </div>
                  <div>NEED MORE HELP?</div>
                  <Button color="secondary" size="lg">
                    Check out our Help Center
                  </Button>
                </div>
              ) : null}
              {this.state.settingLevel === 8 ? (
                <div>
                  <div className="side-content">
                    <div className="main-heading">What's New</div>
                  </div>
                  <div className="small-heading">
                    Updates from the Momentum Team
                  </div>
                </div>
              ) : null}
              {this.state.settingLevel === 9 ? (
                <div className="about">
                  <FontAwesomeIcon className="icon" icon={faMonero} />
                  <div className="main-heading">Momentum</div>
                  <div className="small-heading">
                    Thank you for your support!
                  </div>
                  <div className="side-content">
                    Feedback | Website | Blog | Instagram | Facebook | Twitter
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

const mapStateToProps = state => {
  return {
    showLinks: state.showLinks,
    showBookmarks: state.showBookmarks,
    showSearch: state.showSearch,
    showWeather: state.showWeather,
    showFocus: state.showFocus,
    showQuote: state.showQuote,
    showTodo: state.showTodo,
    stage: state.stage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdatedShowLinks: () => dispatch({ type: 'UPDATE_SHOW_LINKS' }),
    onUpdatedShowBookmarks: () => dispatch({ type: 'UPDATE_SHOW_BOOKMARKS' }),
    onUpdatedShowSearch: () => dispatch({ type: 'UPDATE_SHOW_SEARCH' }),
    onUpdatedShowWeather: () => dispatch({ type: 'UPDATE_SHOW_WEATHER' }),
    onUpdatedShowFocus: () => dispatch({ type: 'UPDATE_SHOW_FOCUS' }),
    onUpdatedShowQuote: () => dispatch({ type: 'UPDATE_SHOW_QUOTE' }),
    onUpdatedShowTodo: () => dispatch({ type: 'UPDATE_SHOW_TODO' }),
    onUpdatedStage: () => dispatch({ type: 'UPDATE_STAGE' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setting);
